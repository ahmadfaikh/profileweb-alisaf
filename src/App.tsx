import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SambutanPengasuh } from "./components/SambutanPengasuh";
import { ProfilSejarahVisi } from "./components/ProfilSejarahVisi";
import { ProgramPendidikan } from "./components/ProgramPendidikan";
import { FasilitasSection } from "./components/FasilitasSection";
import { GaleriMedia } from "./components/GaleriMedia";
import { PsbSection } from "./components/PsbSection";
import { PrestasiGaleri } from "./components/PrestasiGaleri";
import { BeritaAgenda } from "./components/BeritaAgenda";
import { KontakWakafFooter } from "./components/KontakWakafFooter";
import { ArrowUp, MessageCircle, GraduationCap } from "lucide-react";
import { PESANTREN_INFO } from "./data/pesantrenData";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("beranda");
  const [selectedPsbProgram, setSelectedPsbProgram] = useState<string>("mts");
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Monitor scroll for back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === "beranda") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenPsb = (programId?: string) => {
    if (programId) {
      setSelectedPsbProgram(programId);
    }
    scrollToSection("psb");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 relative">
      {/* Navbar with Prayer Time & Branding */}
      <Navbar onOpenPsbForm={() => handleOpenPsb()} onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="beranda" className="flex-1">
        {/* 1. Hero Section with Calligraphy & Key Metrics */}
        <HeroSection onOpenPsb={() => handleOpenPsb()} onExplore={scrollToSection} />

        {/* 2. Sambutan Khodimul Ma'had & Panca Jiwa Pesantren */}
        <SambutanPengasuh />

        {/* 3. Profil, Sejarah & Visi Misi */}
        <ProfilSejarahVisi />

        {/* 4. Jenjang & Unit Pendidikan (Salafiyah, Tahfizh, MTs, SMK) */}
        <ProgramPendidikan onSelectProgramForPsb={(progId) => handleOpenPsb(progId)} />

        {/* 5. Fasilitas & Sarana Prasarana Asrama */}
        <FasilitasSection />

        {/* 8. Galeri Foto & Video Kegiatan, Fasilitas & Acara Penting */}
        <GaleriMedia />

        {/* 9. PSB (Penerimaan Santri Baru) 2026/2027: Alur, Kalkulator Biaya & Form Pendaftaran */}
        <PsbSection initialProgram={selectedPsbProgram} />

        {/* 10. Prestasi Santri Al Is'af */}
        <PrestasiGaleri />

        {/* 9. Warta Pesantren & Berita */}
        {/* <BeritaAgenda /> */}
      </main>

      {/* 11. Kontak, Peta Lokasi, Rekening Wakaf Resmi & Footer */}
      <KontakWakafFooter onNavigate={scrollToSection} onOpenPsb={() => handleOpenPsb()} />

      {/* Floating Action Buttons (WhatsApp Call Center & Scroll to Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        {/* WhatsApp Quick Consultation */}
        <a
          href={`https://wa.me/${PESANTREN_INFO.whatsappDigits}?text=Assalamu%27alaikum%20Humas%20Pondok%20Pesantren%20Al%20Is%27af.%20Saya%20ingin%20berkonsultasi%20mengenai%20penerimaan%20santri%20baru.`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xl transition-all transform hover:scale-105 active:scale-95 border-2 border-white/40"
          title="Konsultasi WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span className="hidden sm:inline">Tanya Panitia PSB</span>
        </a>

        {/* Quick PSB Floating Pill on Mobile */}
        <a href={PESANTREN_INFO.psbGoogleFormUrl} target="_blank" rel="noopener noreferrer" className="sm:hidden flex items-center space-x-1.5 px-4 py-2 rounded-full bg-amber-400 text-emerald-950 font-bold text-xs shadow-xl border border-amber-300">
          <GraduationCap className="w-4 h-4" />
          <span>Daftar PSB</span>
        </a>

        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#0F4C3A] text-amber-300 flex items-center justify-center shadow-lg hover:bg-emerald-950 transition-all transform hover:scale-110 active:scale-90 border border-amber-400/40"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
