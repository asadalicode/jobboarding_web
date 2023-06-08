import { backendCall } from '../../utils/backendService/backendCall';

export const workNowJobAPICall = async (
  data: IJob.WorkNowParams
): Promise<IAPIResponse> => {
  const _url = 'employer/job';
  let _response: IAPIResponse = { success: false, data: {}, message: '' };
  await backendCall({ url: _url, method: 'POST', data }).then(
    (response: any) => {
      _response = {
        success: !response.error,
        data: response?.data,
        message: response?.message,
      };
    }
  );

  return _response;
};
export const permanentJobAPICall = async (
  data: IJob.PermanentJobParams
): Promise<IAPIResponse> => {
  const _url = 'employer/job';
  let _response: IAPIResponse = { success: false, data: {}, message: '' };
  await backendCall({ url: _url, method: 'POST', data }).then(
    (response: any) => {
      _response = {
        success: !response.error,
        data: response?.data,
        message: response?.message,
      };
    }
  );

  return _response;
};

export const getJobTypes = async (): Promise<IAPIResponse> => {
  const _url = 'candidate/get_job_types';
  let _response: IAPIResponse = { success: false, data: {}, message: '' };
  await backendCall({ url: _url, method: 'GET', data: {} }).then(
    (response: any) => {
      _response = {
        success: !response.error,
        data: response?.data,
        message: response?.message,
      };
    }
  );

  return _response;
};

export const getQualificationCertification = async (type = 'ALL') => {
  const _url = `candidate/get_qualifications/${type}`;
  let _response: IAPIResponse = { success: false, data: {}, message: '' };
  await backendCall({ url: _url, method: 'GET', data: {} }).then(
    (response: any) => {
      _response = {
        success: !response.error,
        data: response?.data,
        message: response?.message,
      };
    }
  );

  return _response;
};
