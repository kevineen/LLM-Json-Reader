'use client';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { chunkSizeAtom, indexAtom, jsonDataAtom, renderedDataAtom } from '@/state/atmos/jsonDataAtom';
import { useRef, useEffect, useState, useCallback } from 'react';
import Button from '@/components/atoms/Button/Button';

interface SidebarProps {
  backgroundColor: string;
  textColor: string;
  selectedBackgroundColor: string;
  selectedTextColor: string;
  hoverBackgroundColor: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  backgroundColor,
  textColor,
  selectedBackgroundColor,
  selectedTextColor,
}) => {
  const { data: jsonData, totalCount } = useRecoilValue(jsonDataAtom);
  const chunkSize = useRecoilValue(chunkSizeAtom);
  const setRenderedData = useSetRecoilState(renderedDataAtom);
  const renderedData = useRecoilValue(renderedDataAtom);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [index, setIndex] = useRecoilState(indexAtom);

  const selectedItemRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const loadMoreData = useCallback(async () => {
  if (renderedData.length < jsonData.length) {
    setIsLoadingMore(true);
    const start = renderedData.length;
    const end = Math.min(start + chunkSize, jsonData.length);
    const newData = jsonData.slice(start, end);
    setRenderedData((prevData) => [...prevData, ...newData]);
    setIsLoadingMore(false);
  }
}, [renderedData.length, chunkSize, jsonData, setRenderedData]);

useEffect(() => {
  setRenderedData(jsonData.slice(0, chunkSize));
}, [jsonData, chunkSize, setRenderedData]);

  useEffect(() => {
  if (selectedItemRef.current && sidebarRef.current) {
    const sidebar = sidebarRef.current;
    const selectedItem = selectedItemRef.current;
    const itemHeight = selectedItem.offsetHeight;
    const sidebarHeight = sidebar.offsetHeight;

    // 選択中のアイテムの前後に表示されるアイテムの数
    const bufferItems = 4;
    let scrollPosition = sidebar.scrollTop;

    // 選択中のアイテムがサイドバーの表示範囲内にあるかどうかをチェック
    const selectedItemTop = index * itemHeight;
    const selectedItemBottom = selectedItemTop + itemHeight;
    const sidebarVisibleTop = sidebar.scrollTop;
    const sidebarVisibleBottom = sidebarVisibleTop + sidebarHeight;

    // 選択中のアイテムがサイドバーの上部に近づいた場合
    if (selectedItemTop < sidebarVisibleTop + itemHeight * bufferItems) {
      scrollPosition = Math.max(selectedItemTop - itemHeight * bufferItems, 0);
    }
    // 選択中のアイテムがサイドバーの下部に近づいた場合
    else if (selectedItemBottom > sidebarVisibleBottom - itemHeight * bufferItems) {
      // サイドバーの下部に表示されるアイテムの数を考慮してスクロール位置を調整
      scrollPosition = selectedItemBottom + itemHeight * bufferItems - sidebarHeight;
    }

    // サイドバーをスクロールする
    sidebar.scrollTop = scrollPosition;
  }
}, [index, jsonData.length]);

  return (
    <div ref={sidebarRef} className="p-4 h-full overflow-y-auto" style={{ backgroundColor, color: textColor }}>
      {jsonData.length === 0 ? (
        <div className="text-center">LLM JP Eval データの<br />ファイルを読み込んでください</div>
      ) : (
        renderedData.map((data, i) => (
          <div
            key={i}
            ref={index === i ? selectedItemRef : null}
            className={`py-2 px-4 cursor-pointer truncate overflow-hidden text-ellipsis whitespace-nowrap
              ${index === i ? 'selected' : 'hover:bg-gray-200'
              }`}
            style={{
              backgroundColor: index === i ? selectedBackgroundColor : '',
              color: index === i ? selectedTextColor : '',
            }}
            onClick={() => setIndex(i)}
          >
            {`${i}: ${data.input}`}
          </div>
        ))
      )}
      {isLoadingMore && <div className="text-center">読み込み中...</div>}
      {!isLoadingMore && renderedData.length < totalCount && (
        <div className="text-center mt-4">
          <Button onClick={loadMoreData}>次の1000件を読み込む</Button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
