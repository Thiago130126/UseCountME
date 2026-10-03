import Script from "next/script";
import "./globals.css";
import { Toaster } from "sonner";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <head>
        <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        />
      </head>
      <body>
        {children}
        <Toaster theme="dark" position="top-right" richColors closeButton/>
      </body>
    </html>
  );
}
