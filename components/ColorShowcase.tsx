'use client';

export default function ColorShowcase() {
  const brandColors = [
    { name: 'Primary Blue', hex: '#2563EB', text: 'text-white', desc: 'Main CTAs, highlights' },
    { name: 'Primary Dark', hex: '#1D4ED8', text: 'text-white', desc: 'Hover states' },
    { name: 'Primary Light', hex: '#DBEAFE', text: 'text-neutral-900', desc: 'Backgrounds' },
    { name: 'Secondary Purple', hex: '#9333EA', text: 'text-white', desc: 'Gradients, accents' },
    { name: 'Secondary Dark', hex: '#7E22CE', text: 'text-white', desc: 'Hover states' },
    { name: 'Accent Cyan', hex: '#06B6D4', text: 'text-white', desc: 'Accents, CTAs' },
    { name: 'Accent Teal', hex: '#0891B2', text: 'text-white', desc: 'Trust indicators' },
  ];

  const neutrals = [
    { name: 'Text Primary', hex: '#111827', text: 'text-white' },
    { name: 'Text Secondary', hex: '#4B5563', text: 'text-white' },
    { name: 'Text Tertiary', hex: '#6B7280', text: 'text-white' },
    { name: 'Background', hex: '#FFFFFF', text: 'text-neutral-900' },
    { name: 'Surface', hex: '#F9FAFB', text: 'text-neutral-900' },
    { name: 'Border', hex: '#E5E7EB', text: 'text-neutral-900' },
  ];

  const statusColors = [
    { name: 'Success', hex: '#10B981', text: 'text-white' },
    { name: 'Warning', hex: '#F59E0B', text: 'text-white' },
    { name: 'Error', hex: '#EF4444', text: 'text-white' },
    { name: 'Info', hex: '#3B82F6', text: 'text-white' },
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-heading text-neutral-900 mb-4">
            Color System <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-xl text-neutral-600">
            Vibrant, professional, and WCAG AA compliant
          </p>
        </div>

        {/* Brand Colors */}
        <div className="mb-16">
          <h3 className="text-h3 font-heading text-neutral-900 mb-6">Brand Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {brandColors.map((color, idx) => (
              <div key={idx} className="card p-0 overflow-hidden">
                <div 
                  className={`h-32 flex items-center justify-center ${color.text}`}
                  style={{ backgroundColor: color.hex }}
                >
                  <span className="font-bold text-lg">{color.hex}</span>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-neutral-900">{color.name}</h4>
                  <p className="text-sm text-neutral-600">{color.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradients */}
        <div className="mb-16">
          <h3 className="text-h3 font-heading text-neutral-900 mb-6">Gradients</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-card">
              Blue-Purple Hero
            </div>
            <div className="rounded-2xl h-48 bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-card">
              Blue-Cyan Accent
            </div>
            <div className="rounded-2xl h-48 bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center text-white font-bold text-xl shadow-card">
              Purple-Cyan Tech
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mb-16">
          <h3 className="text-h3 font-heading text-neutral-900 mb-6">Interactive Elements</h3>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="btn-ghost">Ghost Button</button>
            <button className="btn-outline">Outline Button</button>
            <button className="btn-primary" disabled>Disabled</button>
          </div>
          
          <div className="mt-8 space-y-4">
            <a href="#" className="text-blue-600 hover:text-purple-600 font-semibold block transition-colors">This is a primary link (blue → purple)</a>
            <div className="flex gap-3">
              <span className="badge badge-primary">Premium</span>
              <span className="badge badge-secondary">New</span>
              <span className="badge badge-success">Active</span>
            </div>
          </div>
        </div>

        {/* Status Colors */}
        <div className="mb-16">
          <h3 className="text-h3 font-heading text-neutral-900 mb-6">Status Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statusColors.map((color, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className={`h-24 rounded-xl flex items-center justify-center ${color.text} mb-2`}
                  style={{ backgroundColor: color.hex }}
                >
                  <span className="font-semibold">{color.hex}</span>
                </div>
                <p className="text-neutral-900 font-medium">{color.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Neutrals */}
        <div className="mb-16">
          <h3 className="text-h3 font-heading text-neutral-900 mb-6">Neutral System</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {neutrals.map((color, idx) => (
              <div key={idx} className="card-flat p-6 text-center">
                <div 
                  className={`h-20 rounded-lg flex items-center justify-center ${color.text} mb-3`}
                  style={{ backgroundColor: color.hex }}
                >
                  <span className="text-sm font-mono">{color.hex}</span>
                </div>
                <p className="text-neutral-900 font-medium">{color.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography with Colors */}
        <div>
          <h3 className="text-h3 font-heading text-neutral-900 mb-6">Typography Hierarchy</h3>
          <div className="card p-8 space-y-4">
            <h1 className="text-h1 text-neutral-900">H1 Heading - Charcoal (#111827)</h1>
            <h2 className="text-h2 text-neutral-900">H2 Heading - Charcoal (#111827)</h2>
            <h3 className="text-h3 text-neutral-900">H3 Heading - Charcoal (#111827)</h3>
            <p className="text-lg text-neutral-700">
              Body text in medium gray (#4B5563) - Perfect readability with excellent contrast
            </p>
            <p className="text-neutral-600">
              Secondary text in lighter gray (#6B7280) - Ideal for captions and muted content
            </p>
            <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl font-bold">
              Gradient Text Effect - Blue to Purple
            </p>
            <p className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent text-2xl font-bold">
              Gradient Text Effect - Purple to Cyan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
