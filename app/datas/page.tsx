'use client';

import { DLCardList } from "@/components/molecules/DLCardList";
import { FolderSelector } from "@/components/molecules/FolderSelector";

// `app/page.tsx` is the UI for the `/` URL
export default function Datas() {
  const featuresItems = [
    { icon: '', name: 'alt-e-to-j' },
    { icon: '', name: 'alt-j-to-e' },
    { icon: '', name: 'jamp' },
    { icon: '', name: 'janli' },
    { icon: '', name: 'jcommonsenseqa' },
    { icon: '', name: 'jemhopqa' },
    { icon: '', name: 'jmmlu' },
    { icon: '', name: 'jnli' },
    { icon: '', name: 'jsem' },
    { icon: '', name: 'jsick' },
    { icon: '', name: 'jsquad' },
    { icon: '', name: 'jsts' },
    { icon: '', name: 'niilc' },
    { icon: '', name: 'chabsa' },
    { icon: '', name: 'mawps' },
    { icon: '', name: 'wikicorpus-e-to-j' },
    { icon: '', name: 'wikicorpus-j-to-e' },
    { icon: '', name: 'wiki_reading' },
    { icon: '', name: 'wiki_ner' },
    { icon: '', name: 'wiki_dependency' },
    { icon: '', name: 'wiki_pas' },
    { icon: '', name: 'wiki_coreference' },
    { icon: '', name: 'mmluen' },
  ];

  return (
    <div>
      <h2 className="text-bold mt-8 mb-10 text-3xl">読込データセット一覧</h2>
      <FolderSelector />
      <DLCardList items={featuresItems} />
    </div>
  );
}
