import LocaleSwitcher from "../../components/locale-switcher";
import { i18n, type Locale } from "../../i18n-config";
import "./global.css";
import { Jost } from "next/font/google";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const jost = Jost({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} className={jost.className}>
      <body>
        <LocaleSwitcher />
        <main>{children}</main>
      </body>
    </html>
  );
}

export const metadata = {
  title: "i18n within app directory - Vercel Examples",
  description: "How to do i18n in Next.js 13 within app directory",
};
