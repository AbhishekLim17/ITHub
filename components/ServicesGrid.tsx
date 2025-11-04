'use client';

import { Network, Shield, Cloud, Users, Server, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  slug: string;
}

const services: Service[] = [
  {
    icon: <Network className="w-8 h-8" />,
    title: 'Netzwerke',
    description: 'Planung, Installation und Wartung moderner Netzwerkinfrastrukturen.',
    features: [
      'LAN/WLAN Infrastruktur',
      'Netzwerkoptimierung',
      'VPN-Lösungen',
    ],
    slug: 'netzwerke',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'IT-Sicherheit',
    description: 'Umfassender Schutz vor digitalen Bedrohungen und Cyberangriffen.',
    features: [
      'Firewall & Intrusion Detection',
      'Security Audits',
      'Backup & Disaster Recovery',
    ],
    slug: 'it-sicherheit',
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: 'Cloud-Lösungen',
    description: 'Migration, Management und Optimierung Ihrer Cloud-Infrastruktur.',
    features: [
      'Cloud Migration',
      'Hybrid Cloud Lösungen',
      'Cloud Security',
    ],
    slug: 'cloud',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'IT-Beratung',
    description: 'Strategische Beratung für digitale Transformation und IT-Strategie.',
    features: [
      'IT-Strategieentwicklung',
      'Digitalisierung',
      'Prozessoptimierung',
    ],
    slug: 'beratung',
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Hosting',
    description: 'Zuverlässiges und sicheres Hosting für Ihre Anwendungen und Daten.',
    features: [
      'Dedicated Server',
      'Managed Hosting',
      'High Availability',
    ],
    slug: 'hosting',
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Wartung & Support',
    description: 'Proaktive Wartung und schneller Support für Ihre IT-Systeme.',
    features: [
      'Managed Services',
      'Präventive Wartung',
      'Remote Support',
    ],
    slug: 'wartung',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 bg-blue-100 text-[#0066FF] text-sm font-semibold rounded-full">
            Unsere Leistungen
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#111827]">
            Maßgeschneiderte IT-Services
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Von Netzwerkinfrastruktur bis Cloud-Migration – wir bieten ganzheitliche IT-Lösungen für Ihren Erfolg.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#0066FF]/20 group relative overflow-hidden"
              role="article"
              aria-label={`Service: ${service.title}`}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/0 to-[#00B4D8]/0 group-hover:from-[#0066FF]/5 group-hover:to-[#00B4D8]/5 transition-all duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#00B4D8] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#111827] mb-3">
                  {service.title}
                </h3>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-[#374151]">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0066FF]/20 to-[#00B4D8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={14} className="text-[#0066FF]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`/services/${service.slug}`}
                className="inline-flex items-center space-x-2 text-[#0066FF] hover:text-[#00B4D8] font-semibold transition-colors group/link"
              >
                <span>Mehr erfahren</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
