import type { Metadata } from 'next';
import { company } from '@/lib/company';
import { Heading, PageHero, PageIndex } from '@/components/site';
export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    '金属部品・機械部品加工のご相談は上田製作所へ。TEL 06-6743-0631、FAX 06-6743-6006。図面、材質、数量、納期などをお知らせください。',
};
export default function ContactPage() {
  return (
    <main id="main-content" className="subpage">
      <PageHero title="お問い合わせ" en="CONTACT" eyebrow="GET IN TOUCH">
        部品加工のご相談、お見積り、加工可否の確認など、お気軽にお電話ください。部品の材質や形状、数量、ご希望の納期が分かると、より具体的にお話を進められます。
      </PageHero>
      <PageIndex
        items={[
          ['contact-method', 'お問い合わせ窓口'],
          ['contact-guide', 'ご相談前の準備'],
        ]}
      />
      <section className="section" id="contact-method">
        <div className="wrap">
          <Heading ja="お問い合わせ窓口" en="INFORMATION" />
          <div className="contact-info">
            <article className="info-card">
              <span className="eyebrow">TEL</span>
              <h3>お電話でのお問い合わせ</h3>
              <a className="contact-number" href={company.telephoneHref}>
                {company.telephone}
              </a>
              <p>
                新規の加工相談や、現在のお取引に関するご連絡はこちらへ。加工できるか分からない場合も、まずはご相談ください。
              </p>
            </article>
            <article className="info-card">
              <span className="eyebrow">FAX</span>
              <h3>図面・資料の送付</h3>
              <strong className="contact-number">{company.fax}</strong>
              <p>
                FAXで資料をお送りいただく際は、会社名・お名前・ご連絡先を添えてください。送付前にお電話でご連絡いただくとスムーズです。
              </p>
              <a className="text-link" href="#contact-guide">
                ご相談前の準備を見る <span aria-hidden="true">↓</span>
              </a>
            </article>
          </div>
        </div>
      </section>
      <section className="section ice" id="contact-guide">
        <div className="wrap">
          <Heading ja="ご相談前に" en="CONTACT GUIDE" />
          <p className="lead">
            次の内容が分かると、加工可否やお見積りについて具体的に確認できます。すべて揃っていなくても、まずはお電話ください。
          </p>
          <div className="guide-grid">
            {[
              ['01', '品物・用途', '部品の名称、使用する機械、部品の役割など'],
              ['02', '材質・形状', '材質、寸法、形状、加工が必要な箇所など'],
              ['03', '希望する加工', '切削、スリ割りなど、ご希望の加工内容'],
              ['04', '数量・納期', '予定数量と希望する納期、継続製作の有無'],
              ['05', '求める仕様', '必要な精度、仕上がり、使用条件など'],
              ['06', '図面・現物', '図面、写真、サンプルなどの参考資料'],
            ].map(([n, t, p]) => (
              <article key={n}>
                <span className="eyebrow">{n}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
          <div className="phone-cta">
            <div>
              <small>加工のご相談はこちら</small>
              <strong>{company.telephone}</strong>
            </div>
            <a href={company.telephoneHref}>
              電話をかける <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
