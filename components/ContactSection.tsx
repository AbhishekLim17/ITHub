'use client';

import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', interest: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-pink-200/30 to-violet-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 text-sm font-semibold rounded-full mb-4">
            💬 Kontakt
          </span>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#111827] mb-4">
            Kontaktieren Sie <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">uns</span>
          </h2>
          <p className="text-xl text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam die perfekte IT-Lösung für Ihr Unternehmen entwickeln.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href="tel:+49731123456"
                className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-indigo-100 hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#111827] text-lg">Telefon</p>
                  <p className="text-[#6B7280] text-lg">+49 731 123456</p>
                </div>
              </a>

              <a
                href="mailto:info@ithub.de"
                className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100 hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#111827] text-lg">E-Mail</p>
                  <p className="text-[#6B7280] text-lg">info@ithub.de</p>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-100 shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#111827] text-lg">Adresse</p>
                  <p className="text-[#6B7280] text-lg">Musterstraße 1<br />89073 Ulm, Deutschland</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-violet-100 shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#111827] text-lg">Öffnungszeiten</p>
                  <p className="text-[#6B7280] text-lg">Mo-Fr: 08:00 - 18:00 Uhr<br />24/7 Support verfügbar</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-64 bg-white/80 backdrop-blur-sm border border-indigo-100 flex items-center justify-center">\n              <p className="text-[#6B7280] font-medium">Google Maps Einbettung</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-indigo-100">
            <h3 className="text-3xl font-heading font-bold text-[#111827] mb-2">
              Kostenlose <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Beratung</span> anfragen
            </h3>
            <p className="text-[#6B7280] mb-8">Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.</p>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-accent-dark mb-2">Vielen Dank!</h4>
                <p className="text-gray-600">
                  Ihre Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-accent-dark mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all bg-white/80 backdrop-blur-sm"
                      placeholder="Max Mustermann"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#111827] mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all bg-white/80 backdrop-blur-sm"
                      placeholder="Firma GmbH"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#111827] mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all bg-white/80 backdrop-blur-sm"
                      placeholder="max@beispiel.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#111827] mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all bg-white/80 backdrop-blur-sm"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-[#111827] mb-2">
                    Interesse
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all bg-white/80 backdrop-blur-sm"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="netzwerke">Netzwerke</option>
                    <option value="it-sicherheit">IT-Sicherheit</option>
                    <option value="cloud">Cloud-Lösungen</option>
                    <option value="beratung">IT-Beratung</option>
                    <option value="hosting">Hosting</option>
                    <option value="wartung">Wartung & Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#111827] mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 outline-none transition-all bg-white/80 backdrop-blur-sm resize-none"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <span>{status === 'submitting' ? 'Wird gesendet...' : 'Nachricht senden'}</span>
                  <Send size={20} />
                </button>

                <p className="text-sm text-gray-500 text-center">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
