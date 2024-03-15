// components/organisms/Sidebar.tsx
import { useRecoilState, useRecoilValue } from 'recoil';

import { indexAtom, jsonDataAtom } from '@/state/atmos/jsonDataAtom';

const Sidebar = () => {
  const jsonData = useRecoilValue(jsonDataAtom);
  const [index, setIndex] = useRecoilState(indexAtom);

  return (
    <div className="sidebar bg-gray-100 text-gray-800 p-4 h-full overflow-y-auto dark:bg-gray-800">
      <div>データ件数: {jsonData.length}</div>
      {jsonData.map((data, i) => (
        <div
          key={i}
          onClick={() => setIndex(i)}
          className={`py-2 px-4 cursor-pointer hover:bg-gray-200 ${index === i ? 'bg-gray-300' : ''
            }`}
        >
          <p className="truncate">{`${i}: ${data.category}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
