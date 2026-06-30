"use client";

import React, { MouseEventHandler, ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[1000] flex h-full w-full items-center justify-center bg-black/50 cursor-pointer"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="z-[1001] flex w-[calc(100%-2rem)] md:w-1/3  flex-col items-center rounded-[10px] border-2 border-[var(--primary-text)] bg-black p-4 text-center cursor-default"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
