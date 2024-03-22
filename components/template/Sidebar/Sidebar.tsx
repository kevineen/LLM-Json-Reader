import { useRecoilState, useRecoilValue } from 'recoil';
import { indexAtom, jsonDataAtom } from '@/state/atmos/jsonDataAtom';
import { useRef, useEffect } from 'react';

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
  hoverBackgroundColor,
}) => {
  const jsonData = useRecoilValue(jsonDataAtom);
  const [index, setIndex] = useRecoilState(indexAtom);
  const selectedItemRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedItemRef.current && sidebarRef.current) {
      const selectedItemRect = selectedItemRef.current.getBoundingClientRect();
      const sidebarRect = sidebarRef.current.getBoundingClientRect();

      const itemHeight = selectedItemRect.height;
      const visibleItemsHeight = itemHeight * 9; // 選択中のアイテムを含めて9つ分の高さ

      const scrollPosition = index * itemHeight - (sidebarRect.height - visibleItemsHeight) / 2;

      const topVisibleIndex = Math.floor(sidebarRef.current.scrollTop / itemHeight);
      const bottomVisibleIndex = topVisibleIndex + Math.floor(sidebarRect.height / itemHeight) - 1;

      if (index < topVisibleIndex + 4 || index > bottomVisibleIndex - 4) {
        sidebarRef.current.scrollTop = scrollPosition;
      }
    }
  }, [index, jsonData.length, jsonData]);


  return (
    <div
      ref={sidebarRef}
      className="p-4 h-full overflow-y-auto"
      style={{ backgroundColor, color: textColor }}
    >
      {jsonData?.length === 0 ? (
        <div className="text-center">LLM JP Eval データの<br />ファイルを読み込んでください</div>
      ) : (
        jsonData.map((data, i) => (
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
    </div>
  );
};

export default Sidebar;
