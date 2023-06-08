import { backendCall } from '../utils/backendService/backendCall';

export const getHomePageData = async (): Promise<IAPIResponse> => {
  const _url = 'guest/home';
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
