'use client';

import { Quote } from 'lucide-react';

const logos = [
  { name: 'Cisco', text: 'CISCO' },
  { name: 'Microsoft', text: 'Microsoft' },
  { name: 'ISO 27001', text: 'ISO 27001' },
  { name: 'VMware', text: 'VMware' },
];

const testimonials = [
  {
    quote: 'Die Zusammenarbeit mit ITHub war hervorragend. Professionell, schnell und lösungsorientiert.',
    author: 'Michael Schmidt',
    company: 'Geschäftsführer, TechCorp GmbH',
  },
  {
    quote: 'Seit der Zusammenarbeit laufen unsere IT-Systeme stabiler denn je. Der Support ist erstklassig.',
    author: 'Sarah Weber',
    company: 'IT-Leiterin, MedTech Solutions',
  },
  {
    quote: 'Kompetente Beratung und zuverlässige Umsetzung. Wir fühlen uns in sicheren Händen.',
    author: 'Thomas Müller',
    company: 'CTO, InnovateTech AG',
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative z-10">
        {/* Partner Logos */}
        <div className="mb-20">
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full mb-4 mx-auto block w-fit">
            🤝 Vertrauen & Partnerschaften
          </span>
          <p className="text-center text-[#6B7280] text-lg mb-12 font-medium">
            Zertifizierte Partner & Technologien
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
              >
                {logo.text}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[#111827] text-center mb-4">
            Was unsere <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Kunden sagen</span>
          </h2>
          <p className="text-center text-[#6B7280] text-lg mb-12 max-w-2xl mx-auto">
            Überzeugen Sie sich von den Erfahrungen unserer zufriedenen Kunden
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative border border-cyan-100"
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:rotate-12 transition-transform duration-300">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Quote */}
                <p className="text-[#374151] text-lg italic leading-relaxed mb-6 mt-6 before:content-['\201C'] after:content-['\201D']">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="pt-4 border-t-2 border-gradient-to-r from-teal-200 to-cyan-200">
                  <p className="font-semibold text-[#111827] text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#6B7280] mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
