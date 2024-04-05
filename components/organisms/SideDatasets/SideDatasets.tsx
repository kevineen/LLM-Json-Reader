import { useState, useEffect } from "react";

const SidebarDatasets = () => {
  const [downloadedDatasets, setDownloadedDatasets] = useState<string[]>([]);

  useEffect(() => {
    // ダウンロード済みのデータセット名を取得する処理
    const fetchDownloadedDatasets = async () => {
      // ダウンロード済みのデータセット名を取得する処理を実装
      const downloaded: string[] = []; // ダウンロード済みのデータセット名を格納
      setDownloadedDatasets(downloaded);
    };

    fetchDownloadedDatasets();
  }, []);

  return (
    <div className="sidebar">
      <h2>ダウンロード済みのデータ</h2>
      <ul>
        {downloadedDatasets.map((dataset) => (
          <li key={dataset}>{dataset}</li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarDatasets;
