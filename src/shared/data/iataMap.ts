export const IATA_BY_ID: Record<string, string> = {
  '6': 'DME',
  '7': 'OVB',
  // дополнить
};

export const CITY_BY_IATA: Record<string, string> = {
  DME: 'Москва',
  OVB: 'Новосибирск',
  // дополнить
};

export function idToIata(v: unknown): string | undefined {
  const s = String(v ?? '');
  if (/^[A-Z]{3}$/.test(s)) return s;
  return IATA_BY_ID[s];
}

export function labelWithIata(name?: string, id?: unknown, code?: string) {
  const iata = code || idToIata(id);
  return iata ? `${name ?? ''} (${iata})` : (name ?? '');
}

export function ensureOption(
  options: { label: string; value: string }[],
  value?: string,
  fallbackLabel?: string,
) {
  if (!value) return options;
  return options.some((o) => o.value === value)
    ? options
    : [{ label: fallbackLabel ?? value, value }, ...options];
}
