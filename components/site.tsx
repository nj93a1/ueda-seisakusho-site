import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { company } from '@/lib/company';
export function Heading({
  ja,
  en,
  align = 'left',
}: {
  ja: string;
  en: string;
  align?: 'left' | 'right' | 'center';
}) {
  return (
    <h2 className={`section-heading ${align}`}>
      <span className="ja">{ja}</span>
      <span className="en" lang="en">
        {en}
      </span>
    </h2>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function Photo({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={`photo ${className}`}>
      <Image
        unoptimized
        src={src}
        alt={alt}
        width={1448}
        height={1086}
        loading="lazy"
        decoding="async"
      />
      <figcaption>加工イメージ</figcaption>
    </figure>
  );
}
export function PageHero({
  title,
  en,
  eyebrow,
  children,
}: {
  title: string;
  en: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <span className="page-eyebrow">{eyebrow}</span>
        <span className="page-en">{en}</span>
        <h1>{title}</h1>
        <p>{children}</p>
        <nav className="breadcrumb" aria-label="パンくずリスト">
          <Link href="/">ホーム</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
      </div>
    </section>
  );
}
export function PageIndex({ items }: { items: [string, string][] }) {
  return (
    <nav className="page-index wrap" aria-label="ページ内メニュー">
      {items.map(([id, label]) => (
        <a key={id} href={`#${id}`}>
          {label}
          <span aria-hidden="true">↓</span>
        </a>
      ))}
    </nav>
  );
}
export function ContactBanner() {
  return (
    <section className="contact-banner-section">
      <div className="wrap contact-banner">
        <h2>加工のご相談・お見積りについて</h2>
        <div className="contact-banner-grid">
          <Link className="contact-panel" href="/contact/">
            <Phone size={30} strokeWidth={1.5} aria-hidden="true" />
            <span>
              <small>加工相談・お見積りはこちら</small>
              <strong>CONTACT</strong>
            </span>
            <ArrowRight size={25} aria-hidden="true" />
          </Link>
          <a className="phone-panel" href={company.telephoneHref}>
            <span>お電話でのお問い合わせ</span>
            <strong>{company.telephone}</strong>
            <small>タップして電話をかける</small>
          </a>
        </div>
      </div>
    </section>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link href="/" className="footer-brand">
              {company.name}
            </Link>
            <p>
              〒{company.postalCode}
              <br />
              {company.address}
              <br />
              TEL <a href={company.telephoneHref}>{company.telephone}</a>
              <br />
              FAX {company.fax}
            </p>
            <p>機械部品・金属部品の製造・加工</p>
          </div>
          <nav className="footer-nav" aria-label="フッターナビゲーション">
            <div>
              <strong>SERVICE</strong>
              <Link href="/manufacturing/">製造・加工について</Link>
              <Link href="/manufacturing/#processing">製造・加工品</Link>
              <Link href="/manufacturing/#equipment">設備・加工体制</Link>
            </div>
            <div>
              <strong>COMPANY</strong>
              <Link href="/company/">会社概要</Link>
              <Link href="/company/#future">これからの上田製作所</Link>
              <Link href="/company/#access">アクセス</Link>
            </div>
            <div>
              <strong>OTHER</strong>
              <Link href="/contact/">お問い合わせ</Link>
              <Link href="/privacy/">プライバシーポリシー</Link>
            </div>
          </nav>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} UEDA SEISAKUSHO Co., Ltd.
          <a href="#top">PAGE TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}
