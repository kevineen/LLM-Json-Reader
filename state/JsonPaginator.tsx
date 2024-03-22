import { indexAtom, jsonDataAtom } from '@/state/atmos/jsonDataAtom';
import { useRecoilState } from 'recoil';

const JsonPaginator = () => {
  const [jsonData, setJsonData] = useRecoilState(jsonDataAtom);
  const [index, setIndex] = useRecoilState(indexAtom);

  // 次のアイテムを表示する関数
  const showNextItems = () => {
    if (index + 1 < jsonData.data.length) {
      setIndex(index + 1);
    }
  };

  // 前のアイテムを表示する関数
  const showPreviousItems = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      {jsonData && jsonData.data.length > 0 ? (<button onClick={showPreviousItems} disabled={index === 0}>前へ</button>): null}
      {jsonData && jsonData.data.length > 0 ? (<button onClick={showNextItems} disabled={index + 1 >= jsonData.data.length}>次へ</button>): null }
    </div>
  );
};

export default JsonPaginator;