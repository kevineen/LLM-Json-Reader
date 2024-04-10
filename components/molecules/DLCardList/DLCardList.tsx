import { DLCard } from "@/components/atoms/DLCard";

interface CardListProps {
  items: { icon: string; name: string }[];
}

export const DLCardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <ul className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map(({ icon, name }) => (
        <DLCard key={name} icon={icon} name={name} />
      ))}
    </ul>
  );
};
