'use client';

import { useState } from 'react';

const useFileUpload = () => {
  const [fileData, setFileData] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file && file.type === 'application/json') {
      setFileData(file);
    } else {
      // ここでエラーメッセージを表示するか、不正なファイルタイプであることをユーザーに知らせる
      console.error("Invalid file type. Please select a json or jsonl file.");
    }
  };

  return { fileData, handleFileUpload };
};

export default useFileUpload;
