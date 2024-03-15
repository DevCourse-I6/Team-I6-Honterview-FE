export interface MyPageResultDataType {
  interviewId: number;
  firstQuestionContent: string;
  categoryNames: string[];
  createdAt: string;
  status?: string;
}

export interface MyPageResultDataSectionProps {
  setItemCount: (page: number) => void;
  currentPage: number;
  isVisible: boolean;
}
