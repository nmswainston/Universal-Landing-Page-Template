import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { ReviewWidget } from './components/ReviewWidget';
import { ContactButton } from './components/ContactButton';
import { brandingConfig } from './config/branding';

function App() {
  const { contact } = brandingConfig;

  return (
    <Layout>
      <Hero />
      <ServicesGrid />
      <ReviewWidget />
      <section
        id="contact"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary via-secondary to-accent dark:from-primary-dark dark:via-secondary-dark dark:to-accent-dark"
      >
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {contact.email && (
              <ContactButton
                variant="outline"
                href={`mailto:${contact.email}`}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
              >
                Email Us
              </ContactButton>
            )}
            {contact.phone && (
              <ContactButton
                variant="outline"
                href={`tel:${contact.phone}`}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
              >
                Call Us
              </ContactButton>
            )}
            {!contact.email && !contact.phone && (
              <ContactButton
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
              >
                {contact.buttonText}
              </ContactButton>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;

