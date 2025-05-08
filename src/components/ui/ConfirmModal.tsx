"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface ConfirmModalProps {
  firstName: string;
  lastName: string;
  onClose: () => void;
}

interface Person {
  firstName: string;
  lastName: string;
  major: string;
  interviewRefNo: string; // Add this line
}

export default function ConfirmModal({
  firstName,
  lastName,
  onClose,
}: ConfirmModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  const handleConfirm = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(apiUrl!, {
        method: "GET",
        headers: {
          "x-reference-id": "PG08",
        },
      });

      const data = await response.json();

      const matchedPerson = (Object.values(data).flat() as Person[]).find(
        (person) =>
          person.firstName.toLowerCase() === firstName.toLowerCase() &&
          person.lastName.toLowerCase() === lastName.toLowerCase()
      );

      const statusPassed = matchedPerson ? "true" : "false";
      const major = matchedPerson?.major || "";
      const candidateID = matchedPerson?.interviewRefNo || "";

      // Store the data in sessionStorage
      sessionStorage.setItem(
        "resultData",
        JSON.stringify({
          firstName,
          lastName,
          statusPassed,
          major,
          candidateID,
        })
      );

      // Navigate to result page with all params
      router.push(
        `/check/result?statusPassed=${statusPassed}&firstName=${encodeURIComponent(
          firstName
        )}&lastName=${encodeURIComponent(
          lastName
        )}&major=${encodeURIComponent(
          major
        )}&candidateID=${encodeURIComponent(candidateID)}`
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      modalRef.current?.close();
      onClose();
    }
  };

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Confirm Submission</h3>
        <p>
          First name: <strong>{firstName}</strong>
        </p>
        <p>
          Last name: <strong>{lastName}</strong>
        </p>
        <p className="mt-2">Are you sure you want to proceed?</p>
        <p className="text-red-400">
          **If mistyped, the result might not be correct!**
        </p>
        <div className="modal-action">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => {
              modalRef.current?.close();
              onClose();
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-soft btn-success"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </dialog>
  );
}
