'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/seo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 pt-16 pb-8 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-md">
                IT
              </div>
              <span className="font-heading font-bold text-xl">ITHub</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Ihr strategischer IT-Partner seit 2003. Zuverlässig, kompetent und kundenorientiert.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#services" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="/#process" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                  Vorgehen
                </a>
              </li>
              <li>
                <a href="/#cases" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                  Referenzen
                </a>
              </li>
              <li>
                <a href="/#about" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Leistungen</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/netzwerke" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                  Netzwerke
                </Link>
              </li>
              <li>
                <Link href="/services/it-sicherheit" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                  IT-Sicherheit
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                  Cloud-Lösungen
                </Link>
              </li>
              <li>
                <Link href="/services/beratung" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                  IT-Beratung
                </Link>
              </li>
              <li>
                <Link href="/services/hosting" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                  Hosting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-[#F3C600] mt-0.5 flex-shrink-0" />
                <a href="tel:+49731123456" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                  +49 731 123456
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-[#F3C600] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@ithub.de" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                  info@ithub.de
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#F3C600] mt-0.5 flex-shrink-0" />
                <span className="text-[#CBD5E1]">
                  Musterstraße 1<br />
                  89073 Ulm
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1E293B]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#94A3B8] text-sm">
              © {currentYear} ITHub GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/impressum" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-[#CBD5E1] hover:text-[#F3C600] transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
    </footer>
  );
}
