import React from "react";
import { Quote } from "lucide-react";
import { PESANTREN_INFO } from "../data/pesantrenData";

export const SambutanPengasuh: React.FC = () => {
  return (
    <section id="profil" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0F4C3A] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Kalimatul Iftitah</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Pengasuh Pondok Pesantren</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">Menempa tunas-tunas bangsa menjadi insan berilmu amaliah, beramal ilmiah, dan berakhlakul karimah dalam bingkai Ahlussunnah wal Jama'ah.</p>
        </div>

        {/* Khodimul Ma'had Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Kyai Portrait Frame */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative">
                {/* Decorative Frame */}
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-gradient-to-tr from-[#0F4C3A] to-amber-500 p-1.5 shadow-xl">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-100 relative">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                      alt="Pengasuh Pondok Pesantren Al Is'af"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Badge Overlay */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1 rounded-full bg-amber-500 text-slate-950 font-bold text-xs shadow-md border border-amber-300">Khodimul Ma'had</div>
              </div>

              <div className="mt-6">
                <h3 className="font-serif-display text-xl font-bold text-slate-900">{PESANTREN_INFO.currentLeader}</h3>
                <p className="text-xs text-emerald-800 font-semibold mt-0.5">Pendiri & Pengasuh Pondok Pesantren Al Is'af</p>
                <p className="text-[11px] text-slate-500 mt-1">Ds. Sidodadi, Kec. Sukosewu, Kab. Bojonegoro</p>
              </div>
            </div>

            {/* Speech Text Content */}
            <div className="lg:col-span-8 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="flex items-center space-x-2 text-amber-600 mb-2">
                <Quote className="w-8 h-8 opacity-70 rotate-180 text-amber-500" />
                <span className="font-arabic text-xl sm:text-2xl text-emerald-900">السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُه</span>
              </div>

              <p className="italic text-emerald-950 font-medium bg-emerald-50/70 p-4 rounded-xl border-l-4 border-[#0F4C3A]">
                “مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ”
                <br />
                <span className="text-xs text-slate-600 font-normal not-italic block mt-1">"Barangsiapa menempuh suatu jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga." (HR. Muslim)</span>
              </p>

              <p className="md:text-justify">
                Segala puji bagi Allah SWT, Rabb semesta alam, yang telah menganugerahkan taufiq dan hidayah-Nya. Shalawat dan salam semoga senantiasa tercurah kepada junjungan kita Nabi Agung Muhammad SAW, keluarga, sahabat, dan para ulama
                pewaris para nabi.
              </p>

              <p className="md:text-justify">
                Pondok Pesantren Al Is'af yang berpusat di Desa Sidodadi, Kecamatan Sukosewu, Kabupaten Bojonegoro, Jawa Timur, didirikan pada tahun 2017 dengan fokus utama pada bidang keilmuan Salaf (kajian kitab kuning turats) dan
                Al-Qur'an. Kami berikhtiar mencetak generasi penerus yang kokoh dalam akidah, hafal dan mentadabburi ayat suci Al-Qur'an, serta berakhlakul karimah.
              </p>

              <p className="md:text-justify">
                Seiring berjalannya waktu dan amanah masyarakat, pesantren kami terus berkembang dengan menyertakan sekolah formal jenjang Madrasah Tsanawiyah (MTs). Alhamdulillah, saat ini kami juga sedang berjalan pembangunan gedung
                sekolah menengah kejuruan (SMK) guna membekali para santri dengan kecakapan vokasi praktis, teknologi, dan kemandirian hidup tanpa menanggalkan identitas santri salaf.
              </p>

              <p className="md:text-justify">
                Pesantren adalah kawah candradimuka pembentukan watak (tarbiyatul akhlak). Selama 24 jam sehari, santri kami bimbing dalam kebersamaan, sholat berjamaah lima waktu, pengajian kitab, hafalan Qur'an, dan pembiasaan hidup
                bersahaja.
              </p>

              <p className="font-medium text-slate-800 ">
                Kami menyambut dengan tangan terbuka dan hati yang ikhlas kehadiran putra-putri kaum muslimin untuk bertafaqquh fiddin di Pondok Pesantren Al Is'af Bojonegoro tercinta ini. Semoga Allah SWT senantiasa meridhai langkah kita
                bersama. Amin Ya Rabbal 'Alamin.
              </p>

              <div className="pt-2 text-right">
                <p className="font-arabic text-lg text-emerald-900">وَالسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُه</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
