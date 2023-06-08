import { backendCall } from '../../utils/backendService/backendCall';

export const loginCandidateAPICall = async (
  data: IAuth.ILoginParams
): Promise<IAPIResponse> => {
  const _url = 'candidate/login';
  let _response: IAPIResponse = { success: false, data: {} };
  await backendCall({ url: _url, method: 'POST', data }).then(
    (response: any) => {
      _response = {
        success: !response.error,
        data: response?.data,
      };
    }
  );

  return _response;
};

export const getProfile = async (): Promise<IAPIResponse> => {
  const _url = 'candidate/profile';
  let _response: IAPIResponse = { success: false, data: {} };
  await backendCall({ url: _url, method: 'GET', data: {} }).then(
    (response: any) => {
      _response = {
        success: !response.error,
        data: response?.data,
      };
    }
  );

  return _response;
};

export const loginBusinessAPICall = async (
  data: IAuth.ILoginParams
): Promise<IAPIResponse> => {
  const _url = 'employer/login';
  let _response: IAPIResponse = { success: false, data: {} };
  await backendCall({ url: _url, method: 'POST', data }).then(
    (response: any) => {
      _response = {
        success: !response.error,
        data: response?.data,
      };
    }
  );

  return _response;
};
export const businessRegisterAPICall = async (data: FormData) => {
  const _url = 'employer/register';
  let _response: IAPIResponse = { success: false, message: '', data: {} };
  await backendCall({
    url: _url,
    method: 'POST',
    data,
    contentType: 'multipart/form-data;',
  }).then((response: any) => {
    _response = {
      success: !response?.error,
      message: response.message,
    };
  });
  return _response;
};

export const jobSeekerRegisterAPICall = async (data: FormData) => {
  const _url = 'candidate/register';
  let _response: IAPIResponse = { success: false, message: '', data: {} };
  await backendCall({
    url: _url,
    method: 'POST',
    data,
    contentType: 'multipart/form-data;',
  }).then((response: any) => {
    _response = {
      success: !response?.error,
      message: response.message,
    };
  });
  return _response;
};
