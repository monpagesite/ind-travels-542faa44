import { Shield, Headphones, Heart, Award, Quote } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const iconMap = {
  Shield,
  Headphones,
  Heart,
  Award,
};

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6"
            data-reveal
          >
            {siteContent.whyUs.headline}
          </h2>
          <p
            className="text-lg text-text-muted max-w-2xl mx-auto"
            data-reveal
            data-reveal-delay="100"
          >
            {siteContent.whyUs.subtext}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" data-reveal data-reveal-delay="200">
          {siteContent.whyUs.features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <div
                key={feature.title}
                className="text-center"
                style={{
                  animation: `fadeUp 0.6s ease-out ${0.3 + index * 0.1}s both`,
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                  <Icon className="text-accent" size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="font-dm-sans text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonial */}
        <div
          className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-2xl p-8 md:p-12 relative"
          data-reveal
          data-reveal-delay="400"
        >
          <Quote className="absolute top-8 left-8 text-accent/20" size={48} strokeWidth={1.5} />
          
          <div className="relative z-10">
            <p className="font-playfair text-xl md:text-2xl text-primary leading-relaxed mb-6 italic">
              "{siteContent.whyUs.testimonial.quote}"
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="font-semibold text-secondary">
                  {siteContent.whyUs.testimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-primary">
                  {siteContent.whyUs.testimonial.author}
                </p>
                <p className="text-sm text-text-muted">
                  {siteContent.whyUs.testimonial.location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
