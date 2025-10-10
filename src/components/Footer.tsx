import { Linkedin, Facebook, Instagram, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-brand-black text-white py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sage opacity-10 transform rotate-45 translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-2 bg-brand-sage"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="https://4d5ye6z4o2.ufs.sh/f/KjF07UEepH6lgG1BAaK2KPv0gV5NheXA9uybkRsBcHYJLMGm"
                alt="The CAS Group VA Logo"
                className="h-14 w-14 mr-4 object-contain bg-white rounded-lg p-1"
              />
              <h3 className="text-2xl font-bold text-white border-l-4 border-brand-sage pl-4">The CAS Group VA</h3>
            </div>
            <p className="text-primary-300 leading-relaxed max-w-md mb-4">
              Specializing in appointment setting for life insurance agents and brokers across the U.S. Your success is our priority.
            </p>
            <div className="flex items-center text-primary-300">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:+16789121094" className="hover:text-brand-sage transition-colors font-semibold">
                +1 (678) 912-1094
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-300 hover:text-brand-sage transition-colors font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/conradferguson-virtual-assistant/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-darkTeal border border-primary-700 rounded-lg flex items-center justify-center hover:bg-brand-sage hover:border-brand-sage transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579594816897&mibextid=wwXIfr&rdid=hWofcXifwN1RQVAX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1VeayMADwy%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-darkTeal border border-primary-700 rounded-lg flex items-center justify-center hover:bg-brand-sage hover:border-brand-sage transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/resplendent_con"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-brand-darkTeal border border-primary-700 rounded-lg flex items-center justify-center hover:bg-brand-sage hover:border-brand-sage transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-800 text-center text-primary-400 text-sm">
          <p>Copyright &copy; 2025 CAS Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
