interface CardProps {
  icon: string;
  name: string;
}

export const DLCard: React.FC<CardProps> = ({ icon, name }) => {
  return (
    <li className="flex flex-col text-center items-center hover:scale-105 transition-all hover:shadow-xl duration-300 justify-center gap-2 px-4 py-6 border rounded-lg shadow">
      <span className="text-xl">{icon}</span>
      <span>{name}</span>
    </li>
  );
};
