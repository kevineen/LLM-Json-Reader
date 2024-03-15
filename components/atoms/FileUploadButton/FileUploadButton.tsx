// components/atoms/FileUploadButton/FileUploadButton.tsx
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
          const content = fileReader.result as string;

          if (!content.trim()) {
            console.error('Empty JSON file.');
            return;
          }

          let jsonData = JSON.parse(content);

          if (Array.isArray(jsonData)) {
            // JSONデータが配列の場合、バックスラッシュをエスケープする
            const escapedContent = content.replace(/\\/g, '\\\\');
            jsonData = JSON.parse(escapedContent);
            setJsonData(jsonData);
          } else {
            console.error('Invalid file format. Expected an array of objects.');
          }
        } catch (error) {
          if (error instanceof SyntaxError) {
            console.error('Invalid JSON syntax:', error.message);
          } else {
            console.error('Error parsing JSON file:', error);
          }
        }
      };
    }
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} accept=".json" title="JSONファイルを選択してください。" />
    </div>
  );
};

export default FileUploadButton;
