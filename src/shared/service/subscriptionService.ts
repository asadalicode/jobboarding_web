import { backendCall } from '../utils/backendService/backendCall';

export const getAllSubscriptoionAPICall = async () => {
  const _url = 'employer/subscription/plans';
  let _response: IAPIResponse = { success: false, message: '', data: {} };
  await backendCall({
    url: _url,
    method: 'GET',
    data: {},
    contentType: 'multipart/form-data;',
  }).then((response: any) => {
    _response = {
      success: !response?.error,
      message: response.message,
      data: response.data,
    };
  });
  return _response;
};
