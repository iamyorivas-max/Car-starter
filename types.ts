export type Language = 'fr' | 'ar';

export interface Content {
  nav: {
    features: string;
    specs: string;
    reviews: string;
    buy: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
  };
  benefits: {
    title: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  vehicles: {
    title: string;
    types: string[];
  };
  specs: {
    title: string;
    labels: {
      capacity: string;
      current: string;
      temp: string;
      ports: string;
      protection: string;
    };
    values: {
      capacity: string;
      current: string;
      temp: string;
      ports: string;
      protection: string;
    };
  };
  comparison: {
    title: string;
    weak: string;
    instant: string;
    traditional: string;
    smart: string;
    vs: string;
  };
  testimonials: {
    title: string;
    reviews: {
      name: string;
      text: string;
      stars: number;
    }[];
  };
  faq: {
    title: string;
    questions: {
      q: string;
      a: string;
    }[];
  };
  footer: {
    cta: string;
    subtext: string;
    copyright: string;
  };
}