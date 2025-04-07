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

type UserProfilePropType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: 'Male' | 'Female';
  bvn: string;
  address: string;
  currency: string;
};

type UserGuarantorPropType = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: 'Male' | 'Female';
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

export type UserPropType = {
  status: 'Blaclisted' | 'Inactive' | 'Pending' | 'Active';
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: UserProfilePropType;
  guarantor: UserGuarantorPropType;
  accountBalance: string;
  accountNumber: string;
  socials: UserSocialsPropType;
  education: UserEductaionPropType;
  id: string;
};

export type ButtonPropType = {
  title?: string;
  icon?: JSX.Element;
  handleClick: () => void;
  style?: string;
};

export type ActionButtonPropType = {
  title: string;
  variation: 'activate' | 'blacklist';
};

export type UserDetailMenuProp = { menuTitle: string; path: string };

export type UserDetailHeaderPropType = {
  user: string;
  id: string;
  amount: string;
  accountNo: string;
  bank: string;
};

export type SectionDetailPropType = {
  sectionTitle: string;
  children: ReactNode;
  style?: string;
};
