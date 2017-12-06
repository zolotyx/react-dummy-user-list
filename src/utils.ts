export type Dictionary<T> = {
  [key: string]: T
}

export type RequestParams = {
  page?: number;
  per_page?: number;
}


export interface ResponseMeta {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
