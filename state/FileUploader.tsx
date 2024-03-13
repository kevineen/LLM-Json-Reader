import { jsonDataAtom } from '@/state/atmos/jsonDataAtom';
import { useSetRecoilState } from 'recoil';

const FileUploader = () => {
  const setJsonData = useSetRecoilState(jsonDataAtom);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    if (event.target.files?.length) {
      const file = event.target.files[0];

      fileReader.readAsText(file);
      fileReader.onload = () => {
        try {
          // JSONLファイルを行ごとに分割し、各行をJSONオブジェクトとしてパース
          const jsonLines = (fileReader.result as string).split(/\r?\n/);
          const jsonData = jsonLines.map(line => line ? JSON.parse(line) : null).filter(line => line);
          setJsonData(jsonData);
        } catch (error) {
          console.error('ファイルの読み込みに失敗しました。', error);
        }
      };
    }
  };

  return (
    <div>
      <p>JSONLファイルを選択してください。</p>
      <input type="file" onChange={handleFileChange} accept=".jsonl" />
    </div>
  );
};

export default FileUploader;