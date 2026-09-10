# 株式会社 上田製作所 コーポレートサイト

株式会社 上田製作所のホームページ制作用リポジトリです。

## 開発環境

- Node.js 22.13.0 以上
- React 19
- TypeScript
- Vinext / Vite
- Tailwind CSS
- shadcn/ui

## セットアップ

```bash
npm install
npm run dev
```

本番用ビルドは `npm run build`、コード検査は `npm run lint` で実行できます。

## 制作資料

支給済みの会社情報とサイト要件は [`docs/project-brief.md`](docs/project-brief.md) にまとめています。

## 現在のフェーズ

サンエイ参照サイトをベースに、上田製作所向けのデザイン・5ページを実装済み。

- `/` ホーム
- `/manufacturing/` 製造・加工について
- `/company/` 会社概要・アクセス
- `/contact/` お問い合わせ（電話・FAX）
- `/privacy/` プライバシーポリシー

画像はAI生成の加工イメージです。詳細は [`docs/design-notes.md`](docs/design-notes.md) を参照してください。
公開前に実写素材、正式ロゴ、創業年、プライバシーポリシーの運用内容をご確認ください。
制作確認用のため、検索エンジンのインデックスは無効にしています。
