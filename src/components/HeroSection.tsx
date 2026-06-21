import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const url = `https://wa.me/${siteContent.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(siteContent.contact.whatsappText)}`;
    window.open(url, '_blank');
  };

  const scrollToPackages = () => {
    const element = document.getElementById('packages');
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
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-0">
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content (60%) */}
          <div className="md:col-span-3 space-y-8">
            <h1
              className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] tracking-tight"
              dangerouslySetInnerHTML={{ __html: siteContent.hero.headline }}
              data-reveal
            />

            <p
              className="text-lg md:text-xl text-text-muted leading-relaxed max-w-[560px]"
              data-reveal
              data-reveal-delay="100"
            >
              {siteContent.hero.subtext}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4" data-reveal data-reveal-delay="200">
              <button
                onClick={handleWhatsApp}
                className="group flex items-center gap-3 bg-accent text-white px-10 py-4 rounded-full font-semibold hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>{siteContent.hero.primaryCTA}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToPackages}
                className="text-primary font-medium hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
              >
                {siteContent.hero.secondaryCTA}
              </button>
            </div>
          </div>

          {/* Right column - Image collage (40%) */}
          <div className="md:col-span-2 relative h-[400px] md:h-[600px]" data-reveal data-reveal-delay="300">
            {/* Large image - top left */}
            <div
              className="absolute top-0 left-0 w-[70%] h-[55%] rounded-2xl overflow-hidden shadow-xl"
              style={{
                transform: `translateY(${scrollY * 0.15}px)`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80"
                alt="Beautiful tropical beach in India"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Smaller image - bottom right */}
            <div
              className="absolute bottom-0 right-0 w-[65%] h-[50%] rounded-2xl overflow-hidden shadow-xl"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80"
                alt="Majestic mountain landscape"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
