import { useRecoilState, useRecoilValue } from 'recoil';

import { jsonDataAtom, indexAtom } from '@/state/atmos/jsonDataAtom';
import { useCallback, useEffect } from 'react';
import React from 'react';

const JsonCardViewer = () => {
  const [jsonData, setJsonData] = useRecoilState(jsonDataAtom);
  const [index, setIndex] = useRecoilState(indexAtom);

  // useCallbackフックをuseEffectの外で定義
  const handleArrowKey = useCallback((event: KeyboardEvent) => {
    console.log(index)
    if (event.key === 'ArrowRight') {
      setIndex((index) => Math.min(index + 1, jsonData.length - 1));
    } else if (event.key === 'ArrowLeft') {
      setIndex((index) => Math.max(index - 1, 0));
    }
  }, [index, jsonData.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleArrowKey);
    return () => {
      window.removeEventListener('keydown', handleArrowKey);
    };
  }, [handleArrowKey]); // useCallbackでメモ化された関数を依存配列に追加

  const nowCard = (item: any, originalIndex: number) => {
    // 選択中のアイテムを表示
    if (originalIndex === index) {
      return (
        <div key={originalIndex.toString()}>
          <div>{JSON.stringify(item, null, 2)}</div>
        </div>
      );
    }
    return null;
  };

  const previousCard = (item: any, originalIndex: number) => {
  // 選択中のアイテムの1つ前のアイテムを表示
  if (index === 0) {
    // インデックスが0の場合は "Start" を表示
    return (
      <div key={originalIndex}>
        <div>Start</div>
      </div>
    );
  } else if (originalIndex === index - 1) {
    return (
      <div key={originalIndex}>
        <div>Category: {item.category}</div>
        <div>Instruction: {item.instruction}</div>
      </div>
    );
  }
    return null;
  };

const nextCard = (item: any, originalIndex: number) => {
  // 選択中のアイテムの1つ後のアイテムを表示
  if (originalIndex === jsonData.length) {
    // インデックスがjsonDataの最後の要素の場合は "Last" を表示
    return (
      <div key={originalIndex}>
        <div>Last</div>
      </div>
    );
  } else if (originalIndex === index + 1) {
    return (
      <div key={originalIndex}>
        <div>Category: {item.category}</div>
        <div>Instruction: {item.instruction}</div>
      </div>
    );
  }
    return null;
  };

  return (
    <div>
      {jsonData && jsonData.length > 0 ? (
        <>
          {previousCard(jsonData[index - 1], index - 1)}
          <div key={index}>
            {/* 現在のカードを表示 */}
            {nowCard(jsonData[index], index)}
          </div>
          {nextCard(jsonData[index + 1], index + 1)}
        </>
      ) : (
        <div>
          <p>ファイルデータがまだ読み込まれていません。<br />
          jsonlファイルをアップロードしてください。</p>
        </div>
      )}
    </div>
  );
};

export default JsonCardViewer;