import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { daftarBerita } from "@/data/berita";

export function generateStaticParams() {
  return daftarBerita.map((item) => ({ id: item.slug }));
}

export default async function DetailBerita({ params }) {
  const { id } = await params;
  const item = daftarBerita.find((berita) => berita.slug === id);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-16">
      <Link className="mb-6 inline-block border-b-2 border-[var(--brand-gold)] px-1 py-2 text-sm font-bold text-[var(--brand-navy)] hover:text-[var(--brand-blue)]" href="/berita">
        Kembali ke Berita
      </Link>
      <article className="border border-slate-200 bg-white">
        <header className="p-5 sm:p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--brand-blue)]">Berita Sekolah</p>
          <h1 className="mb-3 text-3xl font-black text-[var(--brand-navy)] sm:text-5xl">{item.judul}</h1>
          <time className="text-sm text-[var(--muted)]">{item.tanggal || "Tanggal berita"}</time>
        </header>
        <div className="relative aspect-[3/2] border-y border-slate-200 bg-slate-100 sm:aspect-[16/8]">
          <Image
            src={item.gambar}
            alt={item.judul}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>
        <div className="space-y-5 p-5 sm:p-8">
          {item.isi.map((paragraf, index) => (
            <p className="min-h-12 border-l-2 border-[var(--brand-blue)] pl-4 leading-relaxed text-[var(--muted)]" key={`${item.slug}-${index}`}>
              {paragraf || "Isi berita ditulis di bagian ini."}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}