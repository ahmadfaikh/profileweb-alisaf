import React from "react";
import { Target, Eye, Compass, History, BookMarked, CheckCircle2, Award, Calendar } from "lucide-react";
import { PESANTREN_INFO } from "../data/pesantrenData";

export const ProfilSejarahVisi: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Mengenal Lembaga</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Sejarah, Visi & Misi Pesantren</h2>
          <div className="w-20 h-1 bg-[#0F4C3A] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">Berdiri sejak 2017 di Bojonegoro, istiqamah membina generasi robbani dalam bidang salaf dan Al-Qur'an, menaungi MTs formal, serta pembangunan SMK.</p>
        </div>

        {/* Sejarah & Pendirian */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-6 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="flex items-center space-x-2 text-[#0F4C3A]">
              <History className="w-5 h-5 text-amber-600" />
              <span className="font-bold text-xs uppercase tracking-widest text-emerald-900">Sejarah Berdiri (Tahun {PESANTREN_INFO.foundedYear})</span>
            </div>

            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight text-justify">Berdiri Tahun 2017: Menjaga Ruh Salaf & Al-Qur'an</h3>

            <p className="text-justify">
              Pondok Pesantren Al Is'af lahir dari sebuah amanah, perjuangan, dan cita-cita untuk menghadirkan lembaga pendidikan Islam yang menjadi tempat tumbuhnya generasi yang berilmu, berakhlakul karimah, terampil, serta dekat dengan
              Al-Qur'an.{" "}
            </p>

            <p className="text-justify">
              Pondok Pesantren Al Is'af didirikan oleh Kyai Moh. Agus Mujahidin atas perintah guru beliau, KH. M. Ihya' Ulumiddin, pengasuh Pondok Pesantren Nurul Haromain Pujon, Malang. Beliau merupakan salah satu santri kesayangan Abuya
              Sayyid Muhammad bin Alawi Al-Maliki Al-Hasani, seorang ulama besar dari Makkah Al-Mukarramah. Amanah dan nasihat sang guru inilah yang kemudian menjadi salah satu tonggak awal berdirinya Pondok Pesantren Al Is'af.{" "}
            </p>

            <p className="text-justify">
              <strong>Awal Perintisan</strong>
            </p>
            <p className="text-justify">
              Perjalanan Pondok Pesantren Al Is'af mulai dirintis pada tahun 2017. Pada masa awal tersebut, perjuangan dimulai dari sesuatu yang sederhana, yaitu membangun sebuah masjid yang kemudian diberi nama Masjid Al Is'ad.
            </p>
            <p className="text-justify">
              Nama Al Is'ad memiliki makna kebahagiaan. Nama tersebut dipilih dengan sebuah harapan dan doa agar masjid itu menjadi tempat yang menghadirkan kebahagiaan, ketenteraman, keberkahan, dan kedekatan kepada Allah SWT bagi siapa
              saja yang datang, beribadah, belajar, dan berkumpul di dalamnya.....
            </p>

            {/* Quick Milestones Mini Banner */}
            {/* <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-100 text-center">
                <span className="block font-bold text-emerald-900 text-sm">2017</span>
                <span className="text-[11px] text-slate-600">Berdiri Pondok Salaf & Qur'an</span>
              </div>
              <div className="bg-amber-50/80 p-3 rounded-xl border border-amber-100 text-center">
                <span className="block font-bold text-amber-900 text-sm">MTs Formal</span>
                <span className="text-[11px] text-slate-600">Madrasah Terpadu</span>
              </div>
              <div className="bg-blue-50/80 p-3 rounded-xl border border-blue-100 text-center">
                <span className="block font-bold text-blue-900 text-sm">Saat Ini</span>
                <span className="text-[11px] text-slate-600">MA</span>
              </div>
            </div> */}
          </div>

          {/* Photo Collage & Cultural Image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="/ponpes.webp" alt="Suasana Santri Mengaji di Pondok Pesantren Al Is'af Bojonegoro" className="w-full h-80 sm:h-96 object-cover" referrerPolicy="no-referrer" />
            </div>

            {/* Floating Info Pill */}
            {/* <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0F4C3A] flex items-center justify-center font-bold text-sm">2017</div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Ds. Sidodadi, Sukosewu</div>
                  <div className="text-[11px] text-slate-500">Kab. Bojonegoro, Jawa Timur</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Visi & Misi Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Visi Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F4C3A] to-[#082C21] text-white p-7 sm:p-9 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-300/30">
                <Eye className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-amber-300">Visi Pesantren</span>
                <h3 className="font-serif-display text-2xl sm:text-3xl  mt-1 text-white leading-tight">
                  Menjadikan Pondok Pesantren Al Is'af sebagai lembaga sosial, pendidikan, dan dakwah yang unggul dalam mencetak generasi Qur’ani yang religius, berilmu, terampil, mandiri, serta berakhlakul karimah
                </h3>
              </div>

              <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed">_</p>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-emerald-800/80 flex items-center justify-between text-xs text-emerald-200">
              <span className="font-arabic text-sm">مَعْهَدُ الْإِسْعَافِ</span>
              <span className="font-medium">Ahlussunnah wal Jama'ah</span>
            </div>

            {/* Geometric Accent Circle */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-emerald-700/20 blur-2xl pointer-events-none"></div>
          </div>

          {/* Misi Card */}
          <div className="lg:col-span-7 bg-[#F8FAF8] border border-emerald-900/10 p-7 sm:p-9 rounded-3xl shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-[#0F4C3A] mb-2">
                <Target className="w-6 h-6 text-amber-600" />
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-900">Misi Utama Lembaga</span>
              </div>

              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-slate-900 mb-4">Pilar Langkah Strategis Al Is'af</h3>

              <div className="space-y-3.5">
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Menyelenggarakan pendidikan keagamaan yang berlandaskan Al-Qur’an dan Sunnah untuk membentuk generasi Qur’ani yang beriman, bertakwa, dan berakhlakul karimah.</p>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Menanamkan nilai-nilai keislaman dan akhlakul karimah dalam kehidupan santri melalui pembiasaan ibadah, keteladanan, kedisiplinan, dan kepedulian terhadap sesama.</p>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Mengembangkan potensi, keterampilan, dan kemandirian santri agar mampu menghadapi perkembangan zaman serta memberikan manfaat bagi masyarakat.</p>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Menyelenggarakan kegiatan dakwah yang edukatif dan membangun sebagai sarana menyebarkan nilai-nilai Islam yang rahmatan lil ‘alamin.</p>
                </div>

                {/* <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>_ </p>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>_ </p>
                </div> */}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span>_</span>
              <span className="text-emerald-800 font-semibold">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
