import React, { useEffect, useRef, useCallback } from "react";
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
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      // Find the close button and click it
      const closeButton = modalRef.current?.querySelector(".modal-header button");
      if (closeButton instanceof HTMLElement) {
        closeButton.click();
      }
    }

    // Focus trap
    if (e.key === "Tab" && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0] as HTMLElement;
      const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable?.focus();
          e.preventDefault();
        }
      }
    }
  }, []);

  useEffect(() => {
    if (props.show) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.addEventListener("keydown", handleKeyDown);

      // Focus the first focusable element in the modal
      requestAnimationFrame(() => {
        if (modalRef.current) {
          const firstFocusable = modalRef.current.querySelector(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          ) as HTMLElement;
          firstFocusable?.focus();
        }
      });

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        // Return focus to the previously focused element
        previousFocusRef.current?.focus();
      };
    }
  }, [props.show, handleKeyDown]);

  if (!props.show) {
    return null;
  }

  const maxWidth = props.maxWidth || "max-w-md";

  return createPortal(
    <div className="modal-backdrop py-10 fixed inset-0 z-50 overflow-auto bg-black bg-opacity-30 flex">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`modal rounded-2xl shadow-lg relative bg-white dark:bg-stone-500 dark:text-white w-full m-auto flex-col flex ${maxWidth} p-6 `}
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
      <div className="mb-4 text-lg font-medium flex justify-between">
        <div id="modal-title">{props.title}</div>
        <button type="button" aria-label="Close" onClick={() => props.onClose()}>
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
    <div className="modal-footer rounded-b border-t border-slate-gray-50 dark:border-stone-200 -mb-3">
      {props.children}
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
