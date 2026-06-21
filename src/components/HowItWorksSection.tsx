import { MapPin, ClipboardList, Plane } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  MapPin,
  ClipboardList,
  Plane,
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2
          className="font-playfair text-4xl md:text-5xl font-bold text-primary text-center mb-16 md:mb-20"
          data-reveal
        >
          {siteContent.howItWorks.headline}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {siteContent.howItWorks.steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            
            return (
              <div
                key={step.title}
                className="group bg-white border border-border rounded-2xl p-8 hover:-translate-y-1 hover:border-accent hover:shadow-xl transition-all duration-300"
                data-reveal
                data-reveal-delay={index * 100}
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-border mb-6 group-hover:border-accent transition-colors">
                  <Icon className="text-accent" size={40} strokeWidth={1.5} />
                </div>

                <h3 className="font-dm-sans text-2xl font-semibold text-primary mb-4">
                  {step.title}
                </h3>

                <p className="text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
