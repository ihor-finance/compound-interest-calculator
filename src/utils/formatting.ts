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

export const parseNumber = (value: string): number => {
  const parsed = parseFloat(value.replace(/[^0-9.-]+/g, ""));
  return isNaN(parsed) ? 0 : parsed;
};
