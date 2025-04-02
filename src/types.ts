import { JSX, ReactNode } from 'react';

export type SideBarMenuType<T> = {
  menu: T[];
  menuTitle: string;
  render: (item: T) => ReactNode;
};

export type ItemType = {
  pageTitle: string;
  path: string;
  icon: JSX.Element;
};
