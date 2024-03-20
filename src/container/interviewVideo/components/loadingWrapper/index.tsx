'use client';

import Loading from '@/components/loading';
import Modal from '@/components/modal';
import { useSubmitStatus } from '@/stores/interviewProgress';

const LoadingWrapper = () => {
  const { isSubmit } = useSubmitStatus();

  return (
    <Modal visible={isSubmit}>
      <div className="fit-wrap">
        <Loading />
      </div>
    </Modal>
  );
};

export default LoadingWrapper;
