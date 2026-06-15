import type { Metadata, Viewport } from "next";
import "./globals.css";
import { personalInfo } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: `${personalInfo.name} — Software Engineer`,
  icons: {
    icon: "https://www.clipartmax.com/png/middle/421-4211389_check-official-docker-logo.png",
  },
  description: personalInfo.tagline,
  keywords: [
    "Harsh Gupta",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "DevOps",
    "AI Engineer",
    "Portfolio",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshgupta.dev",
    title: `${personalInfo.name} — Software Engineer`,
    description: personalInfo.tagline,
    siteName: personalInfo.name,
    images: [
      {
        url: "https://www.clipartmax.com/png/middle/421-4211389_check-official-docker-logo.png",
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} — Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} — Software Engineer`,
    description: personalInfo.tagline,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
