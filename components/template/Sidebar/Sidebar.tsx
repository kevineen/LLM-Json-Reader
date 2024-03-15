// components/organisms/Sidebar.tsx
import { useRecoilState, useRecoilValue } from 'recoil';
import { indexAtom, jsonDataAtom } from '@/state/atmos/jsonDataAtom';

interface SidebarProps {
  backgroundColor: string;
  textColor: string;
  selectedBackgroundColor: string;
  selectedTextColor: string;
  hoverBackgroundColor: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  backgroundColor,
  textColor,
  selectedBackgroundColor,
  selectedTextColor,
  hoverBackgroundColor,
}) => {
  const jsonData = useRecoilValue(jsonDataAtom);
  const [index, setIndex] = useRecoilState(indexAtom);

  return (
    <div
      className={`p-4 h-full overflow-y-auto`}
      style={{ backgroundColor, color: textColor }}
    >
      <div>データ件数: {jsonData.length}</div>
      {jsonData.map((data, i) => (
        <div
          key={i}
          className={`py-2 px-4 cursor-pointer truncate ${index === i
            ? `bg-[${selectedBackgroundColor}] text-[${selectedTextColor}]`
            : `hover:bg-[${hoverBackgroundColor}]`
            }`}
          onClick={() => setIndex(i)}
        >
          {`${i}: ${data.category}`}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
