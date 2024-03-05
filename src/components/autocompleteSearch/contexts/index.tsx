import React, {
  createContext,
  RefObject,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

import useClickAway from '@/hooks/useClickAway';

import { AutocompleteDataType } from '../type';
import { AutocompleteContextProps, AutocompleteProviderProps } from './type';

const AutocompleteContext = createContext<AutocompleteContextProps>({
  autocompleteRef: null,
  autoItemRef: null,
  isListVisible: false,
  setIsListVisible: () => {},
  inputValue: '',
  setInputValue: () => {},
  autocompleteList: [],
  setAutocompleteList: () => {},
  keyboardIndex: -1,
  setKeyboardIndex: () => {},
  handleItemClick: () => {},
});
export const useAutocomplete = () => useContext(AutocompleteContext);

const AutocompleteProvider = ({
  children,
  onSelectItem,
}: AutocompleteProviderProps) => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [keyboardIndex, setKeyboardIndex] = useState(-1);
  const [autocompleteList, setAutocompleteList] = useState<
    AutocompleteDataType[]
  >([]);

  const autocompleteRef = useClickAway(() =>
    setIsListVisible(false),
  ) as RefObject<HTMLDivElement>;

  const autoItemRef = useRef(null);

  const value = useMemo(() => {
    const handleItemClick = (item: AutocompleteDataType) => {
      setInputValue('');
      setIsListVisible(false);
      onSelectItem(item);
    };
    return {
      autocompleteRef,
      autoItemRef,
      isListVisible,
      setIsListVisible,
      inputValue,
      setInputValue,
      autocompleteList,
      setAutocompleteList,
      keyboardIndex,
      setKeyboardIndex,
      handleItemClick,
    };
  }, [
    autocompleteList,
    autocompleteRef,
    inputValue,
    isListVisible,
    keyboardIndex,
    onSelectItem,
  ]);

  return (
    <AutocompleteContext.Provider value={value}>
      {children}
    </AutocompleteContext.Provider>
  );
};

export default AutocompleteProvider;
