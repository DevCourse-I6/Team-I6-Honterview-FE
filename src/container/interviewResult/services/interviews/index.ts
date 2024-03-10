import fetchAPI from '@/container/questions/libs/fetchAPI';

import {
  IGetInterviewResult,
  IPatchInterviewVisibility,
  IPatchInterviewVisibilityRequestBody,
} from '../../types/interviews';

export const getInterviewResult = (
  interviewId: number,
): Promise<IGetInterviewResult> => {
  const url = `api/v1/interviews/${interviewId}`;
  return fetchAPI(url);
};

export const patchInterviewVisibility = (
  interviewId: number,
  body: IPatchInterviewVisibilityRequestBody[],
): Promise<IPatchInterviewVisibility> => {
  const url = `api/v1/interviews/${interviewId}/visibility`;
  return fetchAPI(url, 'patch', { body: JSON.stringify(body) });
};
