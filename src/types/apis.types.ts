import type { IconMapProps } from '@customTypes/general.types';

export interface ApiProps {
  id: string;
  name: string;
  pricing: string;
  description: string;
  author: string;
  url: string;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface SearchMenuProps {
  query: string;
  results: ApiProps[];
}

export interface ApiListProps {
  categoryId: number;
  categoryIcon: IconMapProps;
  categoryName: string;
  onBack: () => void;
}
