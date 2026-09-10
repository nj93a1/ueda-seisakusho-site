import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '機械部品・金属部品の製造加工｜株式会社 上田製作所',
    template: '%s｜株式会社 上田製作所',
  },
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
  description:
    '大阪府東大阪市で機械部品・金属部品の製造・加工を行う株式会社 上田製作所のコーポレートサイトです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" id="top">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
