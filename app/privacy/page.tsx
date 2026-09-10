import type { Metadata } from 'next';
import { PageHero } from '@/components/site';
import { company } from '@/lib/company';
export const metadata: Metadata = { title: 'プライバシーポリシー' };
export default function PrivacyPage() {
  return (
    <main id="main-content" className="subpage">
      <PageHero
        title="プライバシーポリシー"
        en="PRIVACY POLICY"
        eyebrow="PERSONAL INFORMATION"
      >
        株式会社
        上田製作所は、お問い合わせやお取引を通じてお預かりする個人情報を大切に取り扱います。
      </PageHero>
      <section className="section">
        <div className="wrap legal">
          <article>
            <h2>1. 個人情報の利用目的</h2>
            <p>
              お名前、ご連絡先などの個人情報は、お問い合わせへの回答、お見積り、製品の製造加工に関するご連絡、お取引への対応のために使用します。
            </p>
          </article>
          <article>
            <h2>2. 個人情報の管理</h2>
            <p>
              お預かりした個人情報は、漏えい、紛失、不正な利用を防ぐよう、適切に管理します。
            </p>
          </article>
          <article>
            <h2>3. 第三者への提供</h2>
            <p>
              ご本人の同意がある場合や法令に基づく場合などを除き、お預かりした個人情報を第三者に提供しません。
            </p>
          </article>
          <article>
            <h2>4. 外部サービスについて</h2>
            <p>
              所在地のご案内にGoogleマップを利用しています。地図の表示や外部サイトへの移動に伴う情報の取り扱いは、それぞれのサービスのプライバシーポリシーをご確認ください。
            </p>
            <a
              className="text-link"
              href="https://policies.google.com/privacy?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google プライバシーポリシー <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article>
            <h2>5. お問い合わせ</h2>
            <p>
              個人情報の確認、訂正、削除などに関するご相談は、下記窓口までご連絡ください。
            </p>
            <p>
              {company.name}
              <br />〒{company.postalCode} {company.address}
              <br />
              TEL <a href={company.telephoneHref}>{company.telephone}</a>
              <br />
              FAX {company.fax}
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
