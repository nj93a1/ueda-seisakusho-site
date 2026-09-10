import type { Metadata } from 'next';
import { company } from '@/lib/company';
import {
  ContactBanner,
  Heading,
  PageHero,
  PageIndex,
  Photo,
  TextLink,
} from '@/components/site';
import {
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
export const metadata: Metadata = {
  title: '会社概要',
  description:
    '大阪府東大阪市稲田本町の株式会社 上田製作所。会社概要、代表者、設備、事業内容、アクセスをご案内します。',
};
const profile = [
  ['会社名', company.name],
  ['代表者', company.representative],
  ['所在地', `〒${company.postalCode} ${company.address}`],
  ['従業員数', `${company.employees}名`],
  [
    '事業内容',
    '機械部品・金属部品の製造加工、ゴム部品の製作、アルカリイオン水の販売',
  ],
  ['主な製造品', 'ねじ切り機関連部品 約70種類、各種金属・機械部品'],
  ['主要設備', 'NC旋盤 2台、フライス盤、その他工作機械'],
  ['新規事業', '機械メンテナンス事業（開始予定）'],
];
export default function CompanyPage() {
  return (
    <main id="main-content" className="subpage">
      <PageHero title="会社概要" en="COMPANY" eyebrow="WHO WE ARE">
        ものづくりのまち、東大阪から。株式会社
        上田製作所は、機械部品・金属部品の製造と加工を通して、機械が動く毎日を支えています。
      </PageHero>
      <PageIndex
        items={[
          ['about', '上田製作所について'],
          ['profile', '会社概要'],
          ['future', 'これからの展開'],
          ['access', 'アクセス'],
        ]}
      />
      <section className="section" id="about">
        <div className="wrap">
          <Heading ja="上田製作所について" en="ABOUT US" />
          <div className="split">
            <div>
              <p className="body-text">
                株式会社
                上田製作所は、大阪府東大阪市稲田本町で機械部品・金属部品の製造と加工を行っています。主にレッキス工業株式会社のねじ切り機に使われる部品を製造し、その種類は約70種類にのぼります。
              </p>
              <p className="body-text">
                NC旋盤2台と各種工作機械を活用し、一つひとつの形状や用途に合わせて加工。従業員3名の少数精鋭で、製品に柔軟に対応するものづくりを大切にしています。
              </p>
              <p className="body-text">
                金属部品に加えてゴム部品の製作にも対応。培ってきた技術を生かし、機械メンテナンス分野への展開も準備しています。
              </p>
            </div>
            <Photo
              src="/images/workshop.webp"
              alt="金属加工の町工場のイメージ。上田製作所の実際の工場写真ではありません"
            />
          </div>
        </div>
      </section>
      <section className="section ice" id="profile">
        <div className="wrap">
          <Heading ja="会社概要" en="PROFILE" />
          <Table className="profile">
            <TableBody>
              {profile.map(([label, value]) => (
                <TableRow key={label}>
                  <TableHead scope="row">{label}</TableHead>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableHead scope="row">電話番号</TableHead>
                <TableCell>
                  <a href={company.telephoneHref}>{company.telephone}</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableHead scope="row">FAX番号</TableHead>
                <TableCell>{company.fax}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
      <section className="section" id="future">
        <div className="wrap">
          <Heading ja="これからの上田製作所" en="OUR FUTURE" />
          <div className="future-grid">
            <h3 className="future-title">
              部品を「つくる」から、
              <br />
              機械を「守る」へ。
            </h3>
            <div>
              <span className="eyebrow">NEXT CHALLENGE</span>
              <p className="body-text">
                新規事業として、機械メンテナンスの開始を予定しています。機械を構成する部品をつくってきた経験を生かし、機械そのものを支える分野へ。ものづくりの現場に、より広く関わっていきたいと考えています。
              </p>
              <p className="body-text">
                メンテナンス事業は現在準備中です。詳しい内容はお問い合わせください。
              </p>
              <TextLink href="/contact/">お問い合わせはこちら</TextLink>
            </div>
          </div>
        </div>
      </section>
      <section className="section trust">
        <div className="wrap">
          <Heading ja="一つひとつに向き合うものづくり" en="OUR APPROACH" />
          <p>
            部品は、ひとつで完結するものではありません。組み合わさり、動き、機械の働きを生み出します。だからこそ、その先にある用途を考え、一つひとつの加工に向き合う。上田製作所は、身近なものづくりの担い手であり続けます。
          </p>
        </div>
      </section>
      <section className="section off" id="access">
        <div className="wrap">
          <Heading ja="アクセス" en="ACCESS" />
          <div className="access-grid">
            <div className="access-card">
              <h3>{company.name}</h3>
              <p>
                〒{company.postalCode}
                <br />
                {company.address}
              </p>
              <p>
                TEL <a href={company.telephoneHref}>{company.telephone}</a>
                <br />
                FAX {company.fax}
              </p>
              <p className="body-text">
                ご来社の際は、事前にお電話でご連絡ください。
              </p>
              <a
                className="text-link"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Googleマップで開く <span aria-hidden="true">↗</span>
              </a>
            </div>
            <iframe
              className="map-frame"
              title="上田製作所 所在地のGoogleマップ"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`}
            />
          </div>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
