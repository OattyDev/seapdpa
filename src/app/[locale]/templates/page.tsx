'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Download, Copy, Check, FileText, Eye } from 'lucide-react';
import { type Locale } from '@/lib/i18n';
import { getTemplates, getTemplateContents, getCommon } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export default function TemplatesPage() {
  const params = useParams();
  const locale = params.locale as Locale;
  const templates = getTemplates(locale);
  const templateContents = getTemplateContents(locale);
  const common = getCommon(locale);
  
  const [previewId, setPreviewId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const handleDownload = (id: string, filename: string) => {
    const content = templateContents[id];
    if (!content) return;
    
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const handleCopy = async (id: string) => {
    const content = templateContents[id];
    if (!content) return;
    
    await navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };
  
  return (
    <div className="max-w-[1120px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="space-y-2 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-text-primary">{templates.title}</h1>
        <p className="text-text-secondary max-w-2xl">{templates.subtitle}</p>
      </div>
      
      <div className="mb-6 p-4 bg-bg-secondary border border-border rounded-[8px]">
        <p className="text-sm text-text-secondary">
          <strong className="text-text-primary">{common.disclaimer.badge}:</strong> {templates.disclaimer}
        </p>
      </div>
      
      <div className="space-y-10">
        {templates.categories.map((category) => (
          <section key={category.id}>
            <h2 className="text-xl font-semibold text-text-primary mb-4 pb-2 border-b border-border">
              {category.title}
            </h2>
            <div className="space-y-3">
              {category.templates.map((template) => (
                <div key={template.id}>
                  <div className="flex items-center justify-between p-4 bg-bg-secondary border border-border rounded-[8px] hover:border-text-muted transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-[6px] bg-bg-tertiary flex items-center justify-center">
                        <FileText size={20} className="text-text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-text-primary">{template.title}</h3>
                        <p className="text-sm text-text-secondary">{template.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge>{template.format}</Badge>
                      {templateContents[template.id] && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setPreviewId(previewId === template.id ? null : template.id)}
                            aria-expanded={previewId === template.id}
                          >
                            <Eye size={16} />
                            <span className="hidden sm:inline">{templates.actions.preview}</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy(template.id)}
                          >
                            {copiedId === template.id ? <Check size={16} /> : <Copy size={16} />}
                            <span className="hidden sm:inline">
                              {copiedId === template.id ? common.actions.copied : templates.actions.copyContent}
                            </span>
                          </Button>
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => handleDownload(template.id, template.filename)}
                          >
                            <Download size={16} />
                            <span className="hidden sm:inline">{templates.actions.download}</span>
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                  {previewId === template.id && templateContents[template.id] && (
                    <div className="mt-2 p-4 bg-bg-tertiary border border-border rounded-[8px] overflow-x-auto">
                      <pre className="text-sm text-text-primary font-mono whitespace-pre-wrap">
                        {templateContents[template.id]}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}