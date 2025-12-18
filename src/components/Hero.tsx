import { brandingConfig } from '../config/branding';
import { ContactButton } from './ContactButton';

export function Hero() {
  const { hero } = brandingConfig;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark">
      <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
      <div className="container-custom relative z-10 text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
          {hero.headline}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {hero.subheadline}
        </p>
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <ContactButton variant="primary" href={hero.ctaLink}>
            {hero.ctaText}
          </ContactButton>
        </div>
      </div>
    </section>
  );
}

