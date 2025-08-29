import { IconProps } from '@customTypes/general.types';
import * as React from 'react';

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
  /*categoryIcon: React.ComponentType<IconProps>;*/
  categoryName: string;
  onBack: () => void;
}
