import BeritaCard from "@/components/BeritaCard";
import { daftarBerita } from "@/data/berita";

export default function BeritaPage() {
  return (
    <main className="mx-auto max-w-screen-xl px-5 py-10 sm:px-8 sm:py-16">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-blue)]">Berita terbaru</p>
        <h1 className="text-4xl font-black text-[var(--brand-navy)] sm:text-5xl">Kabar dari kehidupan sekolah.</h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-[var(--muted)]">Informasi, kegiatan, dan agenda yang ditampilkan pada situs SMAN 1 Balige.</p>
      </header>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {daftarBerita.map((item) => (
          <BeritaCard key={item.slug} berita={item} />
        ))}
      </div>
    </main>
  );
}