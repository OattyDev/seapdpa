'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { ChevronDown, ChevronRight, RotateCcw, Printer } from 'lucide-react';
import { type Locale } from '@/lib/i18n';
import { getChecklist, getCommon } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';

export default function ChecklistPage() {
  const params = useParams();
  const locale = params.locale as Locale;
  const checklist = getChecklist(locale);
  const common = getCommon(locale);
  
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['governance']));
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  
  useEffect(() => {
    const saved = localStorage.getItem('seapdpa-checklist-progress');
    if (saved) {
      setCompletedItems(new Set(JSON.parse(saved)));
    }
  }, []);
  
  const totalItems = checklist.sections.reduce((acc, s) => acc + s.items.length, 0);
  const completedCount = completedItems.size;
  
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
  
  const toggleSection = (id: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };
  
  const toggleItemExpand = (id: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };
  
  const handleReset = () => {
    if (confirm(checklist.resetConfirm)) {
      setCompletedItems(new Set());
      localStorage.removeItem('seapdpa-checklist-progress');
    }
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  const getSectionProgress = (sectionId: string) => {
    const section = checklist.sections.find(s => s.id === sectionId);
    if (!section) return { completed: 0, total: 0 };
    const total = section.items.length;
    const completed = section.items.filter(item => completedItems.has(item.id)).length;
    return { completed, total };
  };
  
  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary">{checklist.title}</h1>
          <p className="text-text-secondary mt-1">{checklist.subtitle}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={handlePrint} className="no-print">
            <Printer size={16} />
            {checklist.printView}
          </Button>
          <Button variant="ghost" size="sm" onClick={handleReset} className="no-print">
            <RotateCcw size={16} />
            {checklist.resetProgress}
          </Button>
        </div>
      </div>
      
      <Card className="mb-8 no-print">
        <div className="flex items-center gap-6">
          <div className="flex-1">
            <Progress value={completedCount} max={totalItems} />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-accent">
              {Math.round((completedCount / totalItems) * 100)}%
            </div>
            <div className="text-sm text-text-secondary">
              {completedCount} {common.progress.of} {totalItems} {common.progress.items}
            </div>
          </div>
        </div>
      </Card>
      
      <div className="space-y-4">
        {checklist.sections.map((section) => {
          const { completed, total } = getSectionProgress(section.id);
          const isExpanded = expandedSections.has(section.id);
          
          return (
            <Card key={section.id} className="overflow-hidden p-0">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-bg-tertiary transition-colors text-left"
                aria-expanded={isExpanded}
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? (
                    <ChevronDown size={20} className="text-text-secondary" />
                  ) : (
                    <ChevronRight size={20} className="text-text-secondary" />
                  )}
                  <h2 className="text-lg font-semibold text-text-primary">{section.title}</h2>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={completed} max={total} className="w-24 hidden sm:flex" />
                  <span className="text-sm text-text-secondary tabular-nums">
                    {completed}/{total}
                  </span>
                </div>
              </button>
              
              {isExpanded && (
                <div className="border-t border-border">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-border last:border-b-0"
                    >
                      <div className="flex items-start gap-3 p-4 md:px-6">
                        <input
                          type="checkbox"
                          id={item.id}
                          checked={completedItems.has(item.id)}
                          onChange={() => toggleItem(item.id)}
                          className="checkbox-custom mt-1"
                        />
                        <div className="flex-1 min-w-0">
                          <label
                            htmlFor={item.id}
                            className={`block font-medium cursor-pointer ${
                              completedItems.has(item.id) ? 'text-text-muted line-through' : 'text-text-primary'
                            }`}
                          >
                            {item.title}
                          </label>
                          {item.description && (
                            <button
                              onClick={() => toggleItemExpand(item.id)}
                              className="text-sm text-text-secondary hover:text-accent transition-colors mt-1"
                            >
                              {expandedItems.has(item.id) ? '▼' : '▶'} {common.actions.learnMore}
                            </button>
                          )}
                          {expandedItems.has(item.id) && item.description && (
                            <p className="text-sm text-text-secondary mt-2 pl-4 border-l-2 border-border">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}