import React from "react";
import { BookOpen, Flame, GraduationCap, Award, Cpu, Languages, ArrowRight } from "lucide-react";
import { Target, Eye, Compass, History, BookMarked, CheckCircle2, Calendar } from "lucide-react";

import { EDUCATION_UNITS } from "../data/pesantrenData";

interface ProgramPendidikanProps {
  onSelectProgramForPsb: (programId: string) => void;
}

export const ProgramPendidikan: React.FC<ProgramPendidikanProps> = ({ onSelectProgramForPsb }) => {
  const getUnitIcon = (iconName: string, active: boolean = false) => {
    const className = `w-5 h-5 ${active ? "text-amber-300" : "text-[#0F4C3A]"}`;
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className={className} />;
      case "Flame":
        return <Flame className={className} />;
      case "GraduationCap":
        return <GraduationCap className={className} />;
      case "Award":
        return <Award className={className} />;
      case "Cpu":
        return <Cpu className={className} />;
      case "Languages":
        return <Languages className={className} />;
      default:
        return <GraduationCap className={className} />;
    }
  };

  return (
    <section id="pendidikan" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-[#0F4C3A] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Marahilut Ta'lim</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Jenjang & Unit Pendidikan Terpadu</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Menyelenggarakan sistem pendidikan komprehensif yang mengintegrasikan pengajian kitab kuning, tahfizhul qur'an, pendidikan formal nasional, serta penguasaan bahasa internasional dan keahlian vokasi.
          </p>
        </div>

        {/* Education Units Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EDUCATION_UNITS.map((unit) => (
            <div key={unit.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0F4C3A] flex items-center justify-center font-bold">{getUnitIcon(unit.iconName, false)}</div>
                  {unit.accreditation && <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-bold">{unit.accreditation}</span>}
                </div>

                <span className="inline-block px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium mb-3">{unit.level}</span>

                <h3 className="font-serif-display text-xl font-bold text-slate-900 mb-1">{unit.name}</h3>
                <p className="font-arabic text-sm text-[#0F4C3A] mb-3">{unit.arabicName}</p>

                {unit.description && unit.id !== "salafiyah" && <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">{unit.description}</p>}
              </div>

              <button
                onClick={() => onSelectProgramForPsb(unit.id)}
                className="w-full mt-4 py-2.5 px-4 bg-emerald-50 hover:bg-[#0F4C3A] text-[#0F4C3A] hover:text-amber-300 border border-emerald-200 hover:border-[#0F4C3A] rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Daftar di Unit Ini</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
          {/* Card program unggulan*/}
          <div className="lg:col-span-7 bg-[#F8FAF8] border border-emerald-900/10 p-7 sm:p-9 rounded-3xl shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2 text-[#0F4C3A] mb-2">
                <Target className="w-6 h-6 text-amber-600" />
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-900">_</span>
              </div>

              <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-slate-900 mb-4">Program Unggulan</h3>

              <div className="space-y-3.5">
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Kitab Salaf (Kuning)</p>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Tahfidz Qur'an</p>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Kurikulum Kaifatusholli </p>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Pembiasaan Dzikir</p>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Parenting dan Forsiwa</p>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p>Rebana dan Sholawat</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
              <span>_</span>
              <span className="text-emerald-800 font-semibold">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
