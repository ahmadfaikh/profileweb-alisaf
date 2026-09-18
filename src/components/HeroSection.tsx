import React from "react";
import { GraduationCap, BookOpen, Sparkles, ArrowRight, ShieldCheck, Award } from "lucide-react";
import { PESANTREN_INFO } from "../data/pesantrenData";

interface HeroSectionProps {
  onOpenPsb: () => void;
  onExplore: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPsb, onExplore }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0A3326] via-[#0F4C3A] to-[#0A3326] text-white">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Top ambient glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Arabic Basmalah & Badge */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="pt-2">
            <p className="font-arabic text-2xl sm:text-3xl lg:text-4xl text-amber-200/90 tracking-wider">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">Mengkaji Salaf, Menghafal Al-Qur'an, Membangun Generasi Mandiri</h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mx-auto">Selamat datang di portal resmi Pondok Pesantren Al Is'af</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <a
              href={PESANTREN_INFO.psbGoogleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-emerald-950 font-bold text-base shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Daftar Santri Baru</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onExplore("profil")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-white font-semibold text-base border border-emerald-600/70 flex items-center justify-center space-x-2 transition-all"
            >
              <BookOpen className="w-5 h-5 text-emerald-300" />
              <span>Jelajahi Profil Ma'had</span>
            </button>
          </div>
        </div>

        {/* Feature Highlights Bento Ribbon
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-emerald-900/50 backdrop-blur-sm p-4.5 rounded-2xl border border-emerald-700/50 hover:border-amber-400/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white mb-1">Kajian Turats Salafiyah</h3>
            <p className="text-xs text-emerald-200/80 leading-relaxed">Kajian kitab kuning berjenjang dengan sanad keilmuan mu'taar.</p>
          </div>

          <div className="bg-emerald-900/50 backdrop-blur-sm p-4.5 rounded-2xl border border-emerald-700/50 hover:border-amber-400/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white mb-1">Tahfizhul Qur'an 30 Juz</h3>
            <p className="text-xs text-emerald-200/80 leading-relaxed">Bimbingan talaqqi dan takrir intensif mencetak huffazh mutqin bersanad dengan tartil Al-Jazariyyah.</p>
          </div>

          <div className="bg-emerald-900/50 backdrop-blur-sm p-4.5 rounded-2xl border border-emerald-700/50 hover:border-amber-400/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-blue-400/20 text-blue-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white mb-1">MTs & Pembangunan SMK</h3>
            <p className="text-xs text-emerald-200/80 leading-relaxed">Sekolah formal jenjang MTs terintegrasi nilai kepesantrenan dan saat ini sedang berjalan pembangunan kampus SMK.</p>
          </div>

          <div className="bg-emerald-900/50 backdrop-blur-sm p-4.5 rounded-2xl border border-emerald-700/50 hover:border-amber-400/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-purple-400/20 text-purple-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-white mb-1">Pengasuhan 24 Jam</h3>
            <p className="text-xs text-emerald-200/80 leading-relaxed">Asrama putra dan putri terpisah dengan pendampingan wali kamar, klinik pesantren, dan lingkungan bilingual.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
