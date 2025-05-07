"use client";

import { useEffect, useRef } from "react";

interface ConfirmModalProps {
  firstName: string;
  lastName: string;
  onClose: () => void;
}

export default function ConfirmModal({
  firstName,
  lastName,
  onClose,
}: ConfirmModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  const handleConfirm = () => {
    console.log("Confirmed:", { firstName, lastName });
    modalRef.current?.close();
    onClose();
  };

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Confirm Submission</h3>
        <p>First name: <strong>{firstName}</strong></p>
        <p>Last name: <strong>{lastName}</strong></p>
        <p className=" mt-2">Are you sure you want to proceed?</p>
        <p className=" text-red-400 ">**If mistyping, the result might not be correct!**</p>
        <div className="modal-action">
          <button type="button" className="btn btn-outline" onClick={() => {
            modalRef.current?.close();
            onClose();
          }}>
            Cancel
          </button>
          <button type="button" className="btn btn-soft btn-success" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </dialog>
  );
}
