import Image from "next/image";
import { sekolah } from "@/data/sekolah";

export default function AboutPage() {
  const misi = sekolah.misi.length > 0
    ? sekolah.misi
    : ["Butir misi pertama", "Butir misi kedua", "Butir misi ketiga"];

  return (
    <main className="bg-white">
      <section className="relative isolate flex min-h-[450px] items-center overflow-hidden bg-[var(--brand-navy)] md:min-h-[500px]">
        <Image
          src="/tentang.jpg"
          alt="Suasana sekolah SMA Negeri 1 Balige"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#10134f]/60" />
        <div className="relative mx-auto w-full max-w-screen-2xl px-5 py-16 sm:px-8">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl font-black sm:text-5xl md:text-6xl">Tentang SMA Negeri 1 Balige</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/90 sm:text-xl">
              Berdiri sejak 1950 di Jl. Kartini Soposurung, Balige.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[var(--brand-blue)]">TENTANG KAMI</p>
        <h2 className="mb-5 text-3xl font-black text-[var(--brand-navy)]">Profil Sekolah</h2>
        <p className="leading-relaxed text-[var(--muted)]">
          SMA Negeri 1 Balige merupakan salah satu Sekolah Menengah Atas Negeri Terakreditasi A (Unggul) yang ada di Provinsi Sumatera Utara, Indonesia, dan merupakan salah satu sekolah menengah atas pertama dan tertua di Soposurung Balige yang didirikan pada tanggal 27 Juli 1950 oleh Bapak Albinus Simanjuntak dari tahun 1950 s/d 1952. Banyak prestasi yang telah diukir siswa siswi yang berasal dari SMA Negeri 1 Balige. Terhitung sejak berdiri, sangat banyak pencapaian yang berhasil diraih, mulai dari tingkat daerah, kabupaten, provinsi, hingga nasional.
        </p>
      </section>

      <div className="mx-auto max-w-screen-xl px-5 pb-12 sm:px-8">
        <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
        <section className="border-t-4 border-[var(--brand-gold)] bg-white md:col-span-2">
          <h2 className="px-5 pt-5 text-xl font-bold text-[var(--brand-navy)]">Sejarah Singkat</h2>
          <div className="space-y-4 px-5 pb-5 pt-3 leading-relaxed text-[var(--muted)]">
            {sekolah.sejarah.map((paragraf, index) => (
              <p key={`sejarah-${index}`}>{paragraf}</p>
            ))}
          </div>
        </section>
        <section className="border-t-4 border-[var(--brand-blue)] bg-white">
          <h2 className="px-5 pt-5 text-xl font-bold text-[var(--brand-navy)]">Visi</h2>
          <p className="min-h-36 px-5 pb-5 pt-3 text-lg italic leading-relaxed text-[var(--brand-navy)]">
            {sekolah.visi}
          </p>
        </section>
        <section className="border-t-4 border-[var(--brand-gold)] bg-white md:col-span-2">
          <h2 className="px-5 pt-5 text-xl font-bold text-[var(--brand-navy)]">Misi</h2>
          <p className="px-5 pt-3 leading-relaxed text-[var(--muted)]">{sekolah.pengantarMisi}</p>
          <ol className="list-decimal space-y-4 px-5 pb-5 pl-10 pt-4 leading-relaxed text-[var(--muted)] marker:text-[var(--brand-blue)]">
            {misi.map((butir, index) => (
              <li className="pl-2" key={`${index}-${butir}`}>{butir}</li>
            ))}
          </ol>
        </section>
        <section className="border-t-4 border-[var(--brand-blue)] bg-white md:col-span-2">
          <h2 className="px-5 pt-5 text-xl font-bold text-[var(--brand-navy)]">Alamat</h2>
          <p className="px-5 pb-5 pt-3 leading-relaxed text-[var(--muted)]">{sekolah.alamat}</p>
        </section>
        </div>
      </div>
    </main>
  );
}