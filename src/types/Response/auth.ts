export interface IResponseGetUserAuth {
  message: string;
  data: {
    id: number;
    role: {
      authority: string;
    }[];
  } | null;
}
