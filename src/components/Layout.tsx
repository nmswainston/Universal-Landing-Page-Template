import { ReactNode } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';
import { brandingConfig } from '../config/branding';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { companyName, logo, contact } = brandingConfig;

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="container-custom">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                {logo && (
                  <img
                    src={logo}
                    alt={`${companyName} logo`}
                    className="h-8 w-auto"
                    onError={(e) => {
                      // Fallback if logo doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                )}
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  {companyName}
                </span>
              </div>
              <ThemeSwitcher />
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-gray-900 dark:bg-black text-white py-8">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-gray-400">
                  © {new Date().getFullYear()} {companyName}. All rights reserved.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {contact.email}
                  </a>
                )}
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {contact.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

