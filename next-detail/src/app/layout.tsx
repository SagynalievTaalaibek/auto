import type {Metadata} from "next";
import {Geist_Mono, Montserrat} from "next/font/google";
import clsx from 'clsx';
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto Detailing CRM",
  description: "CRM for auto detailing business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={clsx(montserrat.variable, geistMono.variable)}>
        {children}
      </body>
    </html>
  );
}
