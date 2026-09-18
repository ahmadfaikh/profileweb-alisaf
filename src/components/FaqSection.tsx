import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQ_LIST, PESANTREN_INFO } from '../data/pesantrenData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0].id);
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Semua Pertanyaan' },
    { id: 'psb', label: 'Pendaftaran (PSB)' },
    { id: 'keseharian', label: 'Kehidupan Asrama' },
    { id: 'biaya', label: 'Biaya & Beasiswa' },
    { id: 'akademik', label: 'Kurikulum & Ijazah' },
  ];

  const filteredFaqs = selectedCat === 'all'
    ? FAQ_LIST
    : FAQ_LIST.filter(f => f.category === selectedCat);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#0F4C3A] border border-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tanya Jawab Seputar Pesantren</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Jawaban lengkap atas pertanyaan yang paling sering diajukan oleh calon santri dan wali santri Pondok Pesantren Al Is'af.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCat(c.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCat === c.id
                  ? 'bg-[#0F4C3A] text-amber-300 shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white border-emerald-600/60 shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900"
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0"></span>
                    <span>{faq.question}</span>
                  </span>
                  <span className="p-1 rounded-lg bg-slate-100 text-slate-500 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#0F4C3A]" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="mt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask Panitia Prompt */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-slate-900">Masih punya pertanyaan lain seputar pondok?</h4>
            <p className="text-xs text-slate-500">Panitia sekretariat & humas siap menjawab pertanyaan Anda via WhatsApp.</p>
          </div>
          <a
            href={`https://wa.me/${PESANTREN_INFO.whatsappDigits}?text=Assalamu%27alaikum%20Humas%20Pondok%20Pesantren%20Al%20Is%27af.%20Saya%20ingin%20bertanya%20mengenai%20pendaftaran%20dan%20kehidupan%20santri.`}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-[#0F4C3A] hover:bg-[#0a3326] text-amber-200 rounded-xl text-xs font-bold flex items-center space-x-2 shadow-sm flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Chat Langsung ke Panitia</span>
          </a>
        </div>

      </div>
    </section>
  );
};
