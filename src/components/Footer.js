import Image from "next/image";
import { sekolah } from "@/data/sekolah";

export default function Footer() {
  return (
    <footer className="mt-16 bg-[var(--brand-navy)] text-white">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-3">
        <div className="flex items-center gap-4">
          <Image
            src="/logo-sman1.png"
            alt={`Logo ${sekolah.nama}`}
            width={80}
            height={80}
            className="size-20 shrink-0 object-contain"
          />
          <div>
            <p className="text-lg font-bold uppercase text-white">SMAN 1 BALIGE</p>
            <p className="mt-1 text-sm text-white/70">{sekolah.tagline}</p>
          </div>
        </div>
        <p className="text-sm text-white/70 lg:text-center">
          © 2026 SMAN 1 Balige
        </p>
        <address className="text-right text-sm not-italic leading-relaxed text-white/80">
          <span className="block">{sekolah.alamat}</span>
          <span className="block">{sekolah.email}</span>
          <span className="block">{sekolah.telepon}</span>
        </address>
      </div>
    </footer>
  );
}