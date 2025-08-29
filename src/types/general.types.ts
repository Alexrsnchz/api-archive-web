import * as React from 'react';

export interface IconProps {
  className?: string;
}

export interface IconMapProps {
  (props: IconProps): React.JSX.Element;
}

export interface LayoutProps {
  children: React.ReactNode;
}
