'use client';

import { createPortal } from 'react-dom';
import { IProps } from './types';
import useClickAway from '@/hooks/useClickAway';

const Modal = ({ children, visible, onClose, ...rest }: IProps) => {
  const ref = useClickAway(onClose);

  return createPortal(
    <div
      style={{ ...rest.style, display: visible ? 'block' : 'none' }}
      className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/30"
    >
      <div
        ref={ref}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;