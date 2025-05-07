"use client";

type ToastProps = {
  message: string;
  onClose: () => void;
};

export default function Toast({ message, onClose }: ToastProps) {
  return (
    <div className="toast toast-bottom toast-end z-50">
      <div className="alert alert-warning font-bold flex items-center justify-between w-full gap-4">
        <span>{message}</span>
        <button
          type="button"
          className="cursor-pointer px-1 border hover:bg-red-500/20"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
}
