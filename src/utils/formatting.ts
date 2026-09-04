export const formatCurrency = (value: number, locale: string = 'en-US') => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return value.toLocaleString();
  }
};

export const formatNumber = (value: number, locale: string = 'en-US', maxDecimals: number = 2) => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'decimal',
      maximumFractionDigits: maxDecimals,
    }).format(value);
  } catch {
    return value.toString();
  }
};

/**
 * Groups the digits of a value the user typed into a field: 10000 -> "10 000".
 *
 * Only ever used for display while that field does *not* have focus. The moment
 * it does, InputSection puts the raw text back, so the separators added here are
 * never read back in — which is what makes this safe across 44 locales, where
 * the grouping and decimal characters are all different.
 *
 * Digits are forced to Latin even in locales that would default to their own
 * (Arabic, for one). Elsewhere in the app the local digits are correct, but a
 * field is typed into, and the keyboard produces Latin ones.
 *
 * A fraction is padded to two places when there is one at all (10000.5 ->
 * "10 000,50") and left off entirely when there is not. Extra places the user
 * typed are kept rather than rounded away, so the field never shows a number
 * different from the one being calculated with.
 */
export const formatInputValue = (value: number | string, locale: string = 'en-US'): string => {
  const raw = String(value ?? '');
  const parsed = Number(raw);
  // "", "-" and "1.2.3" all land here: leave whatever was typed alone.
  if (raw === '' || !Number.isFinite(parsed)) return raw;

  const dot = raw.indexOf('.');
  const typedDecimals = dot === -1 ? 0 : Math.min(raw.length - dot - 1, 20);
  const decimals = parsed % 1 === 0 ? 0 : Math.max(2, typedDecimals);

  try {
    return new Intl.NumberFormat(`${locale}-u-nu-latn`, {
      style: 'decimal',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(parsed);
  } catch {
    return raw;
  }
};

export const parseNumber = (value: string): number => {
  const parsed = parseFloat(value.replace(/[^0-9.-]+/g, ""));
  return isNaN(parsed) ? 0 : parsed;
};
