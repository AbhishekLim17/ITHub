'use client';

import { CheckCircle, Users, Building } from 'lucide-react';

export default function AboutSection() {
  const facts = [
    { icon: <CheckCircle className="w-6 h-6" />, text: 'Gegründet 2003' },
    { icon: <Users className="w-6 h-6" />, text: '50+ Mitarbeiter' },
    { icon: <Building className="w-6 h-6" />, text: 'Region Ulm/Neu-Ulm' },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Founder & Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
                Über uns
              </span>
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#111827] mb-4">
                Ihr Partner für <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">digitale Excellence</span>
              </h2>
              <p className="text-xl text-[#6B7280] leading-relaxed mb-6">
                Ihr verlässlicher Partner für professionelle IT-Dienstleistungen seit über 20 Jahren.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Wir sind spezialisiert auf die Planung, Implementation und Wartung komplexer
                IT-Infrastrukturen. Unser Ziel ist es, Ihre IT-Systeme sicher, effizient und
                zukunftssicher zu gestalten.
              </p>
            </div>

            {/* Facts */}
            <div className="flex flex-wrap gap-6">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100"
                >
                  <div className="text-orange-600">{fact.icon}</div>
                  <span className="font-semibold text-[#111827]">{fact.text}</span>
                </div>
              ))}
            </div>

            {/* Founder */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 flex items-center space-x-6 border-2 border-orange-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center font-heading font-bold text-3xl text-white flex-shrink-0 shadow-lg">
                CE
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-accent-dark">
                  Christian Enderle
                </h3>
                <p className="text-gray-600">
                  Gründer & Geschäftsführer
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  20+ Jahre Erfahrung in Enterprise IT
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual/Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl font-bold text-white mb-2">200+</div>
                <p className="text-white/90 font-semibold">Zufriedene Kunden</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl font-bold text-white mb-2">1000+</div>
                <p className="text-white/90 font-semibold">Projekte abgeschlossen</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl font-bold text-white mb-2">24/7</div>
                <p className="text-white/90 font-semibold">Support verfügbar</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="text-5xl font-bold text-white mb-2">99.9%</div>
                <p className="text-white/90 font-semibold">Verfügbarkeit</p>
              </div>
            </div>

            {/* Core Expertise */}
            <div className="card p-8">
              <h3 className="font-heading font-semibold text-lg text-accent-dark mb-4">
                Unsere Kernkompetenzen
              </h3>
              <ul className="space-y-3">
                {[
                  'Enterprise Netzwerkinfrastruktur',
                  'Cybersecurity & Compliance',
                  'Cloud Migration & Management',
                  'Managed IT Services',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
