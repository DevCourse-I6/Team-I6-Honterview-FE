export interface DataSectionProps {
  activeMenu: 'result' | 'bookmark';
  onFetchData: (page: number) => void;
  currentPage: number;
}

export interface ContentType {
  id: number;
  title: string;
  categoryList: string[];
  createdDate?: string;
}
