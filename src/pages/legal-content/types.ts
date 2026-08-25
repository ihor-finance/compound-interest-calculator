/**
 * Shape of the two legal documents.
 *
 * They used to live as flat `h1/p1/h2/p2…` maps inside the page components,
 * which made it impossible to tell at a glance whether a translation was
 * complete and left the pages covering 14 of the app's 43 languages. Fixed-
 * length tuples let scripts/test-legal.ts prove every language has every
 * section rather than trusting that it does.
 */

export interface LegalSection {
  heading: string;
  /** Optional bold opening line, for sections that lead with a statement. */
  lead?: string;
  /** Body paragraphs, rendered in order. */
  paragraphs: string[];
  /** Optional bullet list, rendered after the first paragraph. */
  list?: string[];
}

export interface LegalDocument {
  title: string;
  /** Free text, e.g. "Last updated: August 2026". */
  updated: string;
  sections: LegalSection[];
}

/** Both documents for one language. */
export interface LegalContent {
  privacy: LegalDocument;
  terms: LegalDocument;
}

/** Sections each document must have, in order. Used by the test. */
export const PRIVACY_SECTIONS = 8;
export const TERMS_SECTIONS = 9;
