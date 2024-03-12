import { useRecoilState, useRecoilValue } from 'recoil';

import { jsonDataAtom, indexAtom } from '@/app/state/atmos/jsonDataAtom';
import { useEffect } from 'react';

const Card = ({ data, index }: { data: any; index: number }) => (
  <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
    <p><strong>Index:</strong> {index}</p>
    <p>{JSON.stringify(data, null, 2)}</p>
  </div>
);

const JsonCardViewer = () => {
  const [jsonData, setJsonData] = useRecoilState(jsonDataAtom);
  const [index, setIndex] = useRecoilState(indexAtom);
  const pageSize = 3; // 1ページあたりのアイテム数

  useEffect(() => {
    const handleArrowKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setIndex((prevIndex) => Math.min(prevIndex + pageSize, jsonData.length - pageSize));
      } else if (event.key === 'ArrowLeft') {
        setIndex((prevIndex) => Math.max(prevIndex - pageSize, 0));
      }
    };

    window.addEventListener('keydown', handleArrowKey);

    return () => {
      window.removeEventListener('keydown', handleArrowKey);
    };
  }, [setIndex, jsonData.length]);

  const renderCard = (item: any, i: number) => {
    // 選択中のアイテムは全て表示
    if (i === index) {
      return (<div key={i.toString()}><div>{JSON.stringify(item, null, 2)}</div></div>);
    }
    // １つ前と次のアイテムはcategoryとinstructionのみを表示
    return (
      <div key={i}>
        <div>Category: {item.category}</div>
        <div>Instruction: {item.instruction}</div>
      </div>
    );
  };

  return (
    <div>
      {jsonData && jsonData.length > 0 ? (
        jsonData.slice(index - 1, index + pageSize - 1).map(renderCard)
      ) : (
        <div>
          <p>ファイルデータがまだ読み込まれていません。<br />
          jsonlファイルをアップロードしてください。</p>
        </div>
      )}
    </div>
  );
};
export default JsonCardViewer;

