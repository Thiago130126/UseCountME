import Script from "next/script";
import "./globals.css";
import { Toaster } from "sonner";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: 'Use Count Me | Contador de Palavras e Caracteres Grátis',
  description:
    'Ferramenta 100% gratuita para contagem precisa de caracteres, palavras e frases em tempo real. Converta textos para maiúsculas e minúsculas com facilidade.',
  
    keywords: [
      'contador de palavras',
      'contador de caracteres',
      'contar palavras online',
      'contar caracteres sem espaço',
      'ferramenta de texto',
      'contagem de palavras',
      'contador de palavras online grátis',
      'contador de palavras para texto',
      'contagem de palavras online',
      'contador de palavras para SEO',
      'densidade de palavras-chave',
      'contador de frases e parágrafos',
      'contador de palavras online grátis sem cadastro'
    ],

    authors: [{name: 'Thiago'}],
    applicationName: 'Use Count Me',

    openGraph: {
      title: 'Use Count Me | Contador de Palavras e Caracteres',
      description:
        'Conte caracteres, palavras e frases instantaneamente direto no seu navegador com total privacidade.',
      url: 'https://usecountme.com',
      siteName: 'Use Count Me',
      locale: 'pt_BR',
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: 'Use Count Me | Contador de Palavras',
      description: 'Contador de texto rápido, 100% gratuito e privado.'
    },
    robots: {
      index: true,
      follow: true,
    },
};

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
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster theme="dark" position="top-right" richColors closeButton/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
