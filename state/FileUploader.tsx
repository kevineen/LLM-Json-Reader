import { useRef, useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { fileNameAtom } from '@/state/atmos/fileNameAtom';
import { JsonData, jsonDataAtom } from '@/state/atmos/jsonDataAtom';
import { parseJsonData } from '@/lib/utils/helpers/helpers';
import Button from '@/components/atoms/Button/Button';

const FileUploader = () => {
  const setJsonData = useSetRecoilState(jsonDataAtom);
  const setFileName = useSetRecoilState(fileNameAtom); // setFileNameを取得

  const [isFileLoaded, setIsFileLoaded] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLoadJsonFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    // ファイル読み込み完了時にコンポーネントをレンダリングする
  }, [isFileLoaded]);

  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    if (event.target.files?.length) {
      const file = event.target.files[0];
      setFileName(file.name);

      fileReader.readAsText(file);
      fileReader.onload = () => {
        try {
          const content = fileReader.result as string;
          const jsonData: JsonData[] = parseJsonData(content);

          if (jsonData.length > 0) {
            setJsonData(jsonData);
            setIsFileLoaded(true);
            setErrorMessage('');
          } else {
            setErrorMessage('ファイルが対応していません。期待される形式のJSONまたはJSONLファイルを選択してください。');
          }
        } catch (error) {
          console.error('ファイルの読み込みに失敗しました。', error);
          setErrorMessage('ファイルの読み込みに失敗しました。有効なJSONまたはJSONLファイルを選択してください。');
        }
      };
    }
  };

  return (
    <div>
      <Button onClick={handleLoadJsonFile}>
        ファイル読込
      </Button>
      <input
        type="file"
        accept=".json,.jsonl"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default FileUploader;
