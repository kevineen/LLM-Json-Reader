import { useRecoilState, useRecoilValue } from 'recoil';
import { autoModeSpeedAtom, customSpeedAtom, AutoModeSpeed } from '@/state/atmos/autoModeAtom';
import { indexAtom, jsonDataAtom } from '@/state/atmos/jsonDataAtom';
import { useEffect, useState } from 'react';

const AutoModeSelector: React.FC = () => {
  const [autoModeSpeed, setAutoModeSpeed] = useRecoilState(autoModeSpeedAtom);
  const [customSpeed, setCustomSpeed] = useRecoilState(customSpeedAtom);
  const jsonData = useRecoilValue(jsonDataAtom);
  const [index, setIndex] = useRecoilState(indexAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [isAutoModeOn, setIsAutoModeOn] = useState(false);
  const [currentSecond, setCurrentSecond] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    if (jsonData.samples.length > 0) {
      setIsLoading(false);
    }
  }, [jsonData.samples]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isAutoModeOn) {
      let totalSeconds = 0;

      switch (autoModeSpeed) {
        case '3s':
          totalSeconds = 3;
          break;
        case '5s':
          totalSeconds = 5;
          break;
        case '10s':
          totalSeconds = 10;
          break;
        case 'custom':
          totalSeconds = customSpeed;
          break;
        case 'textLength':
          const textLength = jsonData.samples[index]?.input.length + jsonData.samples[index]?.output.length || 0;
          totalSeconds = Math.ceil(textLength / 10); // 10文字あたり1秒
          break;
      }

      setCurrentSecond(0);
      setRemainingSeconds(totalSeconds);

      timer = setInterval(() => {
        setCurrentSecond((prevSecond) => prevSecond + 0.1); // 500ミリ秒ごとに更新
        setRemainingSeconds((prevSeconds) => prevSeconds - 0.1);
      }, 100); // 500ミリ秒ごとに実行
    }

    return () => {
      clearInterval(timer);
    };
  }, [autoModeSpeed, customSpeed, isAutoModeOn, jsonData.samples, index]);

  const handleSpeedChange = (speed: AutoModeSpeed) => {
    setAutoModeSpeed(speed);
    setIsAutoModeOn(speed !== 'off');
  };

  const handleCustomSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setCustomSpeed(value);
  };

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="flex items-center">
      <button
        className={`px-4 py-2 rounded ${isAutoModeOn ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'}`}
        onClick={() => handleSpeedChange(isAutoModeOn ? 'off' : '3s')}
      >
        {isAutoModeOn ? 'オート' : 'オート'}
      </button>
      <div className="flex ml-4">
        <button
          className={`px-4 py-2 rounded mx-1 ${autoModeSpeed === '3s' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} whitespace-nowrap`}
          onClick={() => handleSpeedChange('3s')}
        >
          3秒
        </button>
        <button
          className={`px-4 py-2 rounded mx-1 ${autoModeSpeed === '5s' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'} whitespace-nowrap`}
          onClick={() => handleSpeedChange('5s')}
        >
          5秒
        </button>
        <button
          className={`px-4 py-2 rounded mx-1 ${autoModeSpeed === '10s' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
          onClick={() => handleSpeedChange('10s')}
        >
          10秒
        </button>
        <button
          className={`px-4 py-2 rounded mx-1 ${autoModeSpeed === 'textLength' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
          onClick={() => handleSpeedChange('textLength')}
        >
          テキストの長さ
        </button>
      </div>
      <div className="ml-4 flex items-center relative">
        {isAutoModeOn && (
          <>
            <progress value={currentSecond} max={currentSecond + remainingSeconds} className="mr-2" />
            <span className="remaining-seconds">{remainingSeconds.toFixed(1)}秒</span>
          </>
        )}
        <span className="remaining-seconds empty"></span>
      </div>
    </div>
  );
};

export default AutoModeSelector;
