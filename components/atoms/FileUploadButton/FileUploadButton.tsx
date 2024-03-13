import { jsonDataAtom } from '@/state/atmos/jsonDataAtom';
import { useSetRecoilState } from 'recoil';

const FileUploadButton = () => {
  const setJsonData = useSetRecoilState(jsonDataAtom);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    if (event.target.files?.length) {
      const file = event.target.files[0];

      fileReader.readAsText(file);
      fileReader.onload = () => {
        try {
          // JSONまたはJSONLファイルの内容をパース
          const content = fileReader.result as string;
          const lines = content.split(/\r?\n/);
          const jsonData = lines.map(line => line ? JSON.parse(line) : null).filter(line => line);
          setJsonData(jsonData);
        } catch (error) {
          console.error('ファイルの読み込みに失敗しました。', error);
        }
      };
    }
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} accept=".json,.jsonl" title="JsonまたはJsonlファイルを選択してください。"/>
    </div>
  );
};

export default FileUploadButton;