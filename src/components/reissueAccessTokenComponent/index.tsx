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
    const issueToken = async () => {
      if (onFailRef.current) {
        await reissueAccessTokenServer<T, F>(
          callbackRef.current,
          onFailRef.current,
        );
      } else {
        await reissueAccessTokenServer<T, F>(callbackRef.current);
      }
    };

    if (status === 401) {
      issueToken();
    }
  }, [status]);
  return null;
};

export default ReissueAccessTokenComponent;
