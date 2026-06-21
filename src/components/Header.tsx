import { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${siteContent.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteContent.contact.whatsappText)}`;
    window.open(url, '_blank');
  };

  const navLinks = [
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Packages', id: 'packages' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-playfair text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
            >
              {siteContent.brand.name}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[15px] font-medium text-text hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <button
              onClick={handleWhatsApp}
              className="hidden md:flex items-center gap-2 bg-accent text-white px-6 py-2.5 rounded-full font-medium hover:bg-accent-hover hover:scale-[1.02] transition-all duration-200 shadow-sm"
            >
              <MessageCircle size={18} />
              <span>Message Us</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-primary p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary md:hidden">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-8">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white text-3xl font-medium hover:text-accent transition-colors"
                style={{
                  animation: `fadeIn 0.3s ease-out ${index * 0.1}s both`,
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-accent-hover transition-all mt-4"
              style={{
                animation: `fadeIn 0.3s ease-out ${navLinks.length * 0.1}s both`,
              }}
            >
              <MessageCircle size={20} />
              <span>Message Us</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
