import { indexAtom, jsonDataAtom } from '@/app/state/atmos/jsonDataAtom';
import { useRecoilState } from 'recoil';

const JsonPaginator = () => {
  const [jsonData, setJsonData] = useRecoilState(jsonDataAtom);
  const [index, setIndex] = useRecoilState(indexAtom);

  // 次の3つのアイテムを表示する関数
  const showNextItems = () => {
    if (index + 3 < jsonData.length) {
      setIndex(index + 3);
    }
  };

  // 前の3つのアイテムを表示する関数
  const showPreviousItems = () => {
    if (index - 3 >= 0) {
      setIndex(index - 3);
    }
  };

  console.log(jsonData)

  return (
    <div>
      {jsonData && jsonData.length > 0 ? (<button onClick={showPreviousItems} disabled={index === 0}>前へ</button>): null}
      {jsonData && jsonData.length > 0 ? (<button onClick={showNextItems} disabled={index + 3 >= jsonData.length}>次へ</button>): null }
      {/* {jsonData && jsonData.length > 0 ? (
        jsonData.slice(index, index + 3).map((item, i) => (
          <div>
            <a>{index}</a>
            <div key={i}>{JSON.stringify(item, null, 2)}</div>
          </div>
        ))
      ) : (
        <div>
          <p>ファイルデータがまだ読み込まれていません。<br />
          jsonlファイルをアップロードしてください。</p>
        </div>
      )} */}
    </div>
  );
};

export default JsonPaginator;