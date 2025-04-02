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

export type StatType = {
  icon: JSX.Element;
  title: string;
  stat: number;
  color: 'users' | 'activeUsers' | 'loans' | 'savings';
};

export type TableHeaderType = {
  title: 'organization' | 'username' | 'email' | 'phone number' | 'date joined' | 'status' | '';
};

export type TableDataType = {
  data: {
    organization: string;
    username: string;
    email: string;
    phoneNumber: string | number;
    dateJoined: string;
    status: 'inactive' | 'pending' | 'active';
  }[];
};
