import "./globals.css";
import { asap } from './fonts';
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${asap.className} antialiased min-h-screen bg-cyan-950 text-gray-300 flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
