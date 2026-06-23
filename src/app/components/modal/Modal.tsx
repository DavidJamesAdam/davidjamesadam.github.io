import React, { MouseEventHandler, ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex h-full w-full items-center justify-center bg-black/50"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="z-[1001] flex h-4/5 w-1/3 flex-col items-center rounded-[10px] border-2 border-[var(--primary-text)] bg-black p-4 text-center m-4"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
