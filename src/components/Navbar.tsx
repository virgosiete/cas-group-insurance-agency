import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="https://4d5ye6z4o2.ufs.sh/f/KjF07UEepH6lgG1BAaK2KPv0gV5NheXA9uybkRsBcHYJLMGm"
              alt="CAS Group Logo"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-gray-800">CAS Group</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-brand-sage font-semibold transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="primary"
              onClick={() => scrollToSection('contact')}
              className="!px-6 !py-3"
            >
              Book a Free Consultation
            </Button>
          </div>

          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-gray-700 hover:text-brand-sage font-semibold py-2"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="primary"
              onClick={() => scrollToSection('contact')}
              className="w-full"
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
