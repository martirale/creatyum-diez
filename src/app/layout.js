import "@/styles/globals.css";
import { Roboto, SpaceMono } from "@/components/customFonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Creatyum Media",
  description: "Revista digital para diseñadores y creativos en Latam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${Roboto.variable} ${SpaceMono.variable} font-Roboto font-light bg-yellow text-black dark:bg-black dark:text-yellow`}
      >
        <Header />

        <main className="container mx-auto p-4 pt-24 md:pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
