'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowRight, Check, FileText, ClipboardList } from 'lucide-react';
import { type Locale } from '@/lib/i18n';
import { getHome, getCommon, getChecklist } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { Badge } from '@/components/ui/Badge';

export default function HomePage() {
  const params = useParams();
  const locale = params.locale as Locale;
  const home = getHome(locale);
  const common = getCommon(locale);
  const checklistData = getChecklist(locale);
  
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  
  useEffect(() => {
    const saved = localStorage.getItem('seapdpa-checklist-progress');
    if (saved) {
      setCompletedItems(new Set(JSON.parse(saved)));
    }
  }, []);
  
  const totalItems = checklistData.sections.reduce((acc, s) => acc + s.items.length, 0);
  const completedCount = completedItems.size;
  const progressPercent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;
  
  const previewSection = checklistData.sections[0];
  
  const toggleItem = (id: string) => {
    setCompletedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      localStorage.setItem('seapdpa-checklist-progress', JSON.stringify([...next]));
      return next;
    });
  };
  
  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
              {home.hero.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              {home.hero.subtitle}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Link href={`/${locale}/assess`}>
              <Button size="lg">
                {home.cta.primary}
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href={`/${locale}/checklist`}>
              <Button variant="secondary" size="lg">
                {home.cta.secondary}
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <ClipboardList size={18} className="text-accent" />
              <span className="text-sm text-text-secondary">
                <strong className="text-text-primary">{totalItems}</strong> {home.stats.checklistItems}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-accent" />
              <span className="text-sm text-text-secondary">
                <strong className="text-text-primary">10+</strong> {home.stats.templates}
              </span>
            </div>
            <div>
              <Badge variant="success">{home.stats.languages}</Badge>
            </div>
          </div>
        </div>
        
        <Card className="lg:sticky lg:top-24">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold text-text-primary">{home.preview.title}</h2>
                <p className="text-sm text-text-secondary">{home.preview.subtitle}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-accent">{progressPercent}%</div>
                <div className="text-xs text-text-muted">
                  {completedCount}/{totalItems} {common.progress.items}
                </div>
              </div>
            </div>
            
            <Progress value={completedCount} max={totalItems} />
            
            <div className="border-t border-border pt-4 mt-4">
              <h3 className="text-sm font-medium text-text-secondary mb-3">
                {previewSection.title}
              </h3>
              <div className="space-y-2">
                {previewSection.items.slice(0, 4).map((item) => (
                  <label
                    key={item.id}
                    className="flex items-start gap-3 p-2 rounded-[6px] hover:bg-bg-tertiary transition-colors cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={completedItems.has(item.id)}
                      onChange={() => toggleItem(item.id)}
                      className="checkbox-custom mt-0.5"
                    />
                    <span className={`text-sm ${completedItems.has(item.id) ? 'text-text-muted line-through' : 'text-text-primary'}`}>
                      {item.title}
                    </span>
                  </label>
                ))}
              </div>
              <Link 
                href={`/${locale}/checklist`}
                className="inline-flex items-center gap-1 mt-4 text-sm text-accent hover:text-accent-hover transition-colors"
              >
                {common.actions.viewChecklist}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Card>
      </div>
      
      <section className="mt-16 md:mt-24">
        <h2 className="text-2xl font-bold text-text-primary mb-8">
          {home.sections.whyTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {home.sections.whyItems.map((item, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-semibold text-text-primary">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mt-16 md:mt-24">
        <h2 className="text-2xl font-bold text-text-primary mb-8">
          {home.sections.quickStart.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {home.sections.quickStart.steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-light text-accent font-mono font-medium flex items-center justify-center text-sm">
                {step.number}
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-text-primary">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}