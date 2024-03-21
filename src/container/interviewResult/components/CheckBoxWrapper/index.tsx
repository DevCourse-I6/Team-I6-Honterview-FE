'use client';

import { useEffect } from 'react';

import { useAnswerVisibilityStatusStore } from '../../stores';
import CheckBox from '../CheckBox';
import { TToggleChangeEvent } from '../CheckBox/types';
import { IProps } from './types';

const visibilityMap = {
  PUBLIC: true,
  PRIVATE: false,
};

const CheckBoxWrapper = ({ answerId, visibility }: IProps) => {
  const { setAnswerIdList, setInitialAnswerList, clearAnswerIdList } =
    useAnswerVisibilityStatusStore();

  useEffect(() => {
    setInitialAnswerList(answerId, visibility);

    return () => clearAnswerIdList();
  }, [setInitialAnswerList, answerId, clearAnswerIdList, visibility]);

  const onChange = (e: TToggleChangeEvent) => {
    setAnswerIdList(Number(e.id));
  };

  return (
    <CheckBox
      checkId={answerId}
      onChange={onChange}
      initialChecked={visibilityMap[visibility]}
    />
  );
};

export default CheckBoxWrapper;
