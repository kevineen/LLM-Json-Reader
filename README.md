参考にしたサイト
# https://zenn.dev/siakas/articles/05481bdefacd13

# LLM-Json-Reader

LLM-Json-Readerは、JSONおよびJSONL形式のデータセットを閲覧するためのWebアプリケーションです。大規模言語モデル（LLM）の開発に使用されるデータセットの視覚化と操作に特化しています。

## 特徴

1. JSONおよびJSONL形式のファイルの読み込みと表示
2. 複数のJSONファイルの統合表示
3. JSONデータのCSVおよびExcelファイルへのエクスポート
4. JSONデータのグラフィカルな可視化（棒グラフ、円グラフ、折れ線グラフなど）
5. JSONデータ内の特定のキーワード検索
6. JSONデータのソート（特定のキーを基準に昇順または降順）
7. JSONデータのフィルタリング（特定の条件を満たすデータのみ表示）
8. JSONデータの編集（値の変更、要素の追加・削除など）
9. JSONデータのバリデーション（データの整合性チェック）
10. JSONデータのバージョン管理（変更履歴の追跡、特定のバージョンへの復元など）
11. ユーザー認証とアクセス制御（ログイン、ロール別のアクセス制限など）

## 使用技術

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Recoil
- SQLite (将来的にはPostgreSQLへの移行を想定)
- ESLint
- Prettier
- Storybook
- pnpm
- gulp

## インストール

1. リポジトリをクローンします。

```bash
git clone https://github.com/yourusername/llm-json-reader.git
```

2. 必要な依存関係をインストールします。

```bash
cd llm-json-reader
pnpm install
```

3. 開発サーバーを起動します。

```bash
pnpm dev
```

4. ブラウザで`http://localhost:3000`を開きます。

## 貢献

プルリクエストは歓迎します。大きな変更を加える場合は、まずIssueを開いて変更内容について議論してください。

## ライセンス

[MIT](https://choosealicense.com/licenses/mit/)



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
