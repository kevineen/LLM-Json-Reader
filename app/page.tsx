'use client';

import SidebarMenu from "@/app/components/molecules/SidebarMenu/SidebarMenu";
import useFileUpload from "@/app/hooks/useFileUpload";
import { useEffect } from "react";

const featuresItems = [{ icon: '🏎️', name: 'XML対応' }];

const HomePage = () => {
  const { fileData } = useFileUpload();

  useEffect(() => {
    console.log(fileData);
  }, [fileData]);
  
  return (
  <div>
    <section className="bg-white px-4 dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-4xl">
            Json Reader for LLM
            <br /> (Large Language Models)
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            LLM開発用に、データセットのjsonファイルを
            <br />
            読み込むためのツールです。
          </p>
        </div>
      </div>
    </section>
    <div className="mx-auto mt-4 px-4 max-w-screen-lg">
      <SidebarMenu />
      {fileData ? (
  <div className="flex justify-center">
    <pre>{JSON.stringify(fileData.name, null, 2)}</pre>
  </div>
) : (
  <div className="flex justify-center">
    <p>ファイルデータがまだ読み込まれていません。<br />
    jsonファイルをアップロードしてください。</p>
  </div>
)}
      <h2 className="text-bold mt-8 mb-10 text-3xl">🚀 Features:</h2>
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
  </div>
  )
};

export default HomePage;