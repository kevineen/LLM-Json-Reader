import { folderState } from '@/state/atmos/folderAtom';
import { useRecoilState } from 'recoil';

export const FolderSelector: React.FC = () => {
  const [selectedFolder, setSelectedFolder] = useRecoilState(folderState);

  const handleFolderSelect = async () => {
    try {
      const response = await fetch('/api/folders');
      const data = await response.json();
      if (data.folders && data.folders.length > 0) {
        setSelectedFolder(data.folders[0]);
      }
    } catch (error) {
      console.error('Error selecting folder:', error);
    }
  };

  return (
    <div>
      <button onClick={handleFolderSelect}>データ保存フォルダを選択</button>
      {selectedFolder && <p>選択されたフォルダ: {selectedFolder}</p>}
    </div>
  );
};
