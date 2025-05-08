import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function page() {
  const statusPassed = false; // Simulate the status passed
  const ColorBorder = statusPassed ? "border-passed-green shadow-box-passed" : "border-failed shadow-box-failed";
  const ColorText = statusPassed ? "text-passed-green" : "text-failed";
  const ColorTextGlow = statusPassed ? "text-glow-green" : "text-glow-red";

  return (
    <main className=" flex justify-center items-center mt-10 max-sm:mt-20  ">
      {/* Box */}
      <section
        className={`relative h-fit w-fit rounded-4xl border-2 ${ColorBorder} text-center px-10 pt-10 pb-5 flex flex-col items-center gap-5`}
      >
        {/* Congrat || See you */}
        <h1
          className={` text-4xl max-sm:text-3xl max-sm:mt-5 font-bold ${ColorText} ${ColorTextGlow} `}
        >
          {statusPassed ? "Congratulation!" : "See you again!"}
        </h1>

        {/* Candidate's name */}
        <h2 className=" text-3xl">{`{firstName} {lastName}`}</h2>

        {/* Result */}
        <div>
          <p className={`text-2xl ${ColorText}`}>
            {`You have ${!statusPassed ? "NOT" : ""} been selected`}{" "}
            {statusPassed ? "of" : ""}
          </p>
          {!statusPassed && <p className=" text-2xl ">to join the young webmaster camp 20</p>}
        </div>

        {/* Major */}
        {statusPassed && (
          <p className=" text-3xl text-gradient-primary">{`{Major}`}</p>
        )}

        {/* Welcome and preparation list text (For eligible candidite) */}
        {statusPassed && (
          <div className=" flex flex-col items-center gap-2 mt-5 ">
            <p className=" text-2xl max-sm:text-xl text-gradient-primary">
              Welcome to Young Webmaster Camp 20 !
            </p>
            <p className=" text-xl underline cursor-pointer hover:text-blue-300 duration-100 ease-in-out">
              Check preparation list
            </p>
          </div>
        )}

        {!statusPassed && (
          <div>
            <p className=" text-2xl mt-5 ">See you in the next year. Keep going!</p>
            <p className=" text-2xl text-gradient-primary ">
              Every failure is a step to success
            </p>
          </div>
        )}

        <Link href="/check">
          <div className=" absolute w-14 h-14 max-sm:w-10 max-sm:h-10 cursor-pointer hover:scale-110 duration-150 hover:shadow-box-primary flex justify-center items-center  rounded-full bg-primary-gradient left-2 top-2">
            <FaArrowLeft className=" text-2xl max-sm:text-2xl " />
          </div>
        </Link>
      </section>
    </main>
  );
}
