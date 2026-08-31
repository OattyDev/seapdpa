'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { type Locale } from '@/lib/i18n';
import { getGuide } from '@/lib/content';
import { Card } from '@/components/ui/Card';

export default function GuidePage() {
  const params = useParams();
  const locale = params.locale as Locale;
  const guide = getGuide(locale);
  
  const [activeSection, setActiveSection] = useState(guide.sections[0].id);
  
  const currentSection = guide.sections.find(s => s.id === activeSection) || guide.sections[0];
  
  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="space-y-2 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-text-primary">{guide.title}</h1>
        <p className="text-text-secondary">{guide.subtitle}</p>
      </div>
      
      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Card className="p-4">
            <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
              {guide.toc}
            </h2>
            <nav className="space-y-1">
              {guide.sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-[6px] transition-colors text-left ${
                    activeSection === section.id
                      ? 'bg-accent-light text-accent font-medium'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                  }`}
                >
                  <ChevronRight size={14} className={activeSection === section.id ? 'text-accent' : 'text-text-muted'} />
                  {section.title}
                </button>
              ))}
            </nav>
          </Card>
        </aside>
        
        <main>
          <Card>
            <article className="prose prose-neutral dark:prose-invert max-w-none">
              <div 
                className="guide-content"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(currentSection.content) }}
              />
            </article>
          </Card>
        </main>
      </div>
    </div>
  );
}

function parseMarkdown(content: string): string {
  return content
    .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold text-text-primary mt-6 mb-3">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold text-text-primary mt-8 mb-4 pb-2 border-b border-border">$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-text-primary">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^\- (.*$)/gm, '<li class="text-text-secondary ml-4">$1</li>')
    .replace(/^(\d+)\. (.*$)/gm, '<li class="text-text-secondary ml-4"><span class="font-medium text-text-primary">$1.</span> $2</li>')
    .replace(/(<li.*<\/li>\n)+/g, '<ul class="space-y-2 my-4">$&</ul>')
    .replace(/\n\n/g, '</p><p class="text-text-secondary leading-relaxed my-4">')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells.every(c => c.trim().match(/^-+$/))) {
        return '';
      }
      const isHeader = !match.includes('---');
      const tag = isHeader ? 'th' : 'td';
      const className = isHeader 
        ? 'px-4 py-2 text-left text-sm font-semibold text-text-primary bg-bg-tertiary'
        : 'px-4 py-2 text-sm text-text-secondary border-t border-border';
      return `<tr>${cells.map(c => `<${tag} class="${className}">${c.trim()}</${tag}>`).join('')}</tr>`;
    })
    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table class="w-full border border-border rounded-[6px] overflow-hidden my-4"><tbody>$&</tbody></table>');
}