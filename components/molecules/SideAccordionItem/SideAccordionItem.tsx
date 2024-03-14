import { useRecoilState } from "recoil";
import { indexAtom } from "@/state/atmos/jsonDataAtom";

const SideAccordionItem = ({ children }: any) => {
  const [index, setIndex] = useRecoilState(indexAtom);
  
  return (
    <div onClick={() => setIndex(index)}>
      <div>Index: {index}</div>
      <div>Category: {children.category}</div>
    </div>
  );
};

export default SideAccordionItem;