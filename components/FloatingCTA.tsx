'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isExpanded ? (
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 animate-fadeIn">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-semibold text-lg text-accent-dark">
              Brauchen Sie Hilfe?
            </h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-accent-dark transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-gray-600 mb-4">
            Kontaktieren Sie uns für eine kostenlose Beratung.
          </p>

          <div className="space-y-3">
            <a
              href="tel:+49731123456"
              className="block w-full btn-primary text-center"
            >
              +49 731 123456
            </a>
            <a
              href="/#contact"
              className="block w-full btn-ghost text-center"
              onClick={() => setIsExpanded(false)}
            >
              Kontaktformular
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-16 h-16 bg-primary hover:bg-primary-dark rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
          aria-label="Get in touch"
        >
          <MessageCircle className="w-7 h-7 text-accent-dark" />
        </button>
      )}
    </div>
  );
}
