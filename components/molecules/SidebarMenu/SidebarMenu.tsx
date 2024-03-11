/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import useFileUpload from '@/hooks/useFileUpload';
import React from 'react';

import UploadButton from '@/components/atoms/UploadButton/UploadButton';

const SidebarMenu: React.FC = () => {
  const { fileData, handleFileUpload } = useFileUpload();

  // ファイルデータを処理するロジックをここに追加
  // console.log(fileData);

  return (
    <aside className="sidebar">
      <UploadButton onUpload={handleFileUpload} />
      {/* 他のメニューアイテム */}
    </aside>
  );
};

export default SidebarMenu;
