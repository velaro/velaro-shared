import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  show: boolean;
  children: React.ReactNode;
  maxWidth?: string;
}

interface HeaderProps {
  children: React.ReactNode;
}

interface ModalBodyProps {
  children: React.ReactNode;
}

interface ModalFooterProps {
  children: React.ReactNode;
}

function Modal(props: ModalProps) {
  if (!props.show) {
    return null;
  }

  const maxWidth = props.maxWidth || "max-w-md";

  return ReactDOM.createPortal(
    <div className="modal-backdrop py-10 fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
      <div
        className={`modal rounded relative bg-white w-full m-auto flex-col flex ${maxWidth}`}
      >
        {props.children}
      </div>
    </div>,
    document.getElementById("root")!
  );
}

function ModalHeader(props: HeaderProps) {
  return (
    <div className="modal-header rounded-t bg-gray-100">{props.children}</div>
  );
}

function ModalBody(props: ModalBodyProps) {
  return <div className="modal-body">{props.children}</div>;
}

function ModalFooter(props: ModalFooterProps) {
  return (
    <div className="modal-footer rounded-b bg-gray-100">{props.children}</div>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
