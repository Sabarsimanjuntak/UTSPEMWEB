import Link from "next/link";
import Image from "next/image";
import { sekolah } from "@/data/sekolah";

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8"
      >
        <Link href="/" aria-label="Beranda" className="flex items-center gap-3">
          <Image
            src="/logo-sman1.png"
            alt={`Logo ${sekolah.nama}`}
            width={72}
            height={72}
            className="size-14 object-contain sm:size-16"
          />
          <span className="flex flex-col">
            <span className="text-lg font-black uppercase leading-tight text-[var(--brand-navy)] sm:text-xl">{sekolah.nama}</span>
            <span className="mt-1 text-xs text-[var(--muted)]">{sekolah.tagline}</span>
          </span>
        </Link>
        <ul className="flex flex-wrap gap-1 text-sm font-bold text-[var(--brand-navy)] sm:gap-3">
          <li><Link className="block border-b-2 border-transparent px-3 py-2 hover:border-[var(--brand-gold)]" href="/">Home</Link></li>
          <li><Link className="block border-b-2 border-transparent px-3 py-2 hover:border-[var(--brand-gold)]" href="/about">About</Link></li>
          <li><Link className="block border-b-2 border-transparent px-3 py-2 hover:border-[var(--brand-gold)]" href="/berita">Berita</Link></li>
        </ul>
      </nav>
    </header>
  );
}