import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main-content" className="section">
      <div className="wrap">
        <p className="eyebrow">404 — PAGE NOT FOUND</p>
        <h1 className="future-title">ページが見つかりませんでした。</h1>
        <p className="body-text">
          URLをご確認いただくか、トップページからお探しください。
        </p>
        <Link className="text-link" href="/">
          トップページへ戻る <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
}
