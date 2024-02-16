'use client';

import { createPortal } from 'react-dom';

import { IProps } from './types';

const Modal = ({
  children,
  visible,
  wrapperClassName,
  onClose,
  ...rest
}: IProps) => {
  const handleClickAway = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { target, currentTarget } = e;

    if (target === currentTarget) {
      onClose();
    }
  };

  if (!visible) {
    return null;
  }

  return createPortal(
    <div
      role="presentation"
      onClick={handleClickAway}
      className={`fixed left-0 top-0 z-50 h-screen w-screen cursor-default bg-black/20 ${wrapperClassName || ''}`}
    >
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${rest.className || ''}`}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
