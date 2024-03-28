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
    const getAccessToken = async () => {
      await reissueAccessTokenServer<T, F>(
        callbackRef.current,
        onFailRef.current,
      );
    };

    if (status === 401) {
      getAccessToken();
    }
  }, [status]);

  return null;
};

export default ReissueAccessTokenComponent;
