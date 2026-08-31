'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { type Locale } from '@/lib/i18n';
import { getCommon } from '@/lib/content';
import { LanguageToggle } from './LanguageToggle';
import { Badge } from '../ui/Badge';

interface NavigationProps {
  locale: Locale;
}

export function Navigation({ locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const common = getCommon(locale);
  
  const navItems = [
    { href: `/${locale}`, label: common.nav.home },
    { href: `/${locale}/assess`, label: common.nav.assess },
    { href: `/${locale}/templates`, label: common.nav.templates },
    { href: `/${locale}/checklist`, label: common.nav.checklist },
    { href: `/${locale}/guide`, label: common.nav.guide },
    { href: `/${locale}/about`, label: common.nav.about },
  ];
  
  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-[1120px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link 
            href={`/${locale}`}
            className="flex items-center gap-2 font-semibold text-lg text-text-primary hover:text-accent transition-colors"
          >
            SeaPDPA
            <Badge>{common.disclaimer.badge}</Badge>
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-[6px] transition-colors ${
                  isActive(item.href)
                    ? 'text-accent bg-accent-light'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <LanguageToggle locale={locale} />
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary hover:bg-bg-tertiary rounded-[6px] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-[6px] transition-colors ${
                    isActive(item.href)
                      ? 'text-accent bg-accent-light'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}