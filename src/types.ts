import { JSX, ReactNode } from 'react';

export type SideBarMenuPropType<T> = {
  menu: T[];
  menuTitle: string;
  render: (item: T) => ReactNode;
};

export type ItemPropType = {
  pageTitle: string;
  path: string;
  icon: JSX.Element;
};

export type StatPropType = {
  icon: JSX.Element;
  title: string;
  stat: number;
  color: 'users' | 'activeUsers' | 'loans' | 'savings';
};

export type TableHeaderPropType = {
  title: 'organization' | 'username' | 'email' | 'phone number' | 'date joined' | 'status' | '';
};

export type TableDataPropType = {
  data: {
    organization: string;
    username: string;
    email: string;
    phoneNumber: string | number;
    dateJoined: string;
    status: 'inactive' | 'pending' | 'active';
  }[];
};

export type ButtonPropType = {
  title?: string;
  icon?: JSX.Element;
  handleClick: () => void;
  style?: string;
};

export type UserDetailMenuProp = { menuTitle: string; path: string };

export type UserDetailHeaderPropType = {
  user: string;
  id: string;
  amount: string;
  accountNo: string;
  bank: string;
};
