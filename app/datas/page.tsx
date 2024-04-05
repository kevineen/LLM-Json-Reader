import { useState } from "react";

// `app/page.tsx` is the UI for the `/` URL
export default function About() {
  const featuresItems = [{ icon: '', name: 'llm-jp-eval' }];
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const handleFolderSelect = async () => {
    const result = await dialog.showOpenDialog({ properties: ['openDirectory'] });
    if (!result.canceled && result.filePaths.length > 0) {
      setSelectedFolder(result.filePaths[0]);
    }
  };


  return (
    <div>
      <h2 className="text-bold mt-8 mb-10 text-3xl">読込データセット一覧</h2>
      <button onClick={handleFolderSelect}>データ保存フォルダを選択</button>
      {selectedFolder && <p>選択されたフォルダ: {selectedFolder}</p>}
      <ul className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
        {featuresItems.map(({ icon, name }) => (
          <li
            key={name}
            className="flex flex-col text-center items-center hover:scale-105 transition-all hover:shadow-xl duration-300 justify-center gap-2 px-4 py-6 border rounded-lg shadow"
          >
            <span className="text-xl">{icon}</span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
