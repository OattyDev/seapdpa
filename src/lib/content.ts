import type { Locale } from './i18n';
import * as en from '@/content/en';
import * as th from '@/content/th';

const content = {
  en,
  th,
} as const;

export function getContent(locale: Locale) {
  return content[locale];
}

export function getCommon(locale: Locale) {
  return content[locale].common;
}

export function getHome(locale: Locale) {
  return content[locale].home;
}

export function getAssess(locale: Locale) {
  return content[locale].assess;
}

export function getChecklist(locale: Locale) {
  return content[locale].checklist;
}

export function getTemplates(locale: Locale) {
  return content[locale].templates;
}

export function getTemplateContents(locale: Locale) {
  return content[locale].templateContents;
}

export function getGuide(locale: Locale) {
  return content[locale].guide;
}

export function getAbout(locale: Locale) {
  return content[locale].about;
}