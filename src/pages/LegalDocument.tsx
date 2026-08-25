import { useEffect, useState } from 'react';
import { LegalPageLayout } from './LegalPageLayout';
import { useTranslation } from '../i18n/useTranslation';
import { SUPPORTED_LOCALES } from '../i18n';
import { loadLegal, en } from './legal-content';
import type { LegalDocument as Document } from './legal-content';

/**
 * Renders either legal document for the current language.
 *
 * Both pages had the same markup copied twice, each with its own hardcoded
 * translation map and its own hand-written direction check. One component that
 * walks a section list replaces both, and the text direction now comes from
 * SUPPORTED_LOCALES so Hebrew is handled as well as Arabic — the old check
 * tested `lang === 'ar'` and silently left Hebrew laid out left to right.
 */
export const LegalDocumentPage = ({ document }: { document: 'privacy' | 'terms' }) => {
  const { locale } = useTranslation();
  const [content, setContent] = useState<Document>(en[document]);

  useEffect(() => {
    let cancelled = false;
    loadLegal(locale).then(loaded => {
      if (!cancelled) setContent(loaded[document]);
    });
    return () => { cancelled = true; };
  }, [locale, document]);

  const dir = SUPPORTED_LOCALES.find(entry => entry.code === locale)?.dir ?? 'ltr';

  return (
    <LegalPageLayout>
      <div dir={dir}>
        <h1>{content.title}</h1>
        <p className="last-updated">{content.updated}</p>

        {content.sections.map(section => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.lead && <p><strong>{section.lead}</strong></p>}
            {section.paragraphs.map((paragraph, index) => (
              <div key={index}>
                <p>{paragraph}</p>
                {/* The list belongs after the first paragraph, which introduces it. */}
                {index === 0 && section.list && (
                  <ul>
                    {section.list.map(item => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </section>
        ))}
      </div>
    </LegalPageLayout>
  );
};

export const PrivacyPolicy = () => <LegalDocumentPage document="privacy" />;
export const TermsOfUse = () => <LegalDocumentPage document="terms" />;
