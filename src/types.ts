import { JSX, ReactNode } from 'react';

export type MenuPropType = {
  pageTitle: string;
  path: string;
  icon: JSX.Element;
};

export type SideBarMenuPropType<T> = {
  menu: T[];
  menuTitle: string;
  render: (item: T) => ReactNode;
};

export type StatPropType = {
  icon: JSX.Element;
  title: string;
  stat: number;
  color: 'users' | 'activeUsers' | 'loans' | 'savings';
};

enum Gender {
  Male = 'Male',
  Female = 'Female'
}

type UserProfilePropType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: Gender;
  bvn: string;
  address: string;
  currency: string;
};

type UserGuarantorPropType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: Gender;
  address: string;
};

type UserSocialsPropType = { facebook: string; instagram: string; twitter: string };

type UserEductaionPropType = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
};

export type UsersPropType = {
  id: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  lastActiveDate: string;
  status: string;
  orgName: string;
  accountBalance: string;
  accountNumber: string;
  education: UserEductaionPropType;
  guarantor: UserGuarantorPropType;
  profile: UserProfilePropType;
  socials: UserSocialsPropType;
};

export type ButtonPropType = {
  title?: string | number;
  icon?: JSX.Element;
  disabled?: boolean;
  handleClick?: () => void;
  className?: string;
};

export type ActionButtonPropType = ButtonPropType & {
  variation: 'activate' | 'blacklist';
};

export type UserDetailMenuProp = { menuTitle: string; path: string };

export type UserDetailsHeaderPropType = {
  user: string;
  id: string;
  amount: string;
  accountNo: string;
  bank: string;
};

export type SectionDetailsPropType = {
  sectionTitle: string;
  children: ReactNode;
  className?: string;
};

export type PaginationPropType = {
  usersPerPage: number;
  activePage: number;
  setActivePage: (page: number) => void;
  setUsersPerPage: (value: number) => void;
};

export type LoginPropType = {
  email: string;
  password: string;
};

export type AuthContextProviderPropType = {
  username: string | null;
  token: string;
  login: (data: LoginPropType) => void;
  logout: () => void;
};
