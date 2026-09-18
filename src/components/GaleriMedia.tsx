import React, { useState } from 'react';
import { X } from 'lucide-react';
import { MEDIA_GALLERY } from '../data/pesantrenData';
import { MediaItem } from '../types/pesantren';

export const GaleriMedia: React.FC = () => {
  const [activeImage, setActiveImage] = useState<MediaItem | null>(null);

  return (
    <section id="galeri" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100/70 border border-emerald-300 text-[#0F4C3A] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Dokumentasi</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Galeri Foto & Video Pondok Pesantren
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Dokumentasi kegiatan, suasana belajar, dan sarana di Pondok Pesantren Al Is'af.
          </p>
        </div>

        {/* Gallery Grid: Gambar dan Nama Gambar Saja */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {MEDIA_GALLERY.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group aspect-square"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        {/* Lightbox / Modal when clicked */}
        {activeImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div 
              className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={activeImage.thumbnail}
                alt={activeImage.title}
                className="w-full max-h-[70vh] object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Keterangan disembunyikan */}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
