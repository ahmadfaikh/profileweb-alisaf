import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  X, 
  UserCheck, 
  Clock, 
  School
} from 'lucide-react';
import { EDUCATORS } from '../data/pesantrenData';
import { Educator } from '../types/pesantren';

export const ProfilPendidik: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEducator, setSelectedEducator] = useState<Educator | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Dewan Guru' },
    { id: 'masyayikh', label: 'Masyayikh & Pengasuh' },
    { id: 'diniyah', label: 'Asatidz Kitab Kuning' },
    { id: 'tahfizh', label: 'Asatidz Tahfizhul Qur\'an' },
    { id: 'formal', label: 'Pendidik Formal (MTs & SMK)' },
    { id: 'asatidzah', label: 'Asatidzah Keputrian' },
  ];

  const filteredEducators = EDUCATORS.filter((edu) => {
    const matchesCategory = activeCategory === 'all' || edu.category === activeCategory;
    const matchesSearch = 
      edu.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      edu.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      edu.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (edu.taughtSubjects && edu.taughtSubjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="pendidik" className="py-20 bg-[#FDFBF7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#0F4C3A] border border-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Masyayikh & Dewan Asatidz</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Profil Pendidik & Pengasuh Al Is'af
          </h2>
          <div className="w-20 h-1 bg-[#0F4C3A] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Dipimpin oleh para ulama, huffazh bersanad, dan akademisi berintegritas tinggi yang mendedikasikan ilmu, adab, dan keteladanan bagi generasi santri.
          </p>
        </div>

        {/* Highlights / Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs text-center">
            <div className="text-2xl font-bold text-[#0F4C3A] font-mono">74+</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Dewan Asatidz & Guru</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs text-center">
            <div className="text-2xl font-bold text-amber-600 font-mono">100%</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Sanad Muttashil & Sah</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs text-center">
            <div className="text-2xl font-bold text-emerald-700 font-mono">15+</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Lulusan Timur Tengah & Ma'had Aly</div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs text-center">
            <div className="text-2xl font-bold text-indigo-700 font-mono">24 Jam</div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">Keteladanan Mukim di Asrama</div>
          </div>
        </div>

        {/* Controls: Search & Category Pills */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0F4C3A] text-amber-300 shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama atau keahlian..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent placeholder:text-slate-400"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Educators Grid */}
        {filteredEducators.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <UserCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h4 className="font-bold text-slate-800 text-base">Tidak ditemukan pendidik yang cocok</h4>
            <p className="text-xs text-slate-500 mt-1">Silakan coba kata kunci pencarian lain atau pilih kategori Semua.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-[#0F4C3A] text-amber-300 rounded-xl text-xs font-bold"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEducators.map((edu) => (
              <div
                key={edu.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header & Photo */}
                  <div className="p-6 pb-4 flex items-start space-x-4 border-b border-slate-100">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-emerald-950 flex-shrink-0 border-2 border-amber-300/60 shadow-sm">
                      <img
                        src={edu.photo}
                        alt={edu.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>

                    <div className="space-y-1 flex-1 min-w-0">
                      {edu.arabicTitle && (
                        <span className="font-arabic text-xs text-emerald-800 font-semibold block leading-tight truncate">
                          {edu.arabicTitle}
                        </span>
                      )}
                      <h3 className="font-bold text-base text-slate-900 leading-snug group-hover:text-[#0F4C3A] transition-colors">
                        {edu.name}
                      </h3>
                      <p className="text-xs font-semibold text-amber-700 line-clamp-1">
                        {edu.role}
                      </p>
                      <div className="text-[11px] text-slate-500 flex items-center space-x-1 pt-0.5">
                        <School className="w-3 h-3 text-slate-400 flex-shrink-0" />
                        <span className="truncate">{edu.education}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body: Expertise & Bio */}
                  <div className="p-6 space-y-4">
                    
                    {/* Bidang Keahlian */}
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Bidang Keahlian & Sanad:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.expertise.map((exp, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200 text-[11px] font-medium"
                          >
                            {exp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Biografi Singkat */}
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Biografi Singkat:
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {edu.bio}
                      </p>
                    </div>

                    {/* Taught subjects / Kitab yang diampu */}
                    {edu.taughtSubjects && (
                      <div className="pt-2 border-t border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1.5">
                          Kajian Kitab / Mata Pelajaran:
                        </span>
                        <div className="flex flex-wrap gap-1 text-[11px] text-slate-700">
                          {edu.taughtSubjects.slice(0, 3).map((sub, sIdx) => (
                            <span key={sIdx} className="bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                              {sub}
                            </span>
                          ))}
                          {edu.taughtSubjects.length > 3 && (
                            <span className="text-slate-400 text-[10px] self-center">
                              +{edu.taughtSubjects.length - 3} lainnya
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    Pengalaman: <strong>{edu.experienceYears} Tahun</strong>
                  </span>
                  <button
                    onClick={() => setSelectedEducator(edu)}
                    className="text-xs font-bold text-[#0F4C3A] hover:text-amber-700 transition-colors flex items-center space-x-1"
                  >
                    <span>Lihat Biodata Lengkap</span>
                    <span>&rarr;</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Modal: Biodata Lengkap Pendidik */}
        {selectedEducator && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col">
              
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-[#0F4C3A] via-[#0b3c2e] to-[#0F4C3A] p-6 text-white flex-shrink-0">
                <button
                  onClick={() => setSelectedEducator(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-300 shadow-md flex-shrink-0 bg-emerald-950">
                    <img
                      src={selectedEducator.photo}
                      alt={selectedEducator.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    {selectedEducator.arabicTitle && (
                      <span className="font-arabic text-amber-300 text-sm block">
                        {selectedEducator.arabicTitle}
                      </span>
                    )}
                    <h3 className="font-serif-display text-lg sm:text-xl font-bold text-white leading-tight">
                      {selectedEducator.name}
                    </h3>
                    <p className="text-xs text-emerald-200 mt-1 font-medium">
                      {selectedEducator.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-slate-700 text-xs sm:text-sm">
                
                {/* Pendidikan & Pengalaman */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#FAF8F5] p-4 rounded-2xl border border-slate-200">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">
                      Latar Belakang Pendidikan:
                    </span>
                    <p className="font-semibold text-slate-800 text-xs mt-0.5">
                      {selectedEducator.education}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">
                      Masa Khidmah di Pondok:
                    </span>
                    <p className="font-semibold text-slate-800 text-xs mt-0.5">
                      {selectedEducator.experienceYears} Tahun Mengabdi
                    </p>
                  </div>
                </div>

                {/* Biografi Lengkap */}
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-[#0F4C3A]" />
                    <span>Biografi & Keteladanan Keilmuan</span>
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedEducator.bio}
                  </p>
                </div>

                {/* Keahlian */}
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center space-x-2">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>Bidang Keahlian & Spesialisasi</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedEducator.expertise.map((exp, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-xl bg-emerald-50 text-[#0F4C3A] border border-emerald-200 text-xs font-semibold"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Kitab & Pelajaran */}
                {selectedEducator.taughtSubjects && (
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-2">
                      Kitab & Mata Pelajaran yang Diampu
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedEducator.taughtSubjects.map((sub, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center space-x-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setSelectedEducator(null)}
                  className="px-5 py-2 bg-[#0F4C3A] text-amber-300 text-xs font-bold rounded-xl hover:bg-emerald-900 transition-colors"
                >
                  Tutup Biodata
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
