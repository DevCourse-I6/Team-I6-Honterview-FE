'use client';

import Loading from '@/components/loading';
import Modal from '@/components/modal';
import { useLoadingStatus, useSubmitStatus } from '@/stores/interviewProgress';

const LoadingWrapper = () => {
  const { isLoading } = useLoadingStatus();
  const { isSubmit } = useSubmitStatus();

  return (
    <Modal visible={isLoading || isSubmit}>
      <div className="fit-wrap">
        <Loading />
      </div>
    </Modal>
  );
};

export default LoadingWrapper;
