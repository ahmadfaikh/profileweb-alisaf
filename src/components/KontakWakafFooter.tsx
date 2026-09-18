import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, HeartHandshake, Copy, Check, ExternalLink, ChevronRight, ShieldCheck, Send } from "lucide-react";
import { PESANTREN_INFO } from "../data/pesantrenData";

interface KontakWakafFooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPsb: () => void;
}

export const KontakWakafFooter: React.FC<KontakWakafFooterProps> = ({ onNavigate, onOpenPsb }) => {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const copyToClipboard = (accountNo: string, bankName: string) => {
    navigator.clipboard.writeText(accountNo);
    setCopiedBank(bankName);
    setTimeout(() => setCopiedBank(null), 2500);
  };

  return (
    <footer id="kontak" className="bg-[#08281e] text-white">
      {/* SECTION 1: WAKAF & INFAQ PENGEMBANGAN ASRAMA */}
      <div className="border-b border-emerald-900/60 bg-[#0A3326]/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-950 via-[#0F4C3A] to-emerald-950 rounded-3xl p-8 sm:p-12 border border-emerald-700/60 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-300/30">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Amal Jariyah Tanpa Putus</span>
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">Wakaf Pembangunan Gedung SMK Al Is'af & Sarana Pesantren</h3>

                <p className="text-emerald-100/90 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Salurkan infaq dan wakaf terbaik Anda untuk mendukung percepatan pembangunan gedung sekolah menengah kejuruan (SMK) Al Is'af serta sarana santri penghafal Al-Qur'an dan pengkaji kitab salaf di Desa Sidodadi, Kec. Sukosewu,
                  Bojonegoro.
                </p>

                <p className="italic text-amber-200/80 text-xs font-arabic text-right sm:text-left">
                  “إِذَا مَاتَ ابْنُ آدَمَ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ: صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ”
                </p>
              </div>

              {/* Bank Accounts Card */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300">Rekening Resmi Yayasan Al Is'af:</div>

                {/* Account 1: BSI */}
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Bank Syariah Indonesia (BSI)</div>
                    <div className="font-mono text-sm sm:text-base font-bold text-amber-300 tracking-wider">7124116761</div>
                    <div className="text-[11px] text-emerald-200">a.n. Masjid PP Al Is'af Bojonegoro</div>
                  </div>
                  <button onClick={() => copyToClipboard("7124116761", "BSI")} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" title="Salin Nomor Rekening">
                    {copiedBank === "BSI" ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Account 2: BRI */}
                <div className="bg-white/10 p-3.5 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Bank Rakyat Indonesia (BRI)</div>
                    <div className="font-mono text-sm sm:text-base font-bold text-amber-300 tracking-wider">001101004101568</div>
                    <div className="text-[11px] text-emerald-200">a.n. Pondok Pesantren Al Is'af</div>
                  </div>
                  <button onClick={() => copyToClipboard("001101004101568", "BRI")} className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" title="Salin Nomor Rekening">
                    {copiedBank === "BRI" ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {copiedBank && <div className="text-center text-[11px] text-emerald-300 font-medium">Nomor rekening {copiedBank} berhasil disalin ke clipboard!</div>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: KONTAK & LOKASI DETAIL */}
      <div className="py-16 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Sekretariat Pesantren</span>
                <h3 className="font-serif-display text-2xl font-bold text-white mt-1">Pusat Layanan Informasi & PSB</h3>
                <p className="text-xs sm:text-sm text-emerald-200/80 mt-2 leading-relaxed">Kami menyambut silaturrahmi wali santri dan tamu ma'had pada jam operasional kantor kesekretariatan.</p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-emerald-100">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Alamat Lengkap:</strong>
                    <span>{PESANTREN_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Telepon Kantor & WhatsApp Panitia:</strong>
                    <span>{PESANTREN_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Surat Elektronik (Email):</strong>
                    <span>{PESANTREN_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Jam Layanan Kantor:</strong>
                    <span>Senin – Sabtu: 08.00 – 16.00 WIB (Ahad Libur)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${PESANTREN_INFO.whatsappDigits}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-400 text-emerald-950 font-bold text-xs shadow-md hover:bg-amber-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hubungi via WhatsApp Panitia</span>
                </a>
              </div>
            </div>

            {/* Google Map Interactive View (7 cols) */}
            <div className="lg:col-span-7 bg-[#061d15] rounded-3xl p-3 border border-emerald-800/80 shadow-inner flex flex-col">
              <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-emerald-950">
                <iframe
                  title="Peta Lokasi Pondok Pesantren Al Is'af Ds. Sidodadi, Sukosewu, Bojonegoro"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2364221861517!2d111.92264591018973!3d-7.213849492761822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7781acb99df667%3A0x68db66d8427dc276!2sMasjid%20Pondok%20Pesantren%20Al%20Is'af%20Sidodadi!5e0!3m2!1sid!2sid!4v1789723607674!5m2!1sid!2sid"
                  className="w-full h-full border-0 filter saturate-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-emerald-300 gap-2">
                <span>Koordinat: Ds. Sidodadi, Kec. Sukosewu, Kab. Bojonegoro, Jawa Timur</span>
                <a href="https://maps.app.goo.gl/M5yAFPNb8jVpYXfV6" target="_blank" rel="noreferrer" className="text-amber-400 hover:text-amber-300 font-semibold flex items-center space-x-1">
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: FOOTER SITEMAP & LEGAL */}
      <div className="py-14 text-xs text-emerald-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Identity */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                {/* <div className="w-10 h-10 rounded-xl bg-amber-400 p-0.5">
                  <div className="w-full h-full bg-[#0F4C3A] rounded-[9px] flex items-center justify-center font-arabic text-lg font-bold text-amber-300">إسعاف</div>
                </div> */}
                <div>
                  <h4 className="font-bold text-sm text-white">{PESANTREN_INFO.name}</h4>
                  <p className="text-[11px] text-emerald-400">Sukosewu, Bojonegoro - Jawa Timur</p>
                </div>
              </div>

              <p className="text-emerald-200/70 text-xs leading-relaxed">Mencetak generasi santri tafaqquh fiddin, penghafal Al-Qur'an 30 Juz, berakhlak mulia, dan siap memimpin ummat di era global.</p>

              {/* <div className="text-[11px] text-amber-300/90 pt-1">
                Nomor Statistik Pondok Pesantren (NSPP): <strong>{PESANTREN_INFO.nspp}</strong>
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-bold text-xs uppercase tracking-wider text-white mb-3">Navigasi Cepat</h5>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => onNavigate("beranda")} className="hover:text-amber-300 transition-colors">
                    Beranda Utama
                  </button>
                </li>
                {/* <li>
                  <button onClick={() => onNavigate("profil")} className="hover:text-amber-300 transition-colors">
                    Profil, Sejarah & Panca Jiwa
                  </button>
                </li> */}
                <li>
                  <button onClick={() => onNavigate("pendidikan")} className="hover:text-amber-300 transition-colors">
                    Jenjang & Unit Pendidikan
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("fasilitas")} className="hover:text-amber-300 transition-colors">
                    Fasilitas & Kompleks Asrama
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("galeri")} className="hover:text-amber-300 transition-colors">
                    Galeri Foto & Video
                  </button>
                </li>
              </ul>
            </div>

            {/* Unit Pendidikan */}
            <div>
              <h5 className="font-bold text-xs uppercase tracking-wider text-white mb-3">Satuan Pendidikan</h5>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => onNavigate("pendidikan")} className="hover:text-amber-300 transition-colors">
                    Madrasah Diniyah Ta'miliyah (Kitab Kuning)
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("pendidikan")} className="hover:text-amber-300 transition-colors">
                    MTs Al-Roudloh (Madrasah Formal)
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate("pendidikan")} className="hover:text-amber-300 transition-colors">
                    MA Ibnu Hajar
                  </button>
                </li>
              </ul>
            </div>

            {/* Penerimaan Santri Baru */}
            <div>
              <h5 className="font-bold text-xs uppercase tracking-wider text-white mb-3">Layanan Calon Santri</h5>
              <p className="text-xs text-emerald-200/70 mb-3">Pendaftaran santri baru dibuka setiap tahun ajaran. Layanan konsultasi dan simulasi biaya tersedia secara daring.</p>
              <button onClick={onOpenPsb} className="w-full py-2.5 rounded-xl bg-amber-400 text-emerald-950 font-bold text-xs shadow-md hover:bg-amber-300 transition-all text-center block">
                Pendaftaran PSB 2026/2027
              </button>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-emerald-400/80 gap-3">
            <div>
              &copy; {new Date().getFullYear()} {PESANTREN_INFO.name}. Hak Cipta Dilindungi Undang-Undang.
            </div>
            {/* <div className="flex items-center space-x-4">
              <span>Bermartabat, Beradab, Berwawasan Peradaban</span>
              <span>•</span>
              <span className="font-arabic text-amber-300">مَعْهَدُ الْإِسْعَافِ الإِسْلَامِيّ</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
