export interface CategoryProps {
  id: number;
  name: string;
  _count: {
    apis: number;
  };
}

export interface CategoryListProps {
  onSelectCategory: (category: CategoryProps) => void;
}
