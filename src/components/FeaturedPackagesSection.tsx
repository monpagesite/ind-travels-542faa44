import { siteContent } from '../lib/siteContent';

export function FeaturedPackagesSection() {
  const handleWhatsApp = (packageTitle: string) => {
    const message = `Hi! I'm interested in the ${packageTitle} package.`;
    const url = `https://wa.me/${siteContent.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="packages" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-16">
          <h2
            className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6"
            data-reveal
          >
            {siteContent.packages.headline}
          </h2>
          <p
            className="text-lg text-text-muted max-w-[600px]"
            data-reveal
            data-reveal-delay="100"
          >
            {siteContent.packages.subtext}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.packages.destinations.map((destination, index) => (
            <article
              key={destination.id}
              className="group bg-white border border-border rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => handleWhatsApp(destination.title)}
              data-reveal
              data-reveal-delay={index * 100}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-primary text-white text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
                  {destination.badge}
                </span>

                <h3 className="font-dm-sans text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {destination.title}
                </h3>

                <p className="text-sm text-text-muted mb-4">
                  {destination.duration} · {destination.price}
                </p>

                <div className="flex items-center text-accent text-sm font-medium group-hover:underline">
                  View Details →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
