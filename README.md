# LLM-Json-Reader

LLM-Json-Readerは、JSONおよびJSONL形式のデータセットを閲覧するためのWebアプリケーションです。大規模言語モデル（LLM）の開発に使用されるデータセットの視覚化のためのアプリです。

開発に辺りディレクトリ構成などで、参考にさせて頂いたサイト様
##### https://zenn.dev/siakas/articles/05481bdefacd13

#### HuggingFaceのデータセット対応状況

- [x] LLM JP Eval
- [ ] dolly-dataset-jp

## アプリ作動に必要となる事前インストール
#### Node.js (version20.9.0を使用)
Node.jsは、ブラウザ外でJavaScriptを実行するためのプラットフォームです。これにより、JavaScriptを使ってサーバーサイドのアプリケーションを開発することが可能になります。
Node.jsを使用するにあたっては、nvmなどのNode.jsバージョン管理ツールを使用することを推奨します。pythonで言うところのpyenv（複数のpythonバージョンを切り替えて使用できる技術）。

#### pnpm
pnpmは「performant npm」という意味で、npmやyarnと並ぶJavaScriptのパッケージマネージャーです。yarnを使用する予定でしたが、インストールの際の高速化、容量の効率化のため採用してあります。

## インストール（使用方法）

1. リポジトリをクローンします。（自分のパソコンにダウンロードするようなもの）

```bash
git clone https://github.com/yourusername/llm-json-reader.git
```

2. 必要な依存関係をインストールするために、フォルダ内に移動し、
   インストールのためのコマンドを入力します。
   （※ フォルダに移動するまえにpnpm installを実行してしまいがち。
   必ず対象のフォルダに移動してください。
   やってしまった場合は、削除してからやり直すのが一番簡単。
   又は、出来上がったファイルをllm-json-readerフォルダ内に移動。）

```bash
cd llm-json-reader
```
```bash
pnpm install
```

3. 開発サーバーを起動します。

```bash
pnpm dev
```

4. ブラウザで`http://localhost:3000`を開きます。
   <br />

5. ファイル読込ボタンから、読み込みたいJSONデータなどを選択してください。

## 使用技術

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Recoil
- ESLint
- Prettier
- pnpm
- gulp

#### 後日追加予定（必要になれば

- SQLite (将来的にはPostgreSQLへの移行か併用を想定)
- Storybook

## Features (追加機能)

- [ ] MT-bench
- [ ] XML形式対応
- [ ] データベースと連携し、何らかの機能
- [ ] アプリ使用者のTTSと連携した音声出力モード
- [ ] MQTT、又はgRPCを使用したスマホからの操作

## AIからの機能要望リスト（検討中

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

## 貢献

"プルリクエストは歓迎します。大きな変更を加える場合は、まずIssueを開いて変更内容について議論してください。"

Githubの共同開発経験が不十分なため、どのように他人との更新をしてゆけばよいかなどの経験がありません。
要望はIssueにて頂き、暖かく見守って頂ければ幸いです。

## ライセンス

[MIT](https://choosealicense.com/licenses/mit/)
