import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { indexAtom, jsonDataAtom } from "@/state/atmos/jsonDataAtom";

import Button from "@/components/atoms/Button/Button";
import Card from "@/components/molecules/Card/Card";
import ArrowButton from "@/components/atoms/ArrowButton/ArrowButton";
import { parseJsonData } from "@/lib/utils/helpers/helpers";
import { autoModeSpeedAtom, customSpeedAtom } from "@/state/atmos/autoModeAtom";
import AutoModeSelector from "@/components/molecules/AutoModeSelector/AutoModeSelector";
import FileUploader from "@/state/FileUploader";
import FontSizeControl from "@/components/molecules/FontSizeControl/FontSizeControl";
import NowCard from "@/components/molecules/NowCard/NowCard";

export const JsonMainView = () => {

  const [jsonData, setJsonData] = useRecoilState(jsonDataAtom);
  const [index, setIndex] = useRecoilState(indexAtom);
  const autoModeSpeed = useRecoilValue(autoModeSpeedAtom);
  const customSpeed = useRecoilValue(customSpeedAtom);

  const currentCard = jsonData[index];
  const prevCard = jsonData[index - 1];
  const nextCard = jsonData[index + 1];

  const handlePrevClick = () => {
    setIndex((prevIndex: number) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setIndex((prevIndex: number) => Math.min(prevIndex + 1, jsonData.length - 1));
  };

  // useCallbackフックをuseEffectの外で定義
  const handleArrowKey = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      setIndex((prevIndex: number) => Math.min(prevIndex + 1, jsonData.length - 1));
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      setIndex((prevIndex: number) => Math.max(prevIndex - 1, 0));
    }
  }, [setIndex, jsonData.length]);

  useEffect(() => {
    window.addEventListener('keydown', handleArrowKey);
    return () => {
      window.removeEventListener('keydown', handleArrowKey);
    };
  }, [handleArrowKey]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (autoModeSpeed !== 'off') {
      let delay = 0;

      switch (autoModeSpeed) {
        case '3s':
          delay = 3000;
          break;
        case '5s':
          delay = 5000;
          break;
        case '10s':
          delay = 10000;
          break;
        case 'custom':
          delay = customSpeed * 1000;
          break;
        case 'textLength':
          const textLength = jsonData[index]?.input.length || 0;
          delay = textLength * 50; // 文字数に応じて秒数を計算（例: 1文字あたり50ミリ秒）
          break;
      }

      timer = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % jsonData.length);
      }, delay);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [autoModeSpeed, customSpeed, index, jsonData]);


  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <div className="w-1/3 flex justify-start">
          <ArrowButton
            direction="left"
            onClick={handlePrevClick}
            disabled={index === 0}
          />
        </div>
        <div className="w-1/3 flex">
          <FileUploader />
          <FontSizeControl /> {/* フォントサイズ制御コンポーネントを追加 */}
        </div>
        <div className="w-1/3 flex justify-end">
          <ArrowButton
            direction="right"
            onClick={handleNextClick}
            disabled={index === jsonData.length - 1}
          />
        </div>
      </div>

      <AutoModeSelector />
      <br />
      
      {jsonData.length > 0 && (
        <div className="flex flex-col md:flex-row"> {/* flex-colを追加 */}
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0 h-40 max-h-40"> {/* クラスを変更 */}
            {prevCard || index !== 0 ? (
              <Card
                title="前のデータ"
                content={`Input: ${prevCard.input}\n Output: ${prevCard.output}`}
                displayMode="prev"
                onClick={() => setIndex(index - 1)}
              />
            ) : (
              <Card title="1つ前のデータはありません" content="先頭データ" displayMode="prev" />
            )}
          </div>

          {/* 次のデータを表示 */}
          <div className="w-full md:w-1/2 px-2 h-40 max-h-40"> {/* クラスを変更 */}
            {nextCard || index == jsonData.length + 1 ? (
              <Card
                title="次のデータ"
                content={`Input: ${nextCard.input}\n Output: ${nextCard.output}`}
                displayMode="next"
                onClick={() => setIndex(index + 1)}
              />
            ) : (
              <Card title="次のデータはありません" content="最終データ" displayMode="next" />
            )}
          </div>
        </div>
      )}

      {/* 選択中のデータを表示 */}
      {jsonData.length > 0 && (
        <div className="w-full py-4 px-2 mb-4 md:mb-0"> {/* クラスを変更 */}
          {currentCard ? (
        <NowCard data={currentCard} />
      ) : (
        <Card title="No Data" content="" displayMode="selected" />
      )}
    </div>
    )}
  </div>
  );
}

export default JsonMainView;
