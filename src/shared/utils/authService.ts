import { useNavigate } from 'react-router-dom';
import { STORAGE } from '../const';
import { StorageI } from '../interfaces';

export const SetStorage = (props: StorageI, remember?: boolean) => {
  if (remember) {
    localStorage.setItem(STORAGE, JSON.stringify(props));
    localStorage.setItem('token', props.data.token);
  } else {
    sessionStorage.setItem(STORAGE, JSON.stringify(props));
    sessionStorage.setItem('token', props.data.token);
    localStorage.setItem(STORAGE, JSON.stringify(props));
    localStorage.setItem('token', props.data.token);
  }
};

export const GetStorage = () => {
  const savedCredentials =
    sessionStorage.getItem(STORAGE) || localStorage.getItem(STORAGE);
  let credentials: StorageI | null = null;
  if (savedCredentials) {
    credentials = JSON.parse(savedCredentials);
  }
  return credentials;
};

export const IsJobSeeker = () => {
  if (IsAuthenticated()) {
    if (GetStorage()?.userType === 'jobSeeker') return true;
    return false;
  }
  return false;
};
export const IsBusiness = () => {
  if (IsAuthenticated()) {
    if (GetStorage()?.userType === 'business') return true;
    return false;
  }
  return false;
};

export const Logout = async () => {
  sessionStorage.removeItem(STORAGE);
  localStorage.removeItem(STORAGE);
  return true;
};

export const IsAuthenticated = (): boolean => {
  const savedCredentials =
    sessionStorage.getItem(STORAGE) || localStorage.getItem(STORAGE);
  let credentials: StorageI | null = null;
  if (savedCredentials) {
    credentials = JSON.parse(savedCredentials);
  }
  return !!credentials;
};

export const SetDateIntoStorage = (key: string, props: any) => {
  localStorage.setItem(key, JSON.stringify(props));
};
export const GetDateFromStorage = (key: string) => localStorage.getItem(key);

export default {
  SetStorage,
  GetStorage,
  IsAuthenticated,
  Logout,
  SetDateIntoStorage,
};
