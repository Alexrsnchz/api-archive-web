import type { ApiProps } from '@customTypes/apis.types';

export interface SearchListProps {
  results: ApiProps[];
}

export interface SearchMenuProps extends SearchListProps {
  loading: boolean;
  hasSearched: boolean;
  error: Error | null;
}
