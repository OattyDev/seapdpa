'use client';

import { useRouter, usePathname } from 'next/navigation';
import { type Locale, localeNames, getAlternateLocale } from '@/lib/i18n';

interface LanguageToggleProps {
  locale: Locale;
}

export function LanguageToggle({ locale }: LanguageToggleProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleToggle = () => {
    const newLocale = getAlternateLocale(locale);
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale);
    }
    
    router.push(newPath);
  };
  
  const alternateLocale = getAlternateLocale(locale);
  
  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-full bg-bg-tertiary text-text-secondary hover:text-text-primary hover:bg-border transition-colors"
      aria-label={`Switch to ${alternateLocale === 'th' ? 'Thai' : 'English'}`}
    >
      <span className={locale === 'th' ? 'text-text-primary' : 'text-text-muted'}>
        {localeNames.th}
      </span>
      <span className="text-text-muted">/</span>
      <span className={locale === 'en' ? 'text-text-primary' : 'text-text-muted'}>
        {localeNames.en}
      </span>
    </button>
  );
}