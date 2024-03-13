'use client';

import FileUploadButton from "@/components/atoms/FileUploadButton/FileUploadButton";
import JsonCardViewer from "@/components/organisms/JsonCardViewer/JsonCardViewer";
import JsonPaginator from "@/state/JsonPaginator";


const HomePage = () => {
  
  return (
  <div>
    
    <div className="mx-auto mt-4 px-4 max-w-screen-lg">
      <FileUploadButton />
      <JsonPaginator />
      <JsonCardViewer />
      
    </div>
  </div>
  )
};

export default HomePage;