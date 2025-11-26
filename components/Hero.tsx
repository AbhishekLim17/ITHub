'use client';

import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-b from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeIn">
            <div className="inline-block">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow">
                🚀 Ihr IT-Partner in Ulm
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-heading font-bold text-[#111827] leading-tight">
                Innovative
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  IT-Lösungen
                </span>
                <br />
                für Ihr Business
              </h1>
              <p className="text-xl text-[#6B7280] max-w-2xl leading-relaxed">
                Professionelle IT-Services, Cloud-Lösungen und 24/7 Support für mittelständische Unternehmen in der Region Ulm.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Kostenlose Beratung
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="/#services" className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-2xl shadow-lg hover:shadow-xl border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300">
                Unsere Leistungen
              </a>
            </div>

            {/* Microcopy */}
            <div className="flex flex-wrap gap-6 text-sm text-[#6B7280] pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Support in DE/CH/AT</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>20+ Jahre Erfahrung</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>24/7 Verfügbar</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="btn-primary flex items-center space-x-2">
                <span>Jetzt Beratung vereinbaren</span>
                <ArrowRight size={20} />
              </a>
              <a href="/#services" className="btn-ghost flex items-center space-x-2">
                <span>Unsere Leistungen</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280] mb-4 font-medium">Vertraut von führenden Unternehmen</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="text-2xl font-bold text-[#111827] opacity-40 hover:opacity-100 transition-opacity">CISCO</div>
                <div className="text-2xl font-bold text-[#111827] opacity-40 hover:opacity-100 transition-opacity">Microsoft</div>
                <div className="text-2xl font-bold text-[#111827] opacity-40 hover:opacity-100 transition-opacity">ISO 27001</div>
              </div>
            </div>
          </div>

          {/* Right Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 flex items-center justify-center p-12">
                <div className="text-center space-y-6 bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <Play size={48} className="text-white ml-2" />
                  </div>
                  <p className="text-white font-bold text-xl drop-shadow-lg">Entdecken Sie unsere Lösungen</p>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
