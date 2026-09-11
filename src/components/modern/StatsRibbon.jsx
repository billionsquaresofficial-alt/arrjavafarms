import React from 'react';
import { Compass, Navigation, Clock, Building2, Trees } from 'lucide-react';

export default function StatsRibbon() {
  const stats = [
    {
      metric: "1 KM",
      label: "Narasapur State Highway",
      sublabel: "Immediate arterial connection",
      icon: Compass,
    },
    {
      metric: "5 Mins",
      label: "Healthcare & Schooling",
      sublabel: "TRR Medical & Vignan School",
      icon: Clock,
    },
    {
      metric: "4 KM",
      label: "Aurobindo Sansa County",
      sublabel: "Integrated mega township",
      icon: Building2,
    },
    {
      metric: "10 KM",
      label: "Outer Ring Road (ORR)",
      sublabel: "Seamless Financial District access",
      icon: Navigation,
    },
    {
      metric: "14 KM",
      label: "Patancheru / NH 65",
      sublabel: "Mumbai Highway commercial hub",
      icon: Trees,
    },
  ];

  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200 p-6 sm:p-7">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 ${
                  idx > 0 ? 'pt-4 lg:pt-0 lg:pl-6' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold font-serif text-slate-900 leading-tight">
                    {item.metric}
                  </div>
                  <div className="text-xs font-bold text-slate-800 leading-snug">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 hidden sm:block">
                    {item.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
