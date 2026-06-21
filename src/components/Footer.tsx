import { Instagram, Facebook, Twitter, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const socialIconMap = {
  Instagram,
  Facebook,
  Twitter,
};

export function Footer() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${siteContent.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteContent.contact.whatsappText)}`;
    window.open(url, '_blank');
  };

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
    }
  };

  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              {siteContent.brand.name}
            </h3>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              {siteContent.footer.tagline}
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent-hover hover:scale-[1.02] transition-all duration-200"
            >
              <MessageCircle size={18} />
              <span>Message on WhatsApp</span>
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('packages')}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Why Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="flex items-start gap-3 text-white/80 hover:text-accent transition-colors group"
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="group-hover:underline">{siteContent.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteContent.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-white/80 hover:text-accent transition-colors group"
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="group-hover:underline">{siteContent.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>{siteContent.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            {siteContent.footer.copyright}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {siteContent.footer.socialLinks.map((social) => {
              const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
              
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                  aria-label={social.platform}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
