import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchAllTechs } from "../action/fetch";

export default async function TechnologiesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const technologies = await fetchAllTechs();
  
  return (
    <>
      <Header technologies={technologies} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}