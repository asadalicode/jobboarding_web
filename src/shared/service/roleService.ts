import { backendCall } from '../utils/backendService/backendCall';

export const getRole = async (): Promise<IAPIResponse> => {
  const _url = 'candidate/get_roles';
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
