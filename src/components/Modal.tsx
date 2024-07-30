import React from "react";
import { createPortal } from "react-dom";
import IconClose1 from "../icons/IconClose1";

interface ModalProps {
  show: boolean;
  children: React.ReactNode;
  maxWidth?: string;
}

interface HeaderProps {
  title: string;
  onClose(): void;
}

interface ModalBodyProps {
  children: React.ReactNode;
}

interface ModalFooterProps {
  children?: React.ReactNode;
}

function Modal(props: ModalProps) {
  if (!props.show) {
    return null;
  }

  const maxWidth = props.maxWidth || "max-w-md";

  return createPortal(
    <div className="modal-backdrop py-10 fixed inset-0 z-50 overflow-auto bg-black bg-opacity-30 flex">
      <div
        className={`modal rounded-2xl shadow-lg relative bg-white w-full m-auto flex-col flex ${maxWidth}`}
      >
        {props.children}
      </div>
    </div>,
    document.getElementById("root")!
  );
}

function ModalHeader(props: HeaderProps) {
  return (
    <div className="modal-header rounded-t ">
      <div className="m-4 text-lg font-medium flex justify-between">
        <div>{props.title}</div>
        <button onClick={() => props.onClose()}>
          <IconClose1 />
        </button>
      </div>
    </div>
  );
}

function ModalBody(props: ModalBodyProps) {
  return <div className="modal-body">{props.children}</div>;
}

function ModalFooter(props: ModalFooterProps) {
  return (
    <div className="modal-footer rounded-b border-t border-slate-gray-50">
      {props.children}
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
