import type { Metadata } from "next";
import { Catamaran, Crimson_Text } from "next/font/google";
import "./globals.css";
import MobileMenu from "./components/organisms/MobileMenu";
import MobileHeader from "./components/organisms/MobileHeader";
import DesktopHeader from "./components/organisms/DesktopHeader";
import ButtonWa from "./components/atoms/ButtonWa";
import Footer from "./components/organisms/Footer";

const crimsonText = Crimson_Text({
      variable: "--font-crimson-text",
      weight: ["400", "600", "700"],
      subsets: ["latin"],
});

const catamaran = Catamaran({
      variable: "--font-catamaran",
      weight: ["300", "400", "500"],
      subsets: ["latin"],
});

export const metadata: Metadata = {
       metadataBase: new URL('https://www.stickfenomenal.com'),
      title: "VitalisCenter",
      description: "VitalisCenter - Tu clinica de Fisioterapia",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
      return (
            <html
                  lang="es"
                  className={`${crimsonText.variable} ${catamaran.variable} scroll-smooth h-full antialiased`}
            >
                  <head>
                        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                        <link rel="manifest" href="/manifest.json" />
                        <meta name="msapplication-TileColor" content="#ffffff" />
                        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                        <meta name="theme-color" content="#ffffff" />
                  </head>
                  <body className="min-h-full flex flex-col text-text">
                        <header>
                              <MobileHeader />
                              <DesktopHeader />
                        </header>
                        <MobileMenu />
                        <main>{children}</main>
                        <ButtonWa />
                        <Footer />
                  </body>
            </html>
      );
}
