'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { IProps } from './types';

const Modal = ({
  children,
  visible,
  wrapperClassName,
  onClose,
  ...rest
}: IProps) => {
  const [body, setBody] = useState<HTMLElement | null>(null);

  const handleClickAway = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { target, currentTarget } = e;

    if (target === currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    setBody(document.body);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { key } = e;

      if (key === 'Escape') {
        onClose();
      }
    };

    if (visible) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, onClose]);

  if (!visible || !body) {
    return null;
  }

  return createPortal(
    <div
      role="button"
      tabIndex={-1}
      onClick={handleClickAway}
      onKeyDown={() => {}}
      className={`fixed left-0 top-0 z-50 h-screen w-screen cursor-default bg-black/20 ${wrapperClassName || ''}`}
    >
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${rest.className || ''}`}
      >
        {children}
      </div>
    </div>,
    body,
  );
};

export default Modal;
