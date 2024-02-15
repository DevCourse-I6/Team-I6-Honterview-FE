'use client';

import { notify } from '@/components/toast';

const ToastDev = () => {
  // 세 번째 인수는 선택입니다.
  const handleSuccessClick = () => {
    notify('success', '~~을 성공 했습니다.', {
      position: 'top-center',
      onOpen: () => console.log('열리기 전 콜백함수'),
      onClose: () => console.log('닫힌 후 콜백함수'),
    });
  };

  const handleErrorClick = () => {
    notify('error', '~~을 실패 했습니다.');
  };

  const handleInfoClick = () => {
    notify('info', '~~를 했습니다.');
  };

  const handleWarningClick = () => {
    notify('warning', '~~을 경고 했습니다.');
  };

  return (
    <>
      <button
        type="button"
        className="rounded-lg bg-slate-300 p-4"
        onClick={handleSuccessClick}
      >
        성공 Toast가 나옵니다.
      </button>
      <button
        type="button"
        className="rounded-lg bg-slate-300 p-4"
        onClick={handleErrorClick}
      >
        경고 Toast가 나옵니다.
      </button>
      <button
        type="button"
        className="rounded-lg bg-slate-300 p-4"
        onClick={handleInfoClick}
      >
        정보 Toast가 나옵니다.
      </button>
      <button
        type="button"
        className="rounded-lg bg-slate-300 p-4"
        onClick={handleWarningClick}
      >
        주의 Toast가 나옵니다.
      </button>
    </>
  );
};

export default ToastDev;
