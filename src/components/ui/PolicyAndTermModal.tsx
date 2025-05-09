"use client";

import { useEffect, useRef } from "react";

interface PolicyAndTermModalProps {
  title: string,
  description: string,
  onClose: () => void;
}

export default function PolicyAndTermModal({ title, description, onClose } : PolicyAndTermModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    modalRef.current?.close();
    onClose();
  };

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  return (
    <dialog id="policy_modal" className="modal" ref={modalRef}>
      <div className="modal-box">
        <h3 className="font-bold text-2xl text-center text-gradient-primary">
          {title}
        </h3>
        <p className="py-4">{description}</p>
        <div className="modal-action">
          <form method="dialog">
            <button type="button" className="btn btn-info" onClick={handleClose}>
              Accept
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
