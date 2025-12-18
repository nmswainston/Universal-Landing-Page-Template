export interface BrandingConfig {
  logo: string;
  companyName: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
    ctaLink: string;
  };
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  contact: {
    buttonText: string;
    email?: string;
    phone?: string;
  };
  reviews: Array<{
    name: string;
    rating: number;
    text: string;
    date: string;
  }>;
}

export const brandingConfig: BrandingConfig = {
  logo: '/logo.svg',
  companyName: 'Your Company',
  colors: {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#f59e0b',
  },
  hero: {
    headline: 'Welcome to Your Business',
    subheadline: 'We provide exceptional services that help you achieve your goals with ease and efficiency.',
    ctaText: 'Get Started',
    ctaLink: '#contact',
  },
  services: [
    {
      title: 'Service One',
      description: 'Professional service that delivers outstanding results for your business needs.',
      icon: '🚀',
    },
    {
      title: 'Service Two',
      description: 'Expert solutions tailored to meet your specific requirements and objectives.',
      icon: '💼',
    },
    {
      title: 'Service Three',
      description: 'Comprehensive support to help you succeed and grow your business effectively.',
      icon: '✨',
    },
  ],
  contact: {
    buttonText: 'Contact Us',
    email: 'hello@example.com',
    phone: '+1 (555) 123-4567',
  },
  reviews: [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Excellent service! They exceeded all my expectations and delivered exactly what I needed.',
      date: '2024-01-15',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Professional team with great attention to detail. Highly recommend their services.',
      date: '2024-01-10',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'Outstanding experience from start to finish. Will definitely work with them again.',
      date: '2024-01-05',
    },
  ],
};

