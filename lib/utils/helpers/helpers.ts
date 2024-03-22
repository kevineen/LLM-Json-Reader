import { JsonData } from "@/state/atmos/jsonDataAtom";

// helpers.js
export default function processJsonData(jsonData: JSON | any) {
}

export function countOccurrences(array: any[], key: string): { [key: string]: number } {
  return array.reduce((acc, obj) => {
    const property = obj[key];
    acc[property] = (acc[property] || 0) + 1;
    return acc;
  }, {});
}

export const parseJsonData = (content: string): JsonData[] => {
  try {
    const jsonData = JSON.parse(content);

    if (Array.isArray(jsonData) && jsonData.every(isValidJsonData)) {
      return jsonData;
    } else {
      console.error('無効なファイル形式です。期待される形式のJSONデータではありません。');
      return [];
    }
  } catch (error) {
    console.error('無効なJSONデータ:', content);
    return [];
  }
};

function isValidJsonData(data: any): data is JsonData {
  return (
    typeof data === 'object' &&
    data !== null &&
    typeof data.ID === 'string' &&
    typeof data.instruction === 'string' &&
    typeof data.input === 'string' &&
    typeof data.output === 'string' &&
    typeof data.text === 'string'
  );
}