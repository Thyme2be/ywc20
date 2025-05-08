"use client";

import { useState } from "react";
import ConfirmModal from "@/components/ui/ConfirmModal";
import Toast from "@/components/ui/Toast";

const labelStyle = "text-2xl opacity-70";
const InputBox =
  "border gradient-border text-2xl shadow-input-primary h-12 w-full px-5 ";

export default function SearchForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCheck = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }
    setShowModal(true);
  };

  return (
    <div className="h-fit w-fit rounded-4xl gradient-border shadow-box-primary px-10 py-12 flex flex-col gap-5 relative">
      {/* Input Fields */}
      <div className="flex gap-10 max-sm:flex-col">
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName" className={labelStyle}>
            First name
          </label>
          <input
            id="firstName"
            type="text"
            className={InputBox}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lastName" className={labelStyle}>
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            className={InputBox}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="hover:shadow-box-primary text-3xl text-white rounded-3xl px-12 py-2 mt-8 cursor-pointer bg-primary-gradient hover:scale-110 duration-150"
          onClick={handleCheck}
        >
          Check
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <ConfirmModal
          firstName={firstName}
          lastName={lastName}
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Toast */}
      {showToast && (
        <Toast
          message="Please fill in both first and last names."
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
