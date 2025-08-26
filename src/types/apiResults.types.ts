export interface ApiResult {
  id: string;
  name: string;
  description: string;
  author: string;
  url: string;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SearchMenuProps {
  query: string;
  results: ApiResult[];
}
