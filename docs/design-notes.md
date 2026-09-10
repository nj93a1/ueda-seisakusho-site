# デザイン実装メモ

## 参照

https://kdm-company.github.io/sanei-site/index.html

2026-09-10にトップ、加工紹介、会社概要、お問い合わせの構造とCSSを確認。
白い96pxヘッダー、青系の配色、明朝体の大型ヒーローコピー、英字のセクション見出し、2列の事業カード、3列の加工品、曲線背景、左右分割の会社紹介、問い合わせバナー、紺色フッターを再構成した。

## 上田製作所向けの変更

- バレル加工を機械部品・金属部品加工に変更。
- 1965年創業・事業承継などサンエイ固有の情報を転用せず、約70種類の製造品と3名の体制を紹介。
- 創業年・資本金・加工精度・材質などの未支給データは創作しない。
- メンテナンス事業は開始予定として明記。
- メールアドレス未支給のため、電話とFAXによる問い合わせ導線を実装。送信フォームは設置していない。
- ロゴは暫定の文字組み。写真は全てAI生成のイメージであり、実際の工場・製品・設備の証拠ではない。画面にも注記。
- プライバシーポリシーは制作案。実際の運用に合わせて公開前に確認する。

## 画像

built-in image_genを使用。WebP化はsharpによる形式変換のみ。再生成なし。

| 配置                               | ファイル                      | 用途                           |
| ---------------------------------- | ----------------------------- | ------------------------------ |
| ヒーロー・会社紹介・問い合わせ背景 | `public/images/workshop.webp` | 小規模な金属加工工場のイメージ |
| 事業・製造品紹介                   | `public/images/parts.webp`    | 機械部品のイメージ             |
| 加工紹介                           | `public/images/lathe.webp`    | 旋盤加工のイメージ             |

### 最終プロンプト

HERO: Use case: photorealistic-natural. Asset type: Japanese manufacturing business website hero, original illustrative image, not a photograph of an actual named company facility. Cinematic wide 16:9 Japanese small metalworking workshop interior, two modest NC lathes and milling machines, aged olive and gray equipment, authentic industrial texture, orderly compact workshop, no people. Wide interior view with darker mid-center area suitable for later overlaid white Japanese serif typography; do not render any typography. Soft daylight, calm and credible editorial industrial photography. Neutral cool steel, blue-gray, muted olive and gray; cohesive manufacturing photo series. Realistic equipment proportions and practical room layout. No people, no text, no logos, no watermark.

PARTS: Use case: photorealistic-natural. Asset type: Japanese manufacturing business website supporting photo, original illustrative image, not an actual named company's products. Landscape 4:3 editorial closeup of an array of machined steel cylindrical bushings, bolts, clamps, and bearing housings resting on a dark steel workbench. Clear circular turning marks, believable machined metal surfaces and precise credible geometry. Close still-life composition, grounded parts with natural contact shadows, no floating pieces. Soft natural workshop light, calm credible editorial industrial photography. Cool steel, blue-gray and silver, cohesive manufacturing photo series. No people, no text, no logos, no watermark.

LATHE: Use case: photorealistic-natural. Asset type: Japanese manufacturing business website supporting photo, original illustrative image, not a photograph of an actual named company facility. Landscape 4:3 editorial macro of a lathe chuck securely holding a cylindrical metal part, with a cutting tool and a few metal chips. Detailed honest industrial texture, subtle machining marks, credible lathe chuck jaws and metal surfaces. Close view of chuck, cylindrical workpiece, and cutting tool; plausible safe machine setup. Moody cool workshop natural lighting, calm credible editorial industrial photography. Neutral cool steel, blue-gray, silver and muted gray, cohesive manufacturing photo series. No hands, no people, no text, no logos, no watermark.
