export type TToggleChangeEvent = { checked: boolean; id: string };

export interface IProps {
  checkId: number;
  onChange?: ({ checked, id }: TToggleChangeEvent) => void;
}
