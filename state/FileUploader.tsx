import { useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { fileNameAtom } from '@/state/atmos/fileNameAtom';
import { indexAtom, jsonDataAtom, JsonData } from '@/state/atmos/jsonDataAtom';
import { parseJsonData } from '@/lib/utils/helpers/helpers';
import Button from '@/components/atoms/Button/Button';
import { errorMessageAtom } from '@/state/atmos/errorMessageAtom';
import { invalidDataAtom } from '@/state/atmos/invalidDataAtom';

const FileUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const setFileName = useSetRecoilState(fileNameAtom);
  const setIndex = useSetRecoilState(indexAtom);
  const setJsonData = useSetRecoilState(jsonDataAtom);
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessageAtom);
  const [, setInvalidData] = useRecoilState(invalidDataAtom);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsLoading(true); // ローディング開始
      setErrorMessage(''); // エラーメッセージをクリア
      const file = e.target.files[0];
      setFileName(file.name);
      setIndex(0);

      try {
        const content = await file.text();
        const jsonData: JsonData[] = []; // JSON データを格納する配列を初期化

        if (file.name.endsWith('.jsonl')) {
          // JSONL ファイルの処理
          const lines = content.split('\n');
          for (const line of lines) {
            if (line.trim() !== '') {
              jsonData.push(JSON.parse(line));
            }
          }
        } else {
          // JSON ファイルの処理
          jsonData.push(...(Array.isArray(JSON.parse(content)) ? JSON.parse(content) : [JSON.parse(content)]));
        }
        const parsedData = parseJsonData(jsonData, setInvalidData);

        setJsonData({
          data: parsedData,
          totalCount: parsedData.length,
        });

      } catch (error: any) { // any型に修正
        console.error('ファイルの読み込みに失敗しました。', error);
        setErrorMessage(error.message); // エラーメッセージを設定
      } finally {
        setIsLoading(false); // ローディング終了
      }
    }
  };

  return (
    <div>
      <Button onClick={() => fileInputRef.current?.click()} disabled={isLoading}>
        {isLoading ? '読み込み中...' : 'ファイル読込'}
      </Button>
      <input
        type="file"
        accept=".json,.jsonl"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>} {/* エラーメッセージを表示 */}
    </div>
  );
};

export default FileUploader;