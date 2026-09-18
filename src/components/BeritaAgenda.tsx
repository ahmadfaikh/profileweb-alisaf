import React, { useState } from 'react';
import { Newspaper, Calendar, ArrowRight, X } from 'lucide-react';
import { NEWS_ITEMS } from '../data/pesantrenData';
import { NewsItem } from '../types/pesantren';

export const BeritaAgenda: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#0F4C3A] border border-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Kabar & Informasi</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Warta & Berita Pesantren
          </h2>
          <div className="w-20 h-1 bg-[#0F4C3A] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Ikuti perkembangan informasi kegiatan, pengajian, dan kabar terbaru di lingkungan Pondok Pesantren Al Is'af.
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="bg-[#FAF8F5] rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md hover:border-amber-400 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0F4C3A] text-amber-300 text-[10px] font-bold">
                    {item.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center space-x-3 text-[11px] text-slate-500 mb-2">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-amber-600" />
                      <span>{item.date}</span>
                    </span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#0F4C3A] transition-colors line-clamp-2 leading-snug mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <span className="text-xs font-semibold text-[#0F4C3A] group-hover:text-amber-600 flex items-center space-x-1">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* News Detail Modal */}
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100">
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                aria-label="Tutup Berita"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#0F4C3A] text-xs font-bold">
                  {selectedNews.category}
                </span>
              </div>

              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-3">
                {selectedNews.title}
              </h3>

              <div className="flex items-center space-x-4 text-xs text-slate-500 pb-4 border-b border-slate-100 mb-5">
                <span>{selectedNews.date}</span>
                <span>•</span>
                <span>Ditulis oleh {selectedNews.author}</span>
                <span>•</span>
                <span>{selectedNews.readTime}</span>
              </div>

              <div className="rounded-2xl overflow-hidden mb-6 h-64 bg-slate-100">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="prose prose-emerald text-sm text-slate-700 leading-relaxed space-y-4">
                <p className="font-medium text-slate-800">
                  {selectedNews.excerpt}
                </p>
                <p>
                  Pondok Pesantren Al Is'af terus berkomitmen menghadirkan iklim pendidikan salafiyah dan tahfizh yang berpadu selaras dengan mutu akademik madrasah dan ketrampilan kejuruan. Seluruh civitas akademika menyambut gembira setiap program pembinaan yang dirancang untuk membekali para santri dengan keteguhan akidah, kedalaman ilmu fiqih, serta budi pekerti yang luhur.
                </p>
                <p>
                  Bagi wali santri maupun masyarakat yang ingin mendapatkan informasi lebih mendalam terkait agenda ini, dipersilakan menghubungi sekretariat pesantren atau layanan informasi resmi melalui WhatsApp panitia.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#0F4C3A] text-amber-200 font-bold text-xs hover:bg-[#0c3c2e] transition-colors"
                >
                  Tutup Informasi
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
