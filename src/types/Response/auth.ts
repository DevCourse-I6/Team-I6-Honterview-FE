export interface IResponseGetUserAuth {
  message: string;
  data: {
    id: number;
    role: string;
  } | null;
}
