/* eslint-disable no-lonely-if */
import { backendCall } from '../../utils/backendService/backendCall';

export const getBusinessJobs = async (
  jobType: string
): Promise<IAPIResponse> => {
  const _url = `employer/job?type=${jobType}`;
  let _response: IAPIResponse = {
    success: false,
    data: {},
    message: 'message',
  };
  let _jobs: any;
  await backendCall({ url: _url, method: 'GET' }).then((response: any) => {
    if (jobType === 'WORK_NOW') {
      if (response.data.rows.length) {
        _jobs = response.data.rows.map((item: any) => {
          const _data = {
            id: item.id,
            state: item.job_location,
            startTime: item.shift_start_time,
            finishTime: item.shift_end_time,
            hourlyRate: item.hourly_rate,
            publishTime: item.shift_start_time,
            date: item.createdAt,
            status: item.status,
            role: item.Role.title,
          };
          return _data;
        });
      } else {
        const _jobs1: IBusiness.WorkNowPayload[] = [
          {
            id: '1',
            role: 'Work Now Jobs',
            state: 'Islamabad',
            startTime: '03:33',
            finishTime: '03:34',
            hourlyRate: '$50',
            publishTime: '02:45',
            date: '10-03-2023',
            status: 'Active',
          },
        ];
        _jobs = _jobs1;
      }
    } else {
      if (response.data.rows.length) {
        _jobs = response.data.rows.map((item: any) => {
          const _data = {
            id: item.id,
            role: item.Role.title,
            work: item.JobType.title,
            remuneration: item.pay_required,
            applications: item.applicants_count,
            date: item.createdAt,
            status: item.status,
          };
          return _data;
        });
      } else {
        const _jobs2: IBusiness.PermanantPayload[] = [
          {
            id: '2',
            role: 'Permanant Jobs',
            work: 'full time',
            remuneration: '$5000',
            applications: '10',
            date: '10-03-2023',
            status: 'Active',
          },
        ];
        _jobs = _jobs2;
      }
    }

    _response = {
      success: !response.error,
      data: _jobs,
      message: response.message,
    };
  });

  return _response;
};
export const getApplicationDetail = async (): Promise<IAPIResponse> => {
  const _url = 'employer/job/get_applicants';
  let _response: IAPIResponse = { success: false, data: {} };
  let _jobs: IBusiness.ApplicationDetailPayload[];
  await backendCall({ url: _url, method: 'GET' }).then((response: any) => {
    if (response.data.rows.length) {
      _jobs = response.data.rows.map((item: any) => {
        const _data = {
          id: item.id,
          profile_picture: item.Candidate.profile_image_url,
          applicant_name: {
            employee_name: `${item.Candidate.first_name} ${item.Candidate.last_name}`,
            rating: item.Candidate.rating,
            totalReview: item.Candidate.total_reviews,
          },
          job_role: item.Job.Role.title,
          job_type: item.Job?.JobType?.title,
          email_id: item.Candidate.email,
          phone_number: item.Candidate.phone,
          date: item.createdAt,
          myRating: item.my_rating,
        };
        return _data;
      });
    } else {
      _jobs = [
        {
          id: '1',
          profile_picture: 'xyz.com',
          applicant_name: {
            employee_name: 'Usman',
            rating: 2,
            totalReview: 50,
          },
          job_role: 'Application Detail',
          job_type: 'Permanant',
          email_id: 'xyz@gmail.com',
          phone_number: '0334595545484',
          date: '30-4-2032',
          myRating: 2,
        },
      ];
    }
    _response = {
      success: !response.error,
      data: _jobs,
    };
  });

  return _response;
};

export const getJobsById = async (id: number): Promise<IAPIResponse> => {
  const _url = `employer/job/by_id?id=${id}`;
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

export const getAppliedJobInfo = async (id: string): Promise<IAPIResponse> => {
  const _url = `employer/job/applied_detail?job_application_id=${id}`;
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
export const getJobseekerProfileDetail = async (
  id: string
): Promise<IAPIResponse> => {
  const _url = `employer/job_seeker/${id}`;
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
