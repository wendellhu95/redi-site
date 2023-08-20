import { useRouter } from "next/router";

export default {
  github: 'https://github.com/wzhudev/redi',
  docsRepositoryBase: 'https://github.com/wzhudev/redi-site/tree/main',
  titleSuffix: ' – redi',
  floatTOC: true,
  logo: () => {
    const TITLE_WITH_TRANSLATIONS = {
      "zh-CN": "轻量的依赖注入框架",
      "en-US": "a lightweight dependency injection library"
    };
    const { locale } = useRouter();
    return <>
      <span className="mr-2 font-extrabold hidden md:inline">redi</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        {TITLE_WITH_TRANSLATIONS[locale]}
      </span>
    </>
  },
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="redi: a light weight dependency injection library, along with bindings for React." />
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:image" content="https://nextra.vercel.app/og.png" /> */}
      <meta name="twitter:site:domain" content="redi.wendellhu.fun" />
      <meta name="twitter:url" content="https://redi.wendellhu.fun" />
      <meta name="og:description" content="redi: a light weight dependency injection library, along with bindings for React." />
      <meta name="og:title" content="redi: dependency injection for JavaScript" />
      {/* <meta name="og:image" content="https://nextra.vercel.app/og.png" /> */}
      <meta name="apple-mobile-web-app-title" content="redi" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "zh-CN":
        return "在 GitHub 上编辑本页";
      case "es-ES":
        return "Edite esta página en GitHub";
      case "ja":
        return "Github で編集する";
      case "ko":
        return "Github에서 이 페이지 편집하기";
      default:
        return "Edit this page on GitHub";
    }
  },
  footerText: <>MIT {new Date().getFullYear()} © wzhudev.</>,
  unstable_faviconGlyph: '👋',
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "zh-CN", text: "简体中文" },
  ],
}
