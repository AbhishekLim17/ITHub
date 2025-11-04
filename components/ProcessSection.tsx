'use client';

import { Search, Target, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Search className="w-8 h-8" />,
    title: 'Analyse',
    description: 'Wir analysieren Ihre bestehende IT-Infrastruktur und identifizieren Optimierungspotenziale.',
  },
  {
    number: '02',
    icon: <Target className="w-8 h-8" />,
    title: 'Konzept',
    description: 'Entwicklung einer maßgeschneiderten Lösung, die exakt auf Ihre Anforderungen zugeschnitten ist.',
  },
  {
    number: '03',
    icon: <Rocket className="w-8 h-8" />,
    title: 'Umsetzung',
    description: 'Professionelle Implementation mit minimalem Ausfall und maximaler Effizienz.',
  },
  {
    number: '04',
    icon: <BarChart className="w-8 h-8" />,
    title: 'Betrieb',
    description: 'Kontinuierliche Überwachung, Wartung und Optimierung für nachhaltigen Erfolg.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 text-sm font-semibold rounded-full">
            Unser Vorgehen
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#111827]">
            In <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">4 Schritten</span> zum Erfolg
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Unser bewährter Prozess garantiert effiziente Umsetzung und nachhaltige Ergebnisse
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-white group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center font-heading font-bold text-xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-purple-600 mb-4 mt-8 transform group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-[#111827] mb-3">
                {step.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                {step.description}
              </p>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
