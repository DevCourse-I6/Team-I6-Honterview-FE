export interface IProps<T, F> {
  status: number;
  callback: () => T;
  onFail?: () => F;
}
