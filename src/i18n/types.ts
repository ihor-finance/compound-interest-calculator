import type { en } from './en';

/**
 * Derived from SUPPORTED_LOCALES rather than written out by hand. The previous
 * hand-written union had drifted to 14 entries and still listed 'zh-CN', which
 * this app has never used — every call site cast to it, so the mismatch was
 * invisible until a new language was added.
 */
export type { Locale } from './index';

export type TranslationKeys = typeof en;
