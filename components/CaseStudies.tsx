'use client';

import { TrendingDown, Shield, Zap } from 'lucide-react';

interface CaseStudy {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  metric: string;
}

const caseStudies: CaseStudy[] = [
  {
    icon: <TrendingDown className="w-8 h-8" />,
    title: 'Produktionsunternehmen',
    problem: 'Häufige Systemausfälle führten zu Produktionsstillständen und hohen Kosten.',
    solution: 'Implementation eines redundanten Netzwerks mit 24/7 Monitoring und präventiver Wartung.',
    outcome: '30% Reduktion der Ausfallzeit',
    metric: '-30%',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Mittelständisches Unternehmen',
    problem: 'Veraltete IT-Sicherheit machte das Unternehmen anfällig für Cyberangriffe.',
    solution: 'Umfassende Security-Lösung mit Firewall, Intrusion Detection und Mitarbeiterschulungen.',
    outcome: '100% Schutz vor Angriffen',
    metric: '100%',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'E-Commerce Plattform',
    problem: 'Langsame Server-Performance beeinträchtigte die Kundenerfahrung und Umsätze.',
    solution: 'Migration zu einer skalierbaren Cloud-Infrastruktur mit automatischer Lastverteilung.',
    outcome: '50% schnellere Ladezeiten',
    metric: '+50%',
  },
];

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full">
            Erfolgsgeschichten
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#111827]">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Messbare Erfolge</span> für unsere Kunden
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Echte Projekte, echte Ergebnisse – sehen Sie, wie wir Unternehmen transformieren
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 space-y-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-white group"
              role="article"
              aria-label={`Case study: ${study.title}`}
            >
              {/* Metric Badge */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {study.icon}
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {study.metric}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-heading font-bold text-[#111827]">
                {study.title}
              </h3>

              {/* Problem */}
              <div className="space-y-2">
                <h4 className="font-semibold text-[#111827] text-sm uppercase tracking-wide">
                  Problem
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {study.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-2">
                <h4 className="font-semibold text-accent-dark text-sm uppercase tracking-wide">
                  Lösung
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {study.solution}
                </p>
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-secondary/20">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                  <p className="font-semibold text-neutral-900">
                    {study.outcome}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
