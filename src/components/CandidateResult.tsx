"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function CandidateResult() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [major, setMajor] = useState("");
  const [candidateID, setCandidateID] = useState("");
  const [statusPassed, setStatusPassed] = useState(false);

  useEffect(() => {
    // Check if data exists in sessionStorage first
    const storedData = sessionStorage.getItem("resultData");

    if (storedData) {
      // If data exists in sessionStorage, use it
      const resultData = JSON.parse(storedData);
      setFirstName(resultData.firstName);
      setLastName(resultData.lastName);
      setStatusPassed(resultData.statusPassed);
      setMajor(resultData.major);
      setCandidateID(resultData.candidateID);

      // Optionally, clear session storage if you want to prevent future use
      sessionStorage.removeItem("resultData");
      router.replace("/check/result");
    } else {
      // Otherwise, retrieve data from query params and store in sessionStorage
      const statusPassedRaw = searchParams.get("statusPassed") === "true";
      const fname = searchParams.get("firstName") || "";
      const lname = searchParams.get("lastName") || "";
      const majorRaw = searchParams.get("major") || "";
      const candidateID = searchParams.get("candidateID") || "";

      setFirstName(fname);
      setLastName(lname);
      setStatusPassed(statusPassedRaw);
      setMajor(majorRaw);
      setCandidateID(candidateID);

      // Store the data in sessionStorage
      sessionStorage.setItem(
        "resultData",
        JSON.stringify({
          firstName: fname,
          lastName: lname,
          statusPassed: statusPassedRaw,
          major: majorRaw,
          candidateID: candidateID,
        })
      );

      // Clean up the URL by removing query parameters
    }
  }, [searchParams, router]);

  const majorDisplayMap: Record<string, string> = {
    web_design: "Web Design",
    web_programming: "Web Programming",
    web_marketing: "Web Marketing",
    web_content: "Web Content",
  };

  const majorDisplay = majorDisplayMap[major] || major;

  const ColorBorder = statusPassed
    ? "border-passed-green shadow-box-passed"
    : "border-failed shadow-box-failed";
  const ColorText = statusPassed ? "text-passed-green" : "text-failed";
  const ColorTextGlow = statusPassed ? "text-glow-green" : "text-glow-red";

  return (
    <main className="flex justify-center items-center mt-10 max-sm:mt-20">
      <section
        className={`relative h-fit w-fit rounded-4xl border-2 ${ColorBorder} text-center px-10 pt-10 pb-5 flex flex-col items-center gap-5`}
      >
        <h1
          className={`text-4xl max-sm:text-3xl max-sm:mt-5 font-bold ${ColorText} ${ColorTextGlow}`}
        >
          {statusPassed ? "🎉 Congratulations! 🎉" : "See you again! 👋"}
        </h1>

        <h2 className="text-3xl">{`${firstName} ${lastName}`}</h2>

        {statusPassed && (
          <p className="text-2xl">{`Candidate ID: ${candidateID}`}</p>
        )}

        <div>
          <p className={`text-2xl ${ColorText}`}>
            {statusPassed
              ? "You have been selected to join"
              : "You have NOT been selected"}
          </p>
          {!statusPassed && (
            <p className="text-2xl">to join the Young Webmaster Camp 20</p>
          )}
        </div>

        {statusPassed && (
          <p className="text-3xl text-gradient-primary">{majorDisplay}</p>
        )}

        {statusPassed && (
          <div className="flex flex-col items-center gap-2 mt-5">
            <p className="text-2xl max-sm:text-xl text-gradient-primary">
              Welcome to Young Webmaster Camp 20!
            </p>
            <p className="text-xl underline cursor-pointer hover:text-blue-300 duration-100 ease-in-out">
              Check preparation list
            </p>
          </div>
        )}

        {!statusPassed && (
          <div>
            <p className="text-2xl mt-5">See you next year. Keep going!</p>
            <p className="text-2xl text-gradient-primary">
              Every failure is a step to success
            </p>
          </div>
        )}

        <Link href="/check">
          <div className="absolute w-14 h-14 max-sm:w-10 max-sm:h-10 cursor-pointer hover:scale-110 duration-150 hover:shadow-box-primary flex justify-center items-center rounded-full bg-primary-gradient left-2 top-2">
            <FaArrowLeft className="text-2xl max-sm:text-2xl" />
          </div>
        </Link>
      </section>
    </main>
  );
}
