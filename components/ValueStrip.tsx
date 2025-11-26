'use client';

import { Clock, MapPin, Award } from 'lucide-react';

export default function ValueStrip() {
  const values = [
    {
      icon: <Clock className="w-6 h-6" />,
      label: '24/7 Support',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Onsite & Remote',
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: 'Made in Germany',
    },
  ];

  return (
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="flex flex-wrap justify-center gap-12 lg:gap-20 text-white">
          {values.map((value, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="text-white">{value.icon}</div>
              <span className="font-semibold">{value.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
