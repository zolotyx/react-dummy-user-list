export interface Dictionary<T> {
  [key: string]: T
}

export interface RequestParams {
  page?: number | string;
  per_page?: number;
}

export interface ResponseMeta {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
