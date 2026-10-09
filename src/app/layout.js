import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { sekolah } from "@/data/sekolah";

export const metadata = {
  title: sekolah.nama,
  description: sekolah.deskripsi,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
