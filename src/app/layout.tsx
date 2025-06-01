import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Elvis Sawing Portfolio",
    template: "%s | Elvis Sawing Portfolio"
  },
  description: "Software Engineering Student at Universiti Malaya | Sarawak Energy Scholar | Passionate about cloud technologies, AI, and full-stack development",
  keywords: ["Elvis Sawing", "Software Engineering", "Universiti Malaya", "Cloud Computing", "AWS", "Next.js", "Portfolio"],
  authors: [{ name: "Elvis Sawing Anak Muran" }],
  creator: "Elvis Sawing Anak Muran",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elvissawing.dev",
    siteName: "Elvis Sawing Portfolio",
    title: "Elvis Sawing - Software Engineering Student",
    description: "Software Engineering Student at Universiti Malaya | Sarawak Energy Scholar | Passionate about cloud technologies, AI, and full-stack development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis Sawing - Software Engineering Student",
    description: "Software Engineering Student at Universiti Malaya | Sarawak Energy Scholar",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
