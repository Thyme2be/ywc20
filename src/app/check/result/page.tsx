import CandidateResult from "@/components/CandidateResult";
import React, { Suspense } from "react";

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CandidateResult />
    </Suspense>
  );
}
