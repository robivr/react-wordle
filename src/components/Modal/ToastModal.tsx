import React from 'react';
import { createPortal } from 'react-dom';

interface ToastProps {
  toast: string;
}

const ToastModal = (props: ToastProps) => {
  return createPortal(
    <div className="fixed bg-white left-[50%] transform -translate-x-1/2 translate-y-11 px-2 py-0 rounded-md lg:translate-y-20 lg:py-1">
      {props.toast}
    </div>,
    document.getElementById('toast') as HTMLElement
  );
};

export default ToastModal;
