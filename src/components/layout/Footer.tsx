import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { getCommon } from '@/lib/content';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const common = getCommon(locale);
  
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-[1120px] mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <span>SeaPDPA</span>
            <span className="text-border">•</span>
            <span>{common.footer.openSource}</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <Link 
              href={`/${locale}/about`}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              {common.nav.about}
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              {common.footer.contribute}
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-text-muted text-center">
            {common.disclaimer.full}
          </p>
        </div>
      </div>
    </footer>
  );
}