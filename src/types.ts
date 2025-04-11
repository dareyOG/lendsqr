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

enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Blacklisted = 'blacklisted',
  Pending = 'pending'
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
  orgName: string;
  accountBalance: string;
  accountNumber: string;
  status: Status;
  education: UserEductaionPropType;
  guarantor: UserGuarantorPropType;
  profile: UserProfilePropType;
  socials: UserSocialsPropType;
};

export type ButtonPropType = {
  title?: string;
  icon?: JSX.Element;
  disabled: boolean;
  handleClick?: () => void;
  style?: string;
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
  style?: string;
};

export type UserCredentialsPropType = {
  email: string;
  password: string;
};

export type UserStatePropType = {
  user: UserCredentialsPropType | null;
  isAuthenticated: boolean;
};

export type UserActionPropType = {
  type: 'log_in' | 'log_out';
  payload?: UserCredentialsPropType;
};

export type AuthContextPropType = UserStatePropType & {
  username: string | null;
  handleLogout: () => void;
  handleLogin: (currUser: UserCredentialsPropType) => void;
};
