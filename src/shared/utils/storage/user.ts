// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const storeUser = (user: any) => {
  localStorage.setItem('user', JSON.stringify(user));
};
export const getUser = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _user: any = await localStorage.getItem('user');
  return JSON.parse(_user);
};
export const getToken = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let _user: any = await localStorage.getItem('user');
  _user = JSON.parse(_user);
  return Object.keys(_user).length > 0 ? _user.token : '';
};
