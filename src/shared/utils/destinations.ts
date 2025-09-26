import type { DestinationsServerResponse, Destination } from '@/shared/model/destinations.types';

export const DEST_PAGE_LIMIT = 20;

export function normalizeDestinations(raw: DestinationsServerResponse): Destination[] {
  if (Array.isArray(raw)) return raw;

  if (raw && typeof raw === 'object') {
    const keys = ['items', 'data', 'content', 'results', 'list'] as const;
    for (const k of keys) {
      const v = (raw as Record<string, unknown>)[k];
      if (Array.isArray(v)) return v as Destination[];
    }
  }
  return [];
}
