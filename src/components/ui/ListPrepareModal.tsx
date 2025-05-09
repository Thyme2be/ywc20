import { useEffect, useRef } from "react";

export default function ListPrepareModal({ onClose }: { onClose: () => void }) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const prepareList = [
    "1. Your Laptop and Accessories",
    "2. Comfortable Clothing and Personal Items",
    "3. Notebook and Writing Utensils",
    "4. An Open and Enthusiastic Mind",
  ];

  const handleClose = () => {
    modalRef.current?.close();
    onClose();
  };

  useEffect(() => {
    modalRef.current?.show();
  }, []);

  return (
    <dialog id="policy_modal" className="modal" ref={modalRef}>
      <div className="modal-box">
        <h3 className="font-bold text-2xl text-center text-gradient-primary">
          Preparation List for Camp Day!
        </h3>
        <ul className="py-4 list-disc list-inside space-y-1 text-left ">
          {prepareList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="modal-action">
          <form method="dialog">
            <button
              type="button"
              className="btn btn-accent"
              onClick={handleClose}
            >
              Got it!
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
