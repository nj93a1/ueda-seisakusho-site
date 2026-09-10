'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
const links = [
  ['/', 'ホーム'],
  ['/manufacturing/', '製造・加工について'],
  ['/company/', '会社概要'],
  ['/contact/', 'お問い合わせ'],
];
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
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
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="menu-trigger" aria-label="メニューを開く">
              <Menu size={26} />
            </SheetTrigger>
            <SheetContent className="mobile-sheet" showCloseButton={false}>
              <SheetClose className="menu-close" aria-label="メニューを閉じる">
                <X size={26} />
              </SheetClose>
              <SheetTitle className="mobile-title">上田製作所</SheetTitle>
              <SheetDescription>メニュー</SheetDescription>
              <nav className="mobile-nav" aria-label="モバイルナビゲーション">
                {links.map(([href, label], i) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
