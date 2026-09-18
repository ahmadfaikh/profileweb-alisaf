import React from 'react';
import { FACILITIES } from '../data/pesantrenData';

export const FasilitasSection: React.FC = () => {
  return (
    <section id="fasilitas" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100/70 border border-emerald-300 text-[#0F4C3A] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Sarana & Prasarana</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Sarana & Prasarana Pesantren
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Fasilitas representatif di Pondok Pesantren Al Is'af untuk mendukung ibadah, pembelajaran, dan kenyamanan santri.
          </p>
        </div>

        {/* Facilities Grid: Simple Image + Nama + Keterangan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FACILITIES.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                <img 
                  src={fac.image} 
                  alt={fac.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Name & Keterangan */}
              <div className="p-5 flex-1 flex flex-col justify-start">
                <h3 className="font-serif-display text-xl font-bold text-slate-900 mb-2">
                  {fac.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {fac.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
