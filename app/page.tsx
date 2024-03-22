import JsonMainView from "@/components/template/JsonMainView/JsonMainView";
import JsonReadLayout from "@/components/template/JsonReadLayout/JsonReadLayout";

const HomePage = () => {
  
  return (
    <div>
      <JsonReadLayout>
        <JsonMainView />
      </JsonReadLayout>
    </div>
  )
};

export default HomePage;