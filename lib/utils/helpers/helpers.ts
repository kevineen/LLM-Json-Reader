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

export const parseJsonData = (content: string) => {
  const jsonData = [];

  // llm-jp-evalのデータを読み込む
  try {
    return JSON.parse(content);
  } catch (error) {
    console.error('無効なJSONデータ:', content);
    return [];
  }

  // 通常のJSONデータを読み込む
  // const lines = content.split(/\r?\n/);
  // for (const line of lines) {
  //   if (line.trim()) {
  //     try {
  //       const parsedLine = JSON.parse(line);
  //       jsonData.push(parsedLine);
  //     } catch (error) {
  //       console.error('無効なJSONデータ:', line);
  //     }
  //   }
  // }

  return jsonData;
};
