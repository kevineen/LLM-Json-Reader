import { useState, useEffect } from 'react';

interface Dataset {
  name: string;
  url: string;
  license: string;
}

const DatasetCard = ({ dataset }: { dataset: Dataset }) => {
  const handleDownload = () => {
    downloadDataset(dataset.url, selectedFolder);
  };

  const handleDelete = () => {
    deleteDataset(dataset.name, selectedFolder);
  };

  return (
    <div className="dataset-card">
      <h3>{dataset.name}</h3>
      <p>ライセンス: {dataset.license}</p>
      <button onClick={handleDownload}>ダウンロード</button>
      <button onClick={handleDelete}>削除</button>
    </div>
  );
};

const Datas = () => {
  const [datasets, setDatasets] = useState<Dataset[]>([]);

  useEffect(() => {
    // データセットの一覧を取得する処理
    const fetchDatasets = async () => {
      // データセットの取得処理を実装
      const fetchedDatasets: Dataset[] = []; // 取得したデータセットを格納
      setDatasets(fetchedDatasets);
    };

    fetchDatasets();
  }, []);

  return (
    <div>
      {/* フォルダ選択ボタンの実装 */}
      <div className="dataset-list">
        {datasets.map((dataset) => (
          <DatasetCard key={dataset.name} dataset={dataset} />
        ))}
      </div>
    </div>
  );
};

export default Datas;
