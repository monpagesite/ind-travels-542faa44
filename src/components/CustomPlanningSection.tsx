import { Sparkles } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export function CustomPlanningSection() {
  const handleWhatsApp = () => {
    const message = "Hi! I'd like to plan a custom journey.";
    const url = `https://wa.me/${siteContent.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/95 to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6" data-reveal>
          <Sparkles className="text-accent" size={32} strokeWidth={1.5} />
        </div>

        <h2
          className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6"
          data-reveal
          data-reveal-delay="100"
        >
          {siteContent.customPlanning.headline}
        </h2>

        <p
          className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto"
          data-reveal
          data-reveal-delay="200"
        >
          {siteContent.customPlanning.subtext}
        </p>

        <button
          onClick={handleWhatsApp}
          className="bg-white text-primary px-10 py-4 rounded-full font-semibold hover:bg-background hover:scale-[1.02] transition-all duration-200 shadow-xl"
          data-reveal
          data-reveal-delay="300"
        >
          {siteContent.customPlanning.cta}
        </button>
      </div>
    </section>
  );
}
