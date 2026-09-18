import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Clock, ChevronDown, GraduationCap, BookOpen, Compass, Sparkles, MapPin, HeartHandshake } from "lucide-react";
import { PESANTREN_INFO } from "../data/pesantrenData";

interface NavbarProps {
  onOpenPsbForm: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPsbForm, onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [educationDropdownOpen, setEducationDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "beranda", label: "Beranda" },
    { id: "profil", label: "Profil" },
    // { id: 'pendidikan', label: 'Pendidikan', hasDropdown: true },
    // { id: 'fasilitas', label: 'Fasilitas' },
    // { id: 'galeri', label: 'Galeri Foto & Video' },
    // { id: 'psb', label: 'PSB 2026/2027', highlight: true },
    { id: "kontak", label: "Kontak" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setEducationDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-emerald-900/10" : "bg-[#0F4C3A] text-white py-3.5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity */}
            <div onClick={() => handleNavClick("beranda")} className="flex items-center space-x-3 cursor-pointer group">
              {/* Logo Image */}
              <img src="/logo.png" alt="Logo Al Is'af" className="w-12 h-12 object-contain group-hover:scale-105 transition-transform" />

              <div>
                <div className="flex items-center space-x-1.5">
                  <h1 className={`font-bold text-lg sm:text-xl tracking-tight leading-none ${isScrolled ? "text-[#0F4C3A]" : "text-white"}`}>{PESANTREN_INFO.name}</h1>
                </div>
                {/* <p className={`text-xs mt-0.5 font-medium ${isScrolled ? "text-slate-500" : "text-emerald-200/90"}`}>Salaf, Al-Qur'an(Sukosewu, Bojonegoro)</p> */}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                if (link.hasDropdown) {
                  return (
                    <div key={link.id} className="relative" onMouseEnter={() => setEducationDropdownOpen(true)} onMouseLeave={() => setEducationDropdownOpen(false)}>
                      <button
                        onClick={() => handleNavClick("pendidikan")}
                        className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                          isScrolled
                            ? isActive
                              ? "text-[#0F4C3A] bg-emerald-50"
                              : "text-slate-700 hover:text-[#0F4C3A] hover:bg-slate-50"
                            : isActive
                              ? "text-amber-300 bg-emerald-800/60"
                              : "text-emerald-100 hover:text-white hover:bg-emerald-800/40"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className="w-4 h-4 opacity-70" />
                      </button>

                      {/* Dropdown Menu */}
                      {educationDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2.5 z-50 text-slate-800 animate-fadeIn">
                          <div className="px-3 py-1.5 border-b border-slate-100 text-xs font-semibold text-emerald-800 uppercase tracking-wider">Jenjang Pendidikan</div>
                          <button onClick={() => handleNavClick("pendidikan")} className="w-full text-left px-4 py-2.5 hover:bg-emerald-50 text-xs font-medium flex items-center space-x-2.5 transition-colors">
                            <BookOpen className="w-4 h-4 text-[#0F4C3A]" />
                            <div>
                              <div className="font-semibold text-slate-900">Madrasah Diniyah Ta'miliyah</div>
                              <div className="text-[11px] text-slate-500">Kajian Kitab Kuning Turats</div>
                            </div>
                          </button>
                          <button onClick={() => handleNavClick("pendidikan")} className="w-full text-left px-4 py-2.5 hover:bg-emerald-50 text-xs font-medium flex items-center space-x-2.5 transition-colors">
                            <Sparkles className="w-4 h-4 text-amber-600" />
                            <div>
                              <div className="font-semibold text-slate-900">Program Tahfidzul Qur'an</div>
                              <div className="text-[11px] text-slate-500">Program 30 Juz Bersanad</div>
                            </div>
                          </button>
                          <button onClick={() => handleNavClick("pendidikan")} className="w-full text-left px-4 py-2.5 hover:bg-emerald-50 text-xs font-medium flex items-center space-x-2.5 transition-colors">
                            <GraduationCap className="w-4 h-4 text-emerald-700" />
                            <div>
                              <div className="font-semibold text-slate-900">MTs Al Is'af (Akreditasi A)</div>
                              <div className="text-[11px] text-slate-500">Madrasah Tsanawiyah Formal</div>
                            </div>
                          </button>
                          <button onClick={() => handleNavClick("pendidikan")} className="w-full text-left px-4 py-2.5 hover:bg-emerald-50 text-xs font-medium flex items-center space-x-2.5 transition-colors">
                            <Compass className="w-4 h-4 text-teal-700" />
                            <div>
                              <div className="font-semibold text-slate-900">SMK Al Is'af (Tahap Pembangunan)</div>
                              <div className="text-[11px] text-slate-500">Persiapan Vokasi & Kejuruan</div>
                            </div>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      link.highlight
                        ? "bg-amber-400 text-emerald-950 hover:bg-amber-300 shadow-sm"
                        : isScrolled
                          ? isActive
                            ? "text-[#0F4C3A] bg-emerald-50"
                            : "text-slate-700 hover:text-[#0F4C3A] hover:bg-slate-50"
                          : isActive
                            ? "text-amber-300 bg-emerald-800/60"
                            : "text-emerald-100 hover:text-white hover:bg-emerald-800/40"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Quick Action Button */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={PESANTREN_INFO.psbGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-bold shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 hover:from-amber-300 hover:to-amber-400 border border-amber-300/60"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Daftar PSB</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              {/* <a href={PESANTREN_INFO.psbGoogleFormUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-400 text-emerald-950 shadow-sm block text-center">
                Daftar PSB
              </a> */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 rounded-lg ${isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-emerald-800"}`} aria-label="Menu">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-slate-800 border-t border-slate-200 px-4 pt-3 pb-6 shadow-2xl animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${activeSection === link.id ? "bg-emerald-50 text-[#0F4C3A]" : "text-slate-700 hover:bg-slate-50"}`}
                >
                  <span>{link.label}</span>
                  {link.highlight && <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">Buka</span>}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-100 mt-2 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPsbForm();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-[#0F4C3A] text-amber-200 rounded-xl font-bold text-sm shadow-md"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Formulir PSB 2026/2027</span>
                </button>

                <a
                  href={`https://wa.me/${PESANTREN_INFO.whatsappDigits}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-2.5 border border-emerald-700 text-emerald-800 rounded-xl font-semibold text-xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Chat WhatsApp Panitia PSB</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
