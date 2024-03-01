export type TToggleChangeEvent = { checked: boolean; id: string };

export interface IProps {
  checkId: string;
  onChange?: ({ checked, id }: TToggleChangeEvent) => void;
}
