import type { Metadata } from 'next';
import { company } from '@/lib/company';
import {
  ContactBanner,
  Heading,
  PageHero,
  PageIndex,
  Photo,
} from '@/components/site';
export const metadata: Metadata = {
  title: '製造・加工について',
  description:
    'ねじ切り機関連の約70種類の部品を中心に、金属部品・機械部品の製造加工に対応。NC旋盤などの設備と製造体制をご紹介します。',
};
export default function ManufacturingPage() {
  return (
    <main id="main-content" className="subpage">
      <PageHero
        title="製造・加工について"
        en="MANUFACTURING"
        eyebrow="OUR TECHNOLOGY"
      >
        機械の動きを、ひとつの部品から。ねじ切り機関連部品を中心に、形状や用途の異なる多品種の製造・加工に対応しています。
      </PageHero>
      <PageIndex
        items={[
          ['about', '上田製作所の加工'],
          ['processing', '製造・加工品'],
          ['equipment', '設備・加工体制'],
          ['business', 'その他の事業'],
        ]}
      />
      <section className="section" id="about">
        <div className="wrap">
          <Heading ja="上田製作所の加工" en="OUR TECHNOLOGY" />
          <div className="split">
            <div>
              <p className="body-text">
                私たちの仕事は、機械を構成する一つひとつの部品をつくること。レッキス工業株式会社のねじ切り機に使用される約70種類のパーツをはじめ、さまざまな機械部品・金属部品の加工に携わっています。
              </p>
              <p className="body-text">
                ボディのような部品から、ボルトや軸受などの部品まで。形状や用途、加工する箇所に合わせ、NC旋盤やフライス盤などの工作機械を使い分けています。
              </p>
            </div>
            <Photo
              src="/images/lathe.webp"
              alt="旋盤による機械部品加工のイメージ"
            />
          </div>
          <div className="strength-grid">
            {[
              [
                '01',
                '約70種類の多品種製造',
                'ねじ切り機関連だけでも約70種類。形状も用途も異なる部品に向き合ってきました。',
              ],
              [
                '02',
                '製品に合った加工設備',
                'NC旋盤2台を中心に、複数の工作機械を加工内容に応じて使い分けています。',
              ],
              [
                '03',
                '少数精鋭の柔軟な対応',
                '3名の製造体制で、一つひとつの製品に柔軟に対応しています。',
              ],
            ].map(([n, t, p]) => (
              <article key={n}>
                <span className="eyebrow">{n}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section ice" id="processing">
        <div className="wrap">
          <Heading ja="主な製造・加工品" en="PRODUCTS" />
          <p className="lead">
            ねじ切り機の動作を支える部品から、各種金属部品まで。取り扱っている代表的な部品と加工内容です。
          </p>
          <div className="process-grid">
            <article className="process-item">
              <span className="eyebrow">01 — MACHINE PARTS</span>
              <h3>ねじ切り機関連部品</h3>
              <p>用途や形状の異なる部品を多品種で製造しています。</p>
              <ul className="product-tags">
                {company.products.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
            <article className="process-item">
              <span className="eyebrow">02 — METAL PROCESSING</span>
              <h3>各種金属・機械部品の加工</h3>
              <p>
                ブレーキバルブ加工やスリ割り加工などにも対応。加工内容に合わせて設備を選び、製作を進めます。対応可否はお電話でご相談ください。
              </p>
              <ul className="product-tags">
                {company.processes.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          </div>
          <Photo
            src="/images/parts.webp"
            alt="さまざまな形状の金属部品のイメージ"
            className="wide-photo"
          />
        </div>
      </section>
      <section className="section off" id="equipment">
        <div className="wrap">
          <Heading ja="設備・加工体制" en="EQUIPMENT" />
          <p className="lead">
            旋盤加工を中心に、複数の工作機械を活用。一つの方法に限らず、製品や加工内容に応じたものづくりを行っています。
          </p>
          <div className="equipment-grid">
            {company.equipment.map((e) => (
              <article className="equipment-card" key={e.name}>
                <h3>
                  {e.name}
                  {e.quantity && <strong>{e.quantity}</strong>}
                </h3>
                <p>{e.description}</p>
              </article>
            ))}
          </div>
          <div className="steps">
            {[
              [
                '01',
                'ご相談',
                '部品の用途や材質、数量、希望納期などをお聞かせください。',
              ],
              [
                '02',
                '加工内容の確認',
                '図面や仕様をもとに、対応できる加工内容を確認します。',
              ],
              [
                '03',
                '製造・加工',
                '製品に合わせた工作機械を使い分け、加工を行います。',
              ],
              ['04', '確認・お渡し', '加工内容を確認し、製品をお渡しします。'],
            ].map(([n, t, p]) => (
              <article key={n}>
                <span className="eyebrow">{n}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="business">
        <div className="wrap">
          <Heading ja="その他の事業・これからの展開" en="OUR BUSINESS" />
          <div className="business-list">
            {company.businesses.slice(1).map((b) => (
              <article className="business-row" key={b.name}>
                <h3>
                  {b.name}
                  {b.planned && <span className="planned">開始予定</span>}
                </h3>
                <p>{b.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactBanner />
    </main>
  );
}
