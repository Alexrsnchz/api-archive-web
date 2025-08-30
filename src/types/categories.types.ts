export interface CategoryProps {
  id: number;
  icon: string;
  name: string;
  _count: {
    apis: number;
  };
}

export interface CategoryListProps {
  selectCategory: (category: CategoryProps) => void;
}

export interface CategoryCardProps extends CategoryListProps {
  category: CategoryProps;
}
