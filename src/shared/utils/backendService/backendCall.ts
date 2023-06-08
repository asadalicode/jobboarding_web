// import environment from "@/environment";
import environment from '@src/environment';
import axios from 'axios';
import { handleToastMessage } from '../handleToastMessage';

interface IBackendCall {
  url: string;
  method: string;
  data?: any;
  isNavigate?: boolean;
  isShowErrorMessage?: boolean;
  contentType?: string;
}

export const backendCall = async ({
  url,
  method = 'POST',
  data,
  isNavigate = true,
  isShowErrorMessage = true,
  contentType = 'application/json',
}: IBackendCall) => {
  const _headers = {
    'Content-Type': contentType,
    Authorization: `Bearer ${localStorage.getItem('token')}` || '',
  };

  let _response = '';
  await axios(environment.baseUrl + url, {
    method,
    data,
    headers: _headers,
  })
    .then((response: { data: string }) => {
      _response = response.data;
    })
    .catch((error: { response: { data: any; status: number } }) => {
      const _responseData = error.response.data;
      if (isShowErrorMessage) {
        handleToastMessage('error', _responseData.message);
      }
      _response = _responseData;
      // if (error.response.status === 401 && isNavigate) {
      //   window.location.replace('/');
      //   localStorage.clear();
      // }
    });

  return _response;
};
