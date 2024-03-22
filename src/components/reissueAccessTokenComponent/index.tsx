'use client';

import { useEffect, useRef } from 'react';

import { reissueAccessTokenServer } from '@/libs/actions/auth';

import { IProps } from './types';

const ReissueAccessTokenComponent = <T, F>({
  status,
  callback,
  onFail,
}: IProps<T, F>) => {
  const callbackRef = useRef(callback);
  const onFailRef = useRef(onFail);

  useEffect(() => {
    if (status === 401) {
      reissueAccessTokenServer<T, F>(callbackRef.current, onFailRef.current);
    }
  }, [status]);

  return null;
};

export default ReissueAccessTokenComponent;
