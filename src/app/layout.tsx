import type { Metadata } from "next";
import { Epilogue, Manrope, IBM_Plex_Sans_Arabic } from "next/font/google";

import { ThemeProvider } from "@/theme";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

import { SnackProvider } from "@/snackbar/SnackBarProvider";
import { Snackbar } from "@/snackbar/SnackBar";

import "./globals.css";

/* ------  Fonts  ------ */
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-epilogue",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],

  variable: "--font-manrope",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-arabic",
});

/* ------  Metadata  ------ */
export const metadata: Metadata = {
  metadataBase: new URL("https://bstawy.github.io/MeraMade/"),
  title: {
    default: "Mera Made - Artisanal Sweets & Baked Goods",
    template: "%s | Mera Made",
  },
  description:
    "Mera Made is a home-based artisanal sweets and baked goods brand. Every bite is handcrafted with love, using quality ingredients.",
  openGraph: {
    title: "Mera Made - Artisanal Sweets & Baked Goods",
    description:
      "Mera Made is a home-based artisanal sweets and baked goods brand. Every bite is handcrafted with love, using quality ingredients.",
    url: "https://bstawy.github.io/MeraMade/",
    siteName: "Mera Made",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Mera Made - Artisanal Sweets & Baked Goods",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mera Made - Artisanal Sweets & Baked Goods",
    description:
      "Mera Made is a home-based artisanal sweets and baked goods brand. Every bite is handcrafted with love, using quality ingredients.",
    images: ["/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${manrope.variable} ${ibmPlexSansArabic.variable}`}
    >
      <body>
        <ThemeProvider>
          <SnackProvider>
            <Snackbar />
            <Header />
            {children}
            <Footer />
          </SnackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
