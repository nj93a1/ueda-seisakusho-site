/** 支給済みの会社情報。創業年など未確認の情報は掲載しない。 */
export const company = {
  name: '株式会社 上田製作所',
  englishName: 'UEDA SEISAKUSHO',
  representative: '上田 治郎',
  postalCode: '577-0001',
  address: '大阪府東大阪市稲田本町2-27-1',
  telephone: '06-6743-0631',
  telephoneHref: 'tel:0667430631',
  fax: '06-6743-6006',
  employees: 3,
  founded: null,
  description:
    '東大阪から、ものづくりを支える。機械部品・金属部品の製造と加工を行う上田製作所です。',
  businesses: [
    {
      name: '機械部品・金属部品の製造加工',
      description:
        'ねじ切り機に使われる約70種類の部品を中心に、形状や用途の異なる多品種の加工に対応しています。',
      planned: false,
    },
    {
      name: 'ゴム部品の製作',
      description: '金属部品に加え、ゴム部品の製作にも対応しています。',
      planned: false,
    },
    {
      name: 'アルカリイオン水の販売',
      description:
        'アルカリイオン水を取り扱っています。詳細はお電話でお問い合わせください。',
      planned: false,
    },
    {
      name: '機械メンテナンス',
      description:
        '部品をつくる技術を、機械を守る仕事へ。新たな事業として準備を進めています。',
      planned: true,
    },
  ],
  products: [
    'ボディ',
    'フロントカバー',
    'スクロールカバー',
    'スクロール爪',
    'クランプ',
    '締付ホイール',
    'ボルト類',
    '偏芯ハンドル',
    '軸受',
    '刻印関連部品',
  ],
  processes: ['ブレーキバルブ加工', 'スリ割り加工'],
  equipment: [
    {
      name: 'NC旋盤',
      quantity: '2台',
      description: '部品の形状や加工内容に合わせた旋削加工。',
    },
    {
      name: 'フライス盤・各種工作機械',
      quantity: null,
      description: '複数の工作機械を使い分け、多品種の加工に対応。',
    },
  ],
} as const;
