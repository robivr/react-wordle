import { createPortal } from 'react-dom';

interface ModalBaseProps {
  children: JSX.Element;
  isOpen: boolean;
  onClose(): void;
}

const ModalBase = ({ children, isOpen, onClose }: ModalBaseProps) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div
        onClick={onClose}
        id="overlay"
        className="fixed top-0 right-0 bottom-0 left-0 bg-black/60"
      ></div>
      <div
        id="modal"
        className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white"
      >
        {children}
      </div>
    </>,
    document.getElementById('modal') as HTMLElement
  );
};

export default ModalBase;
