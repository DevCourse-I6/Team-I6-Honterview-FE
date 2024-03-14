export interface MyPageBookmarkDataType {
  id: number;
  content: string;
  heartsCount?: number;
  categoryNames: string[];
}

export interface MyPageBookmarkDataSectionProps {
  setItemCount: (page: number) => void;
  currentPage: number;
  isVisible: boolean;
}
