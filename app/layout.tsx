import "./globals.css";
import { asap } from './fonts';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Code Club'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${asap.className} antialiased min-h-screen bg-slate-900 text-gray-300 flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
