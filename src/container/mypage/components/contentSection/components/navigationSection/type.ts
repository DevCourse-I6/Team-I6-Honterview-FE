export interface NavigationSectionProps {
  activeMenu: 'result' | 'bookmark';
  onClick: (menu: 'result' | 'bookmark') => void;
}
