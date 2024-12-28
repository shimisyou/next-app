# Next.js プロジェクト

色々いれて遊ぶ環境

## 使用技術

| 技術                                                  | 説明                            | バージョン |
| ----------------------------------------------------- | ------------------------------- | ---------- |
| [Next.js](https://nextjs.org)                         | React ベースのフレームワーク    | 15.1.0     |
| [Docker](https://www.docker.com)                      | コンテナ化技術                  | 最新       |
| [GitHub Actions](https://github.com/features/actions) | CI/CD パイプライン              | 最新       |
| [Storybook](https://storybook.js.org)                 | UI コンポーネントの開発とテスト | 8.4.7      |
| [Playwright](https://playwright.dev)                  | エンドツーエンドテスト          | 1.49.1     |

## 使用ライブラリ

| ライブラリ                                                        | 説明                                   | バージョン |
| ----------------------------------------------------------------- | -------------------------------------- | ---------- |
| [@emotion/react](https://emotion.sh/docs/introduction)            | CSS-in-JS ライブラリ                   | 11.14.0    |
| [@emotion/styled](https://emotion.sh/docs/styled)                 | スタイリングライブラリ                 | 11.14.0    |
| [@mui/icons-material](https://mui.com/components/material-icons/) | Material-UI のアイコンセット           | 6.2.1      |
| [@mui/material](https://mui.com/)                                 | Material-UI のコンポーネントライブラリ | 6.2.1      |
| [@uiw/react-md-editor](https://uiwjs.github.io/react-md-editor/)  | Markdown エディタコンポーネント        | 4.0.4      |
| [react-hook-form](https://react-hook-form.com)                    | フォーム管理ライブラリ                 | 7.54.1     |
| [rehype-sanitize](https://github.com/rehypejs/rehype-sanitize)    | HTML のサニタイズライブラリ            | 6.0.0      |
| [swiper](https://swiperjs.com)                                    | スライダーコンポーネント               | 11.1.15    |

## 🚀 開発サーバーの起動

まず、開発サーバーを起動します:

```bash
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認します。

`app/page.tsx` を編集することでページを編集できます。ファイルを編集するとページが自動的に更新されます。

## 🐳 Docker を使った開発環境の構築

Docker を使って開発環境を構築するには、以下のコマンドを実行します:

```bash
docker compose up -d
```

これで、Docker コンテナ内でアプリケーションが起動します。

## 📚 Storybook の起動

Storybook を起動するには、以下のコマンドを実行します:

```bash
npm run storybook
```

ブラウザで [http://localhost:6006](http://localhost:6006) を開いて結果を確認します。

## ⚙️ CI/CD パイプライン

このプロジェクトでは、GitHub Actions を使って CI/CD パイプラインを構築しています。以下のワークフローが含まれています:

- **Next.js Build CI**: プッシュまたはプルリクエスト時に Next.js アプリケーションをビルドします。
- **Storybook CI**: プッシュまたはプルリクエスト時に Storybook をビルドし、テストを実行します。
