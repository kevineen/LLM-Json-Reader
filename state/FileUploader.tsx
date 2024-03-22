import { useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { fileNameAtom } from '@/state/atmos/fileNameAtom';
import { indexAtom, jsonDataAtom } from '@/state/atmos/jsonDataAtom';
import { parseJsonData } from '@/lib/utils/helpers/helpers';
import Button from '@/components/atoms/Button/Button';
import { errorMessageAtom } from '@/state/atmos/errorMessageAtom';

const FileUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const setFileName = useSetRecoilState(fileNameAtom);
  const setIndex = useSetRecoilState(indexAtom);
  const setJsonData = useSetRecoilState(jsonDataAtom);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      setIndex(0);

      try {
        const content = await file.text();
        const jsonData = JSON.parse(content);
        const parsedData = parseJsonData(jsonData);
        setJsonData({
          data: parsedData,
          totalCount: parsedData.length,
        });
      } catch (error) {
        console.error('ファイルの読み込みに失敗しました。', error);
      }
    }
  };

  return (
    <div>
      <Button onClick={() => fileInputRef.current?.click()}>
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

const ErrorMessage = () => {
  const errorMessage = useRecoilValue(errorMessageAtom);

  return errorMessage ? <p className="text-red-500">{errorMessage}</p> : null;
};
