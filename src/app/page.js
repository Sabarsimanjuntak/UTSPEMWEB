import Link from "next/link";
import Image from "next/image";
import BeritaCard from "@/components/BeritaCard";
import { daftarBerita } from "@/data/berita";
import { sekolah } from "@/data/sekolah";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="relative isolate min-h-[520px] overflow-hidden bg-[var(--brand-navy)] md:min-h-[640px]">
        <div className="absolute inset-0">
          <Image
            src="/gambar%20home%20sman1.jpg"
            alt="Suasana halaman sekolah SMAN 1 Balige saat upacara"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#090d3b]/95 via-[#10134f]/75 to-[#10134f]/25" />
        <div className="relative mx-auto flex min-h-[520px] max-w-screen-2xl items-center px-5 py-14 sm:px-8 md:min-h-[640px]">
          <div className="max-w-4xl text-white">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-gold)]">{sekolah.nama} · Balige</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] sm:text-6xl md:text-7xl">Tempat belajar dengan tujuan</h1>
            <p className="mt-6 max-w-2xl text-xl font-semibold leading-relaxed sm:text-2xl">Membangun Masa Depan Berani Bersama.</p>
            <p className="mt-3 max-w-xl leading-relaxed text-white/85">{sekolah.profil}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="bg-[var(--brand-gold)] px-5 py-3 text-sm font-bold text-[var(--brand-navy)] hover:bg-white" href="/about">Kenali Sekolah</Link>
              <Link className="border border-white/80 px-5 py-3 text-sm font-bold text-white hover:bg-white hover:text-[var(--brand-navy)]" href="/berita">Berita Sekolah</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 md:py-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-blue)]">Sambutan</p>
        <h2 className="text-3xl font-black leading-tight text-[var(--brand-navy)] sm:text-4xl">
          Selamat Datang di SMA Negeri 1 Balige
        </h2>
        <p className="mt-5 text-base leading-8 text-[var(--muted)]">
          Selamat datang di website resmi SMA Negeri 1 Balige. Sejak berdiri pada tahun 1950, kami berkomitmen mencetak peserta didik yang berakhlak mulia, berdaya saing dalam IPTEK, berkarakter, dan bermartabat. Melalui website ini, kami berharap informasi kegiatan, prestasi, dan profil sekolah dapat diakses dengan mudah oleh siswa, orang tua, dan masyarakat. Mari bersama-sama mewujudkan The Place Making Big Person.
        </p>
        <p className="mt-6 text-left font-bold text-[var(--brand-navy)]">
          Kepala SMA Negeri 1 Balige
        </p>
      </section>

      <section className="mx-auto grid max-w-screen-xl gap-5 border-b border-slate-200 px-5 py-12 sm:px-8 md:grid-cols-[1fr_2fr] md:py-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-blue)]">Profil Sekolah</p>
          <h2 className="mt-2 text-3xl font-black text-[var(--brand-navy)]">Mengenal SMAN 1 Balige</h2>
        </div>
        <p className="leading-relaxed text-[var(--muted)]">
          SMA Negeri 1 Balige merupakan salah satu Sekolah Menengah Atas Negeri Terakreditasi A (Unggul) yang ada di Provinsi Sumatera Utara, Indonesia, dan merupakan salah satu sekolah menengah atas pertama dan tertua di Soposurung Balige yang didirikan pada tanggal 27 Juli 1950 oleh Bapak Albinus Simanjuntak dari tahun 1950 s/d 1952. Banyak prestasi yang telah diukir siswa siswi yang berasal dari SMA Negeri 1 Balige. Terhitung sejak berdiri, sangat banyak pencapaian yang berhasil diraih, mulai dari tingkat daerah, kabupaten, provinsi, hingga nasional.
        </p>
      </section>

      <section className="mx-auto max-w-screen-xl px-5 py-14 sm:px-8 md:py-20">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-blue)]">Berita terbaru</p>
            <h2 className="text-3xl font-black text-[var(--brand-navy)] sm:text-4xl">Kabar dari kehidupan sekolah.</h2>
          </div>
          <Link className="border-b-2 border-[var(--brand-gold)] pb-1 text-sm font-bold text-[var(--brand-navy)] hover:text-[var(--brand-blue)]" href="/berita">
            Semua Berita
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {daftarBerita.slice(0, 3).map((item) => (
            <BeritaCard key={item.slug} berita={item} />
          ))}
        </div>
      </section>
    </main>
  );
}