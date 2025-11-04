'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#services', label: 'Leistungen' },
    { href: '/#process', label: 'Vorgehen' },
    { href: '/#cases', label: 'Referenzen' },
    { href: '/#about', label: 'Über uns' },
    { href: '/#contact', label: 'Kontakt' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg'
          : 'bg-white/80 backdrop-blur-xl'
      }`}
    >
      <nav className="container-custom py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#00B4D8] rounded-xl flex items-center justify-center font-bold text-white transition-transform group-hover:scale-110 shadow-md">
              IT
            </div>
            <span className="font-heading font-bold text-xl text-[#111827]">
              ITHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#374151] hover:text-[#0066FF] font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0066FF] to-[#00B4D8] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+49731123456"
              className="flex items-center space-x-2 text-[#374151] hover:text-[#0066FF] transition-colors"
              aria-label="Call us"
            >
              <Phone size={20} />
              <span className="font-medium">+49 731 123456</span>
            </a>
            <a href="/#contact" className="px-6 py-3 bg-gradient-to-r from-[#0066FF] to-[#00B4D8] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
              Beratung vereinbaren
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#111827] hover:text-[#0066FF] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#E5E7EB] pt-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#374151] hover:text-[#0066FF] font-medium transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+49731123456"
                className="flex items-center space-x-2 text-accent-dark hover:text-primary transition-colors py-2"
              >
                <Phone size={20} />
                <span className="font-medium">+49 731 123456</span>
              </a>
              <a
                href="/#contact"
                className="btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beratung vereinbaren
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
