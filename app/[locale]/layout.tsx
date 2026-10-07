import Script from "next/script";
import "./globals.css";
import { Toaster } from "sonner";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";

type MetadataProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata>{
  const { locale } = await params;

  const t = await getTranslations({
    locale, namespace: "Metadata",
  });

  const baseurl = "https://usecountme.com";
  const canonicalUrl = `${baseurl}/${locale}`;

  return{
    title: t('title'),
    description: t('description'),
    keywords: t.raw("keywords") as string[],

    alternates:{
      canonical: canonicalUrl,
      languages: {
      "pt-BR": `${baseurl}/pt`,
      "en": `${baseurl}/en`,
      "es": `${baseurl}/es`,
      "x-default": `${baseurl}/en`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: canonicalUrl,
      siteName: "Use Count Me",
      locale: t("ogLocale"),
      type: "website",
      images: [
        {
          url: "https://usecountme.com/og-image.png",
          width: 1200,
          height: 630,
          alt: t("title" ),
        }
      ]
    },

    twitter: {
      card: "summary",
      title: t("title"),
      description: t("description"),
      images: ["https://usecountme.com/og-image.png"],
    },

    robots: {
      index: true,
      follow: true
    }
    
  };
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function RootLayout({ children, params }: LayoutProps) {

  const { locale } = await params;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        />
      </head>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster theme="dark" position="top-right" richColors closeButton/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
