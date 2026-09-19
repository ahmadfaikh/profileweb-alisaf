import React from "react";
import { GraduationCap, FileText, CheckCircle2, Calendar, Phone, Sparkles, ExternalLink, HelpCircle } from "lucide-react";
import { PESANTREN_INFO } from "../data/pesantrenData";

interface PsbSectionProps {
  initialProgram?: string;
  isModalFormOpen?: boolean;
  onCloseModalForm?: () => void;
}

export const PsbSection: React.FC<PsbSectionProps> = () => {
  return (
    <section id="psb" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Tahun Ajaran 2026/2027</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Penerimaan Santri Baru</h2>
          <div className="w-20 h-1 bg-[#0F4C3A] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">Mari bergabung bersama keluarga besar Pondok Pesantren Al Is'af.</p>
        </div>

        {/* Alur & Jadwal Pendaftaran */}
        <div className="space-y-12">
          {/* Gelombang Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500/40 relative shadow-sm">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase mb-3">Akan Datang</div>
              <h3 className="font-serif-display text-xl font-bold text-slate-900">Gelombang I (Jalur Prestasi & Reguler)</h3>
              <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-800 mt-2">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span>Periode: -</span>
              </div>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed">Jalur beasiswa tahfizh Qur'an, anak yatim/piatu dhuafa, dan pendaftar berprestasi akademik maupun kitab salaf. Kuota terbatas 150 santri.</p>
            </div>

            <div className="bg-slate-50/70 p-6 sm:p-8 rounded-3xl border border-slate-200 relative">
              <div className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase mb-3">Akan Datang</div>
              <h3 className="font-serif-display text-xl font-bold text-slate-900">Gelombang II (Jalur Reguler Umum)</h3>
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600 mt-2">
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>Periode:-</span>
              </div>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">Pendaftaran reguler ditutup sewaktu-waktu apabila daya tampung asrama santri baru putra dan putri telah terpenuhi.</p>
            </div>
          </div>

          {/* 4 Tahapan PSB */}
          <div>
            <div className="text-center mb-6">
              <h4 className="font-serif-display text-xl font-bold text-slate-900">4 Langkah Mudah Menjadi Santri Al Is'af</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-slate-200/80 relative">
                <div className="w-9 h-9 rounded-xl bg-[#0F4C3A] text-amber-300 flex items-center justify-center font-bold text-sm mb-3">1</div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Pengisian Formulir</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Mengisi formulir pendaftaran daring melalui Google Form resmi atau datang langsung ke sekretariat PSB Al Is'af.</p>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-slate-200/80 relative">
                <div className="w-9 h-9 rounded-xl bg-[#0F4C3A] text-amber-300 flex items-center justify-center font-bold text-sm mb-3">2</div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Tes Pemetaan & Wawancara</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Wawancara siswa, dan wawancara komitmen wali santri.</p>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-slate-200/80 relative">
                <div className="w-9 h-9 rounded-xl bg-[#0F4C3A] text-amber-300 flex items-center justify-center font-bold text-sm mb-3">3</div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Pengumuman Kelulusan</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Pengumuman diumumkan via WhatsApp orang tua/wali setelah tes.</p>
              </div>

              <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-slate-200/80 relative">
                <div className="w-9 h-9 rounded-xl bg-[#0F4C3A] text-amber-300 flex items-center justify-center font-bold text-sm mb-3">4</div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Daftar Ulang & Masuk Asrama</h4>
                <p className="text-xs text-slate-600 leading-relaxed">Penyelesaian administrasi, pengambilan seragam dan paket kitab, serta penempatan kamar asrama santri.</p>
              </div>
            </div>
          </div>

          {/* Berkas Persyaratan */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
            <h4 className="font-bold text-base text-slate-900 mb-4 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-[#0F4C3A]" />
              <span>Dokumen Persyaratan Administrasi yang Disiapkan:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-700">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Fotokopi Kartu Keluarga (KK) 4 Lembar</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Fotokopi Akta Kelahiran 4 Lembar</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Fotokopi Ijazah Terakhir / SKL dilegalisir</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Pas Foto 3x4 Santri (Background Merah/Biru) 4 Lembar</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Fotokopi KTP Kedua Orang Tua / Wali</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Mengikuti Wawancara</span>
              </div>
            </div>
          </div>

          {/* CTA Button directing to Google Form */}
          <div className="text-center pt-4 pb-2 space-y-3">
            <a
              id="btn-google-form-psb"
              href={PESANTREN_INFO.psbGoogleFormUrl || "https://docs.google.com/forms"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-[#0F4C3A] hover:bg-[#0a3326] text-amber-300 hover:text-amber-200 font-bold text-base sm:text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-amber-400/40"
            >
              <GraduationCap className="w-5 h-5 text-amber-300" />
              <span>Isi Formulir Pendaftaran Sekarang</span>
              <ExternalLink className="w-4 h-4 text-amber-300/80" />
            </a>
            <p className="text-xs text-slate-500">Pendaftaran santri baru dilakukan secara resmi melalui Google Form Pondok Pesantren Al Is'af.</p>
          </div>

          {/* Bantuan & Kontak Panitia PSB */}
          <div className="mt-8 bg-amber-50/60 p-5 rounded-2xl border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-950">
            <div className="flex items-center space-x-3 text-center sm:text-left">
              <div className="w-9 h-9 rounded-full bg-amber-200/80 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-amber-800" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Butuh Bantuan Pendaftaran?</div>
                <div className="text-slate-600">WhatsApp: {PESANTREN_INFO.whatsapp}</div>
              </div>
            </div>
            <a
              href={`https://wa.me/${PESANTREN_INFO.whatsappDigits}?text=${encodeURIComponent("Assalamu'alaikum Panitia PSB Al Is'af, saya ingin menanyakan informasi pendaftaran santri baru.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold flex items-center space-x-1.5 flex-shrink-0 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Konsultasi WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
