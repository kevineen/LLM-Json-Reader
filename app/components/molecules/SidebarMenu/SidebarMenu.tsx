'use client';

import UploadButton from '@/app/components/atoms/UploadButton/UploadButton';
import useFileUpload from '@/app/hooks/useFileUpload';
import React from 'react';


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
