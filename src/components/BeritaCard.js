import Link from "next/link";
import Image from "next/image";

export default function BeritaCard({ berita }) {
  return (
    <article className="flex h-full flex-col border border-slate-200 bg-white transition-colors hover:border-[var(--brand-blue)]">
      <div className="relative aspect-[3/2] border-b border-slate-200 bg-slate-100">
        <Image
          src={berita.gambar}
          alt={berita.judul}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <time className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--brand-blue)]">
          {berita.tanggal || "Tanggal berita"}
        </time>
        <h3 className="mb-3 text-xl font-bold leading-tight">
          {berita.judul || "Judul berita"}
        </h3>
        <p className="mb-6 flex-1 leading-relaxed text-gray-700">
          {berita.ringkasan || "Ringkasan berita ditulis di bagian ini."}
        </p>
        <Link
          className="inline-flex w-fit bg-[var(--brand-navy)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--brand-blue)]"
          href={`/berita/${berita.slug}`}
        >
          Baca Selengkapnya
        </Link>
      </div>
    </article>
  );
}