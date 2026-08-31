'use client';

import { useParams } from 'next/navigation';
import { ExternalLink, Check, X } from 'lucide-react';
import { type Locale } from '@/lib/i18n';
import { getAbout, getCommon } from '@/lib/content';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  const params = useParams();
  const locale = params.locale as Locale;
  const about = getAbout(locale);
  const common = getCommon(locale);
  
  return (
    <div className="max-w-[800px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="space-y-2 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-text-primary">{about.title}</h1>
        <p className="text-text-secondary">{about.subtitle}</p>
      </div>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">{about.sections.mission.title}</h2>
          <div className="text-text-secondary leading-relaxed whitespace-pre-line">
            {about.sections.mission.content}
          </div>
        </section>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
              <Check size={18} className="text-success" />
              {about.sections.whatIs.title}
            </h2>
            <ul className="space-y-2">
              {about.sections.whatIs.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-success mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          
          <Card>
            <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
              <X size={18} className="text-error" />
              {about.sections.whatIsNot.title}
            </h2>
            <ul className="space-y-2">
              {about.sections.whatIsNot.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="text-error mt-0.5">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
        
        <Card className="border-warning/30 bg-warning/5">
          <div className="flex items-start gap-3">
            <Badge variant="warning" className="mt-1">{common.disclaimer.badge}</Badge>
            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">{about.sections.disclaimer.title}</h2>
              <div className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                {about.sections.disclaimer.content}
              </div>
            </div>
          </div>
        </Card>
        
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">{about.sections.contribute.title}</h2>
          <div className="text-text-secondary leading-relaxed whitespace-pre-line mb-4">
            {about.sections.contribute.content}
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              {about.sections.contribute.cta}
              <ExternalLink size={16} />
            </Button>
          </a>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">{about.sections.license.title}</h2>
          <Card className="bg-bg-tertiary">
            <div className="text-sm text-text-secondary leading-relaxed whitespace-pre-line font-mono">
              {about.sections.license.content}
            </div>
          </Card>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">{about.sections.credits.title}</h2>
          <div className="text-text-secondary leading-relaxed whitespace-pre-line">
            {about.sections.credits.content}
          </div>
        </section>
      </div>
    </div>
  );
}