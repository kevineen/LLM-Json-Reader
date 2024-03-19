import { useRef, useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { fileNameAtom } from '@/state/atmos/fileNameAtom';
import { jsonDataAtom } from '@/state/atmos/jsonDataAtom';
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    if (event.target.files?.length) {
      const file = event.target.files[0];
      setFileName(file.name); // ファイル名を設定

      fileReader.readAsText(file);
      fileReader.onload = () => {
        try {
          const content = fileReader.result as string;
          const jsonData = parseJsonData(content);
          setJsonData(jsonData);
          setIsFileLoaded(true); // ファイル読み込み完了時にisFileLoadedをtrueに設定
        } catch (error) {
          console.error('ファイルの読み込みに失敗しました。', error);
        }
        // try {
        //   const content = fileReader.result as string;
        //   const jsonData = parseJsonData(content);
        //   setJsonData(jsonData);
        //   setIsFileLoaded(true); // ファイル読み込み完了時にisFileLoadedをtrueに設定
        // } catch (error) {
        //   console.error('ファイルの読み込みに失敗しました。', error);
        // }
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
    </div>
  );
};

export default FileUploader;
