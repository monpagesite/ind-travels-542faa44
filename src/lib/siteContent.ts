export const siteContent = {
  brand: {
    name: "Ind Travels",
    tagline: "Travel planned. Stress removed.",
  },
  
  hero: {
    headline: "Travel planned.<br/>Stress removed.",
    subtext: "From your first inquiry to your final boarding pass, we handle every detail. Curated itineraries, seamless bookings, and expert guidance — so you travel with confidence.",
    primaryCTA: "Plan Your Journey",
    secondaryCTA: "Browse tour packages →",
  },
  
  howItWorks: {
    headline: "Your journey, simplified",
    steps: [
      {
        icon: "MapPin",
        title: "Tell us where",
        description: "Share your dream destination, travel dates, and who's joining. A quick form or WhatsApp message — we'll take it from there.",
      },
      {
        icon: "ClipboardList",
        title: "We plan it",
        description: "Our travel experts craft a personalized itinerary with flights, hotels, activities, and insider tips. You review, we refine.",
      },
      {
        icon: "Plane",
        title: "You travel",
        description: "Everything's booked. Your documents arrive. Our 24/7 support travels with you. All you do is enjoy the journey.",
      },
    ],
  },
  
  packages: {
    headline: "Curated journeys",
    subtext: "Pre-designed itineraries for travelers who want the perfect balance of adventure and ease.",
    destinations: [
      {
        id: "kerala-backwaters",
        badge: "Kerala",
        title: "Kerala Backwaters Retreat",
        duration: "7 days",
        price: "From ₹45,000/person",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Serene Kerala backwaters with traditional houseboat",
      },
      {
        id: "rajasthan-heritage",
        badge: "Rajasthan",
        title: "Rajasthan Heritage Tour",
        duration: "10 days",
        price: "From ₹68,000/person",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Majestic Rajasthan palace architecture",
      },
      {
        id: "goa-beach",
        badge: "Goa",
        title: "Goa Beach Escape",
        duration: "5 days",
        price: "From ₹32,000/person",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Golden Goa beach at sunset",
      },
      {
        id: "himalayas-adventure",
        badge: "Himalayas",
        title: "Himalayan Adventure",
        duration: "12 days",
        price: "From ₹85,000/person",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Snow-capped Himalayan mountain peaks",
      },
      {
        id: "south-india",
        badge: "South India",
        title: "South India Temple Trail",
        duration: "9 days",
        price: "From ₹54,000/person",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Ancient South Indian temple architecture",
      },
      {
        id: "golden-triangle",
        badge: "North India",
        title: "Golden Triangle Classic",
        duration: "6 days",
        price: "From ₹42,000/person",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80",
        imageAlt: "Iconic Taj Mahal at sunrise",
      },
    ],
  },
  
  whyUs: {
    headline: "Why Ind Travels",
    subtext: "We've been crafting unforgettable journeys across India for over a decade. Our travelers return not just with photos, but with stories.",
    features: [
      {
        icon: "Shield",
        title: "Trusted expertise",
        description: "10+ years planning seamless travel experiences across every corner of India.",
      },
      {
        icon: "Headphones",
        title: "24/7 support",
        description: "Real people, real help. Reach us anytime during your journey — we travel with you.",
      },
      {
        icon: "Heart",
        title: "Personalized care",
        description: "No cookie-cutter itineraries. Every trip is tailored to your pace, budget, and interests.",
      },
      {
        icon: "Award",
        title: "Insider access",
        description: "Local guides, hidden gems, and experiences you won't find in guidebooks.",
      },
    ],
    testimonial: {
      quote: "Ind Travels turned our dream Kerala trip into reality. Every detail was perfect — from the houseboat to the cooking class. We felt looked after every step of the way.",
      author: "Priya & Arjun",
      location: "Mumbai",
    },
  },
  
  customPlanning: {
    headline: "Have a custom journey in mind?",
    subtext: "Whether it's a family reunion, a solo adventure, or a destination wedding — we'll design it from scratch. Share your vision, and we'll make it happen.",
    cta: "Start Planning",
  },
  
  contact: {
    headline: "Get in touch",
    whatsappNumber: "+919876543210",
    whatsappText: "Hi! I'd like to plan a trip with Ind Travels.",
    email: "hello@indtravels.com",
    phone: "+91 98765 43210",
    address: "Mumbai, Maharashtra, India",
  },
  
  footer: {
    tagline: "Curated journeys across India, crafted with care.",
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com/indtravels",
        icon: "Instagram",
      },
      {
        platform: "Facebook",
        url: "https://facebook.com/indtravels",
        icon: "Facebook",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/indtravels",
        icon: "Twitter",
      },
    ],
    copyright: `© ${new Date().getFullYear()} Ind Travels. All rights reserved.`,
  },
} as const;

export type SiteContent = typeof siteContent;
