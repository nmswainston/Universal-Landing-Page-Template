interface ContactButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function ContactButton({
  variant = 'primary',
  children,
  href,
  onClick,
  className = '',
}: ContactButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white focus:ring-primary',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a
          href={href}
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
            onClick?.();
          }}
          className={classes}
          aria-label={typeof children === 'string' ? children : 'Contact us'}
        >
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        aria-label={typeof children === 'string' ? children : 'Contact us'}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      aria-label={typeof children === 'string' ? children : 'Contact button'}
    >
      {children}
    </button>
  );
}

