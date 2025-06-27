import { useState } from 'react';

export interface TicketResult {
  id: string;
  from: string;
  to: string;
  price: number;
}

export function useSearchTickets() {
  const [results, setResults] = useState<TicketResult[]>([]);
  const [loading, setLoading] = useState(false);

  async function search(params: { categoryId: number; fromId: number; toId: number }) {
    setLoading(true);
    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });
      const data: TicketResult[] = await res.json();
      setResults(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return { results, loading, search };
}
