import { backendCall } from '../../utils/backendService/backendCall';

export const getJobRole = async (): Promise<IAPIResponse> => {
  const _url = 'employer/job/roles';
  let _response: IAPIResponse = { success: false, data: {} };
  await backendCall({ url: _url, method: 'GET' }).then((response: any) => {
    const _role: IRole.Payload = response.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      status: item.status,
      screeningQuestioEnabled: item.screening_question_enabled,
    }));
    _response = {
      success: !response.error,
      data: _role,
    };
  });

  return _response;
};
export const getWorkType = async (): Promise<IAPIResponse> => {
  const _url = 'employer/job/work_types';
  let _response: IAPIResponse = { success: false, data: {} };
  await backendCall({ url: _url, method: 'GET' }).then((response: any) => {
    const _role: IRole.Payload = response.data.map((item: any) => ({
      id: item.id,
      title: item.title,
    }));
    _response = {
      success: !response.error,
      data: _role,
    };
  });

  return _response;
};
export const getScreeningQuestion = async (
  roleId: number
): Promise<IAPIResponse> => {
  const _url = `employer/job/screening_questions?role_id=${roleId}`;
  let _response: IAPIResponse = { success: false, data: {} };
  await backendCall({ url: _url, method: 'GET' }).then((response: any) => {
    const _role: screenQuestionPayload.Payload = response.data.rows.map(
      (item: any) => ({
        id: item.id,
        question: item.question,
        type: item.type,
      })
    );
    _response = {
      success: !response.error,
      data: _role,
    };
  });

  return _response;
};
