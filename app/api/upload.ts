// pages/api/upload.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { JsonData } from '@/state/atmos/jsonDataAtom';
import { parseJsonData } from '@/lib/utils/helpers/helpers';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false, // formidableを使う場合はbodyParserを無効にする
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JsonData[] | { error: string }>
) {
  if (req.method === 'POST') {
    const form = formidable({ multiples: false });

    try {
      const { files } = await new Promise<{ files: formidable.Files }>(
        (resolve, reject) => {
          form.parse(req, (err, fields, files) => {
            if (err) {
              reject(err);
              return;
            }
            resolve({ files }); // fields は使用しないので削除
          });
        }
      );



      // file プロパティの型を明示的に formidable.File に指定
      const file = files.file as formidable.File | undefined;

      // file が存在しない場合の処理を追加
      if (!file) {
        throw new Error('No file uploaded.');
      }
      // ... (残りのコード)
    }
     catch (error) {
      console.error('ファイルの読み込みに失敗しました。', error);
      res.status(500).json({ error: (error as any).message || 'ファイルの読み込みに失敗しました。' }); // エラーメッセージを返す
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}