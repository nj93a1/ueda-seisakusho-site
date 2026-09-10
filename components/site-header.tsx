'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
const links = [
  ['/', 'ホーム'],
  ['/manufacturing/', '製造・加工について'],
  ['/company/', '会社概要'],
  ['/contact/', 'お問い合わせ'],
];
export function SiteHeader() {
  const pathname = usePathname();
  const active = (href: string) =>
    href === '/'
      ? pathname === '/'
      : pathname?.startsWith(href.replace(/\/$/, ''));
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        本文へスキップ
      </a>
      <div className="wrap header-inner">
        <Link className="brand" href="/" aria-label="上田製作所 ホーム">
          <span className="brand-name">上田製作所</span>
        </Link>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {links.map(([href, label]) => (
            <Link
              href={href}
              key={href}
              className={`${active(href) ? 'current ' : ''}${href === '/contact/' ? 'nav-cta' : ''}`}
              aria-current={active(href) ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mobile-trigger">
          <details className="mobile-menu">
            <summary className="menu-trigger" aria-label="メニューを開く">
              <Menu size={26} />
            </summary>
            <div className="mobile-sheet">
              <p className="mobile-title">上田製作所</p>
              <p className="mobile-description">メニュー</p>
              <nav className="mobile-nav" aria-label="モバイルナビゲーション">
                {links.map(([href, label], i) => (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active(href) ? 'page' : undefined}
                  >
                    <span>0{i + 1}</span>
                    {label}
                    <b aria-hidden="true">→</b>
                  </Link>
                ))}
              </nav>
              <a className="mobile-phone" href="tel:0667430631">
                06-6743-0631
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
