"use client";

import { useEffect, useRef } from "react";

interface MajorsModalProps {
  majorTitle: string;
  majorDescription: string;
  majorTips: string;
  onClose: () => void;
}

export default function MajorsModal({ majorTitle, majorDescription, majorTips, onClose }: MajorsModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    modalRef.current?.close();
    onClose();
  };

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  return (
    <dialog id="major_modal" className="modal" ref={modalRef}>
      <div className="modal-box">
        {/* Content */}
        <h3 className="font-bold text-2xl text-center text-gradient-primary">{majorTitle}</h3>
        <p className="py-4"><span className=" text-xl text-yellow-300 ">Description:</span> {majorDescription}</p>
        <div className=" px-5 py-3 border bg-white/20 ">
          <h1 className=" text-lg ">Tip! Special for applicants</h1>
          <p>{majorTips}</p>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button type="button" className="btn btn-accent" onClick={handleClose}>
              Got it!
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
