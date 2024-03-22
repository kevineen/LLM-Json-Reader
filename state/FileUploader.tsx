import { useRef, useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { fileNameAtom } from '@/state/atmos/fileNameAtom';
import { chunkSizeAtom, fileAtom, indexAtom, jsonDataAtom } from '@/state/atmos/jsonDataAtom';
import { parseJsonData } from '@/lib/utils/helpers/helpers';
import Button from '@/components/atoms/Button/Button';
import { errorMessageAtom } from '@/state/atmos/errorMessageAtom';

const FileUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const setFileName = useSetRecoilState(fileNameAtom);
  const chunkSize = useRecoilValue(chunkSizeAtom);
  const [, setIndex] = useRecoilState(indexAtom);
  const [, setJsonData] = useRecoilState(jsonDataAtom);
  const [, setFile] = useRecoilState(fileAtom);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files.length > 0) {
    const file = e.target.files[0];
    setFileName(file.name);
    setFile(file);
    setIndex(0);

    try {
      const initialData = await parseJsonData(file, 0, chunkSize);
      const jsonData = JSON.parse(await file.text());
      setJsonData({
        data: initialData,
        totalCount: jsonData.length,
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
