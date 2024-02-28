'use client';

import './style/style.css';

import useClickAway from '@/hooks/useClickAway';

import AutocompleteBox from './components/autocompleteBox';
import AutocompleteInput from './components/autocompleteInput';
import useAutocompleteSearchStore from './store/useAutocompleteSearchStore';
import { AutocompleteSearchProps } from './type';

const AutocompleteSearch = ({
  totalDatas,
  selectedList,
  onSelectItem,
}: AutocompleteSearchProps) => {
  const { setListInVisible } = useAutocompleteSearchStore();

  const ref = useClickAway(() => setListInVisible());

  return (
    <div
      className="flex flex-col"
      ref={ref}
    >
      <AutocompleteInput
        totalDatas={totalDatas}
        selectedList={selectedList}
        onSelectItem={onSelectItem}
      />
      <AutocompleteBox onSelectItem={onSelectItem} />
    </div>
  );
};

export default AutocompleteSearch;
