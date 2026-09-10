import Link from 'next/link';
import Image from 'next/image';
import { ContactBanner, Heading, Photo, TextLink } from '@/components/site';

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <Image
          unoptimized
          className="hero-photo"
          src="/images/workshop.webp"
          alt="金属加工の町工場のイメージ"
          width={1672}
          height={941}
          fetchPriority="high"
        />
        <div className="hero-copy">
          <p className="hero-eyebrow">UEDA SEISAKUSHO — HIGASHIOSAKA</p>
          <h1 id="hero-title">
            <span>ひとつの部品に、確かな技術。</span>
            <span>
              東大阪から支える
              <span className="mobile-break">日本のものづくり</span>
            </span>
          </h1>
        </div>
        <a className="hero-scroll" href="#introduction">
          SCROLL <span aria-hidden="true">↓</span>
        </a>
        <span className="hero-caption">写真は加工現場のイメージです</span>
      </section>
      <section id="introduction" className="intro section">
        <div className="wrap">
          <p>
            株式会社
            上田製作所は、大阪府東大阪市で機械部品・金属部品の製造と加工を行っています。ねじ切り機に使用される約70種類の部品を中心に、多種多様なものづくりに携わってきました。NC旋盤や各種工作機械を使い分け、一つひとつの形状や用途に合わせて加工。小さな部品から、機械が動く毎日を支えています。
          </p>
        </div>
      </section>
      <section className="purpose wrap" aria-labelledby="purpose-title">
        <h2 id="purpose-title">お探しの情報はこちら</h2>
        <div className="purpose-links">
          {[
            [
              '01',
              '加工内容を知りたい',
              '対応部品・加工内容をご紹介',
              '/manufacturing/#processing',
            ],
            [
              '02',
              '設備・体制を見たい',
              '工作機械とものづくりの体制',
              '/manufacturing/#equipment',
            ],
            [
              '03',
              '加工について相談したい',
              'ご相談・お問い合わせはこちら',
              '/contact/',
            ],
          ].map(([num, title, copy, href]) => (
            <Link href={href} key={num}>
              <span className="eyebrow">{num}</span>
              <strong>{title}</strong>
              <span>{copy}</span>
              <b aria-hidden="true">→</b>
            </Link>
          ))}
        </div>
      </section>
      <section className="section service-section">
        <div className="wrap">
          <Heading ja="事業内容" en="SERVICE" align="center" />
          <div className="service-grid">
            <article className="service-card">
              <Photo
                src="/images/lathe.webp"
                alt="NC旋盤による金属切削のイメージ"
              />
              <div className="service-body">
                <span className="eyebrow">01</span>
                <h3>機械部品・金属部品加工</h3>
                <p>
                  ねじ切り機に使われる部品を中心に、形状や用途の異なる多品種の金属部品を製造。製品に合わせて工作機械を使い分け、加工を行います。
                </p>
                <TextLink href="/manufacturing/">詳しく見る</TextLink>
              </div>
            </article>
            <article className="service-card">
              <Photo
                src="/images/parts.webp"
                alt="さまざまな形状の機械部品のイメージ"
              />
              <div className="service-body">
                <span className="eyebrow">02</span>
                <h3>多様なものづくりへの対応</h3>
                <p>
                  金属部品だけでなく、ゴム部品の製作にも対応。培ってきた加工技術を生かし、機械メンテナンスの分野へも事業を広げていく予定です。
                </p>
                <TextLink href="/manufacturing/#business">詳しく見る</TextLink>
              </div>
            </article>
          </div>
        </div>
      </section>
      <div className="wave-surface">
        <section className="section works-section">
          <div className="wrap">
            <Heading ja="製造・加工品" en="WORKS" align="right" />
            <p className="works-lead">
              機械の動きを支える、さまざまな部品。
              <br />
              上田製作所が手がける代表的な製造・加工品をご紹介します。
            </p>
            <div className="works-grid">
              {[
                [
                  'ねじ切り機関連部品',
                  'ボディ、フロントカバー、スクロールカバーなど。レッキス工業株式会社のねじ切り機用パーツを約70種類製造しています。',
                  'parts',
                  '',
                ],
                [
                  '機構を支える金属部品',
                  'クランプ、締付ホイール、ボルト類、偏芯ハンドル、軸受など、形状も役割も異なる部品を加工しています。',
                  'lathe',
                  '',
                ],
                [
                  '各種加工への対応',
                  'ブレーキバルブ加工やスリ割り加工など。製品や加工内容に応じた設備を使用し、多様なものづくりに対応します。',
                  'parts',
                  'parts-close',
                ],
              ].map(([title, copy, img, cls]) => (
                <article className="work-card" key={title}>
                  <Photo
                    src={`/images/${img}.webp`}
                    alt={`${title}の加工イメージ`}
                    className={cls}
                  />
                  <div className="work-body">
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <TextLink href="/manufacturing/#processing">
                      加工内容を見る
                    </TextLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="about-band">
          <div className="wrap about-grid">
            <div>
              <p className="eyebrow">ABOUT UEDA</p>
              <h2>
                つくる技術を、
                <br />
                その先の力へ。
              </h2>
            </div>
            <div className="about-story">
              <p>
                ものづくりのまち、東大阪で。私たちは少数精鋭の製造体制で、一つひとつの部品に向き合っています。金属加工からゴム部品の製作、そして機械メンテナンスへ。部品を「つくる」だけでなく、機械を「守る」仕事にも挑戦していきます。
              </p>
              <div className="company-facts">
                <div>
                  <span>ねじ切り機関連部品</span>
                  <strong>
                    約 <b>70</b> 種類
                  </strong>
                </div>
                <div>
                  <span>少数精鋭のものづくり</span>
                  <strong>
                    <b>3</b> 名の製造体制
                  </strong>
                </div>
              </div>
              <TextLink href="/company/#about">上田製作所について</TextLink>
              <TextLink href="/company/#access">
                会社概要・アクセスを見る
              </TextLink>
            </div>
          </div>
        </section>
      </div>
      <ContactBanner />
    </main>
  );
}
