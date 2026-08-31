import { notFound } from 'next/navigation';
import { type Locale, isValidLocale } from '@/lib/i18n';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return [{ locale: 'th' }, { locale: 'en' }];
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    notFound();
  }
  
  return (
    <>
      <Navigation locale={locale as Locale} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer locale={locale as Locale} />
    </>
  );
}