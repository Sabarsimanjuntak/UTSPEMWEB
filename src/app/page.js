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

      <section className="mx-auto max-w-screen-xl px-5 py-12 sm:px-8 md:py-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-blue)]">KATA SAMBUTAN</p>
        <h2 className="mb-7 text-3xl font-black leading-tight text-[var(--brand-navy)] sm:text-4xl">
          Sambutan Kepala Sekolah
        </h2>
        <div className="grid items-start gap-8 md:grid-cols-[300px_minmax(0,1fr)] md:gap-10">
          <div className="relative aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-md">
            <Image
              src="/kepala-sekolah.png"
              alt="Kepala SMA Negeri 1 Balige"
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover object-top"
            />
          </div>
          <div className="space-y-4 text-base leading-8 text-[var(--muted)]">
            <p>
              Puji syukur kita panjatkan kepada Tuhan Yang Maha Esa atas berkat dan penyertaan-Nya sehingga website resmi SMA Negeri 1 Balige ini dapat hadir sebagai sarana informasi bagi seluruh warga sekolah, orang tua, dan masyarakat.
            </p>
            <p>
              SMA Negeri 1 Balige telah berdiri sejak tahun 1950 dan terus berkomitmen mewujudkan peserta didik yang berakhlak mulia, berdaya saing dalam IPTEK, berkarakter, dan bermartabat. Melalui website ini, kami ingin menyajikan informasi kegiatan, prestasi, dan profil sekolah secara terbuka dan mudah diakses.
            </p>
            <p>
              Kepada seluruh siswa, saya berpesan agar terus rajin belajar, menjunjung disiplin, dan menjaga akhlak di mana pun berada. Kepada para guru dan pegawai, terima kasih atas dedikasi dan kerja samanya dalam mendidik generasi penerus bangsa.
            </p>
            <p>
              Mari bersama-sama kita wujudkan SMA Negeri 1 Balige sebagai The Place Making Big Person.
            </p>
            <div className="pt-2 text-left text-[var(--brand-navy)]">
              <p className="font-bold">Aldon Samosir, S.Pd.</p>
              <p>Kepala Sekolah</p>
            </div>
          </div>
        </div>
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