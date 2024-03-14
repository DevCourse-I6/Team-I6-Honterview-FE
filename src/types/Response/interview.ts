import { IInterview } from '../interview';

export interface IResponseGetInterview {
  message: string;
  data: IInterview;
}

export interface IResponseGetUploadUrl {
  message: string;
  data: {
    videoId: number;
    uploadUrl: string;
  };
}

export interface IResponsePostInterview {
  message: string;
  data: {
    questionId: number;
    answerId: number;
  };
}
