import { backendCall } from '../../utils/backendService/backendCall';

const baseUrl = 'candidate/jobs/';

export const getWorkNowJob = async (
  data: IJob.SearchParams
): Promise<IAPIResponse> => {
  const _url = `${baseUrl}work_now_jobs`;
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
export const applyWorkNowJob = async (id: string): Promise<IAPIResponse> => {
  const _url = `${baseUrl}apply/work_now_job/${id}`;
  let _response: IAPIResponse = { success: false, data: {} };
  await backendCall({ url: _url, method: 'POST', data: {} }).then(
    (response: any) => {
      const _data: IStripe.CheckoutPayload = {
        id: response.data.id,
        stripeUrl: response.data.url,
      };
      _response = {
        success: !response.error,
        data: _data,
      };
    }
  );

  return _response;
};

export const getPermanentJob = async (
  data: IJob.SearchParams
): Promise<IAPIResponse> => {
  const _url = `${baseUrl}
  permanent_jobs`;
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

export const getAllJobSeeker = async (): Promise<IAPIResponse> => {
  const _url = 'candidate/job_seekers?limit=-1&offset=0&order=desc';
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
export const getAllJobSeekerForEmployer = async (): Promise<IAPIResponse> => {
  const _url = 'employer/job_seekers?limit=-1&offset=0&order=desc';
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
