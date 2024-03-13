// helpers.js
export default function processJsonData(jsonData : JSON | any) {
}

export function countOccurrences(array: any[], key: string): { [key: string]: number } {
  return array.reduce((acc, obj) => {
    const property = obj[key];
    acc[property] = (acc[property] || 0) + 1;
    return acc;
  }, {});
}