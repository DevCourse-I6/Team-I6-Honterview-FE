import { create } from 'zustand';

import { AutocompleteDataType } from '../type';

interface AutocompleteSearchStoreType {
  isListVisible: boolean;
  keyboardIndex: number;
  autoCompleteList: AutocompleteDataType[];
  inputValue: string;
  setListVisible: () => void;
  setListInVisible: () => void;
  setAutoCompleteList: (datas: AutocompleteDataType[]) => void;
  setInputValue: (keyword: string) => void;
  setKeyboardIndex: (number: number) => void;
}

const useAutocompleteSearchStore = create<AutocompleteSearchStoreType>(
  (set) => ({
    isListVisible: false,
    keyboardIndex: -1,
    autoCompleteList: [],
    inputValue: '',
    setListVisible: () =>
      set(() => ({
        isListVisible: true,
      })),
    setListInVisible: () =>
      set(() => ({
        isListVisible: false,
      })),
    setAutoCompleteList: (datas) =>
      set(() => ({
        autoCompleteList: datas,
      })),
    setInputValue: (keyword) =>
      set(() => ({
        inputValue: keyword,
      })),
    setKeyboardIndex: (num) =>
      set(() => ({
        keyboardIndex: num,
      })),
  }),
);

export default useAutocompleteSearchStore;
