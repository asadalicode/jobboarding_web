import { ReactNode } from 'react';

export interface ButtonProps {
  label: string;
  type: any;
  isLoading: boolean;
  color?: any;
  disabled?: boolean;
  variant?: any;
  styleClass?: string;
  labelStyle?: string;
  icon?: any;
  iconAfter?: boolean;
  handleButtonClick?: any;
}

export interface CardProps {
  JobApplication?: any;
  profile_image_url?: any;
  suburb?: ReactNode;
  years_of_experience?: ReactNode;
  CandidateJobHistories?: any;
  first_name?: ReactNode;
  last_name?: ReactNode;
  Role?: any;
  business_name?: ReactNode;
  pay_required?: ReactNode;
  job_location?: ReactNode;
  pay_type?: ReactNode;
  id?: number;
  heading?: string;
  meta?: cardMeta[];
  applicatants?: string;
}

export interface cardMeta {
  icon: any;
  text: string;
}

export interface StorageI {
  data: any;
  userType: string;
  token?: string;
  meta?: any;
}

export interface CustomDialogProps {
  title?: string;
  size?: any;
  isOpen?: any;
  handleClose?: any;
  handleSubmit?: any;
  children?: ReactNode;
  isShowCloseIcon?: boolean;
}
