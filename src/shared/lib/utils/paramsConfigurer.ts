export type paramsType = {
  page?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
};

export const paramsConfigurer = (url: string, params?: paramsType) => {
  if (params) {
    const query = new URLSearchParams();

    if (params.page !== undefined) {
      query.append('page', params.page.toString());
    }

    if (params.pageSize !== undefined) {
      query.append('size', params.pageSize.toString());
    }

    if (params.sortField) {
      query.append('sort', `${params.sortField},${params.sortOrder ?? 'asc'}`);
    }

    if (Array.from(query).length > 0) {
      url += `?${query}`;
    }
  }

  return url;
};
