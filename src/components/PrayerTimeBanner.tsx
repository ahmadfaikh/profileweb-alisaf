import React, { useState, useEffect } from 'react';
import { Clock, Bell, MapPin, Moon, Sun, Sunrise, Sunset } from 'lucide-react';

interface PrayerTime {
  name: string;
  arabic: string;
  time: string;
  icon: React.ReactNode;
}

export const PrayerTimeBanner: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds} WIB`);

      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };
      setCurrentDate(now.toLocaleDateString('id-ID', options));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const prayerSchedule: PrayerTime[] = [
    { name: 'Subuh', arabic: 'الفَجْر', time: '04:18', icon: <Sunrise className="w-4 h-4 text-amber-400" /> },
    { name: 'Terbit', arabic: 'الشُّرُوق', time: '05:32', icon: <Sun className="w-4 h-4 text-amber-300" /> },
    { name: 'Dzuhur', arabic: 'الظُّهْر', time: '11:39', icon: <Sun className="w-4 h-4 text-amber-500" /> },
    { name: 'Ashar', arabic: 'العَصْر', time: '14:51', icon: <Sunset className="w-4 h-4 text-orange-400" /> },
    { name: 'Maghrib', arabic: 'المَغْرِب', time: '17:42', icon: <Sunset className="w-4 h-4 text-amber-400" /> },
    { name: 'Isya', arabic: 'العِشَاء', time: '18:51', icon: <Moon className="w-4 h-4 text-blue-300" /> },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0a2f23] via-[#0F4C3A] to-[#0a2f23] text-white py-3.5 px-4 shadow-inner border-y border-emerald-700/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Location & Live Clock */}
        <div className="flex items-center space-x-3 text-xs sm:text-sm">
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-600/40 text-emerald-200">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium">Jadwal Sholat Bojonegoro & Sekitarnya</span>
          </div>
          <div className="flex items-center space-x-1.5 text-amber-300 font-mono font-bold tracking-wider bg-black/20 px-2.5 py-1 rounded-md border border-amber-500/20">
            <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>{currentTime || '12:00:00 WIB'}</span>
          </div>
        </div>

        {/* Prayer Times Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
          {prayerSchedule.map((prayer) => (
            <div 
              key={prayer.name}
              className="flex items-center space-x-1.5 bg-emerald-900/70 hover:bg-emerald-800/80 px-3 py-1.5 rounded-lg border border-emerald-700/50 transition-colors"
            >
              {prayer.icon}
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-white">{prayer.name}</span>
                  <span className="font-arabic text-[11px] text-emerald-300/80">{prayer.arabic}</span>
                </div>
                <span className="font-mono text-amber-300 font-bold text-[12px]">{prayer.time}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
