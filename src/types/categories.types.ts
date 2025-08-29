export interface CategoryProps {
  id: number;
  icon: string;
  name: string;
  _count: {
    apis: number;
  };
}

export interface CategoryListProps {
  onSelectCategory: (category: CategoryProps) => void;
}
