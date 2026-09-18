import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Sun, 
  Moon, 
  BookOpen, 
  Sparkles, 
  Heart, 
  Filter,
  CheckCircle2
} from 'lucide-react';
import { SANTRI_DAILY_SCHEDULE } from '../data/pesantrenData';

export const JadwalSantri: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua Rutinitas (24 Jam)' },
    { id: 'ibadah', label: 'Ibadah & Doa' },
    { id: 'diniyah', label: 'Kajian Kitab & Tahfizh' },
    { id: 'formal', label: 'Sekolah Formal' },
    { id: 'kemandirian', label: 'Ekstrakurikuler & Makan' },
    { id: 'istirahat', label: 'Istirahat' },
  ];

  const filteredSchedule = filterCategory === 'all'
    ? SANTRI_DAILY_SCHEDULE
    : SANTRI_DAILY_SCHEDULE.filter(item => item.category === filterCategory);

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'ibadah':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">Ibadah & Wirid</span>;
      case 'diniyah':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-900">Kajian Turats & Tahfizh</span>;
      case 'formal':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-100 text-blue-800">Sekolah & Diskusi</span>;
      case 'kemandirian':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-100 text-purple-800">Minat & Kemandirian</span>;
      case 'istirahat':
        return <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-800">Istirahat Malam</span>;
      default:
        return null;
    }
  };

  return (
    <section id="jadwal" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Hayatus Santri</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Kehidupan & Jadwal Harian Santri
          </h2>
          <div className="w-20 h-1 bg-[#0F4C3A] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Menempa kedisiplinan dan keberkahan waktu selama 24 jam penuh. Pola hidup seimbang antara penghambaan kepada Allah, tholabul 'ilmi, dan pembiasaan adab mulia.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                filterCategory === cat.id
                  ? 'bg-[#0F4C3A] text-amber-200 shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Timeline View */}
        <div className="relative border-l-2 border-emerald-200/80 ml-4 md:ml-32 pl-6 sm:pl-8 space-y-8">
          {filteredSchedule.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#0F4C3A] shadow-md group-hover:scale-125 transition-transform flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              </div>

              {/* Time pill for desktop positioned on the left */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-24 font-mono font-bold text-xs text-[#0F4C3A]">
                {item.time}
              </div>

              {/* Card Content */}
              <div className="bg-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-amber-400/80 hover:shadow-md transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="md:hidden font-mono text-xs font-bold text-[#0F4C3A] bg-emerald-100/70 px-2 py-0.5 rounded">
                      {item.time}
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-slate-900">
                      {item.activity}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2">
                    {getCategoryBadge(item.category)}
                    <span className="font-arabic text-sm sm:text-base text-emerald-900 font-semibold">
                      {item.arabicTitle}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="flex items-center space-x-1.5 text-xs text-slate-500 pt-2 border-t border-slate-200/60">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>Lokasi: <strong>{item.location}</strong></span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Summary Motto Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950 via-[#0F4C3A] to-emerald-950 text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif-display text-xl font-bold text-amber-300">
              Disiplin yang Didasari Rasa Ikhlas & Kasih Sayang
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
              Pesantren Al Is'af mengasuh santri layaknya anak sendiri. Setiap santri didampingi Ustadz Wali Kamar dan Asatidz senior untuk memastikan ibadah, kesehatan, dan perkembangan belajarnya terpantau prima.
            </p>
          </div>

          <div className="flex-shrink-0">
            <div className="px-4 py-2 rounded-xl bg-amber-400 text-emerald-950 text-xs font-bold shadow-md">
              Keluarga Besar Al Is'af
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
