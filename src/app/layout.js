import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Creatyum Media",
  description: "Revista digital para diseñadores y creativos en Latam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-yellow text-black dark:bg-black dark:text-yellow">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
