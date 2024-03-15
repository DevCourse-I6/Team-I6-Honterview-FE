'use client';

import { useEffect } from 'react';

import { useAnswerVisibilityStatusStore } from '../../stores';
import CheckBox from '../CheckBox';
import { TToggleChangeEvent } from '../CheckBox/types';
import { IProps } from './types';

// TODO: sangmin // 마이페이지에서 결과창으로 다시 접속 시 이전의 공개 여부 체크 여부 결정하기

const CheckBoxWrapper = ({ answerId }: IProps) => {
  const { setAnswerIdList, setInitialAnswerList } =
    useAnswerVisibilityStatusStore();

  useEffect(() => {
    setInitialAnswerList(3);
  }, [setInitialAnswerList]);

  const onChange = (e: TToggleChangeEvent) => {
    setAnswerIdList(Number(e.id));
  };

  return (
    <CheckBox
      checkId={answerId}
      onChange={onChange}
    />
  );
};

export default CheckBoxWrapper;
