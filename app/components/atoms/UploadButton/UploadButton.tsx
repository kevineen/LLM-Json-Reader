import React from 'react';

interface UploadButtonProps {
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadButton: React.FC<UploadButtonProps> = ({ onUpload }) => (
  <label htmlFor="file-upload" className="cursor-pointer">
    <input id="file-upload" type="file" className="hidden" onChange={onUpload} accept=".json" />
    JSONファイル選択
  </label>
);

export default UploadButton;
