import TypingText from "@/components/ui/TypingText";

export default function page() {
  const labelStyle = " text-2xl opacity-70";
  const InputBox =
    "border gradient-border text-2xl shadow-input-primary h-12 w-full px-5 ";

  return (
    <main className=" flex flex-col items-center ">
      <header className=" flex justify-center items-center w-full my-12  ">
        <div className=" flex flex-col text-center gap-2 ">
          <h1 className=" text-5xl ">
            Check{" "}
            <span className=" text-passed-green text-glow-green ">
              Eligible
            </span>
          </h1>
          <TypingText message="Search your name" />
          {/* <p className=" text-xl text-gradient-primary ">Search your name</p> */}
        </div>
      </header>

      {/* Form Box */}
      <section>
        <form className=" h-fit w-fit rounded-4xl gradient-border shadow-box-primary px-10 py-12 flex flex-col gap-5 ">
          <div className=" flex gap-10 max-sm:flex-col ">
            {/* First Name */}
            <div className=" flex flex-col gap-1 ">
              <label htmlFor="firstName" className={labelStyle}>
                First name
              </label>
              <input id="firstName" type="text" className={InputBox} />
            </div>
            {/* Last Name */}
            <div className=" flex flex-col gap-1 ">
              <label htmlFor="lastName" className={labelStyle}>
                Last name
              </label>
              <input id="lastName" type="text" className={InputBox} />
            </div>
          </div>
          {/* Check Button */}
          <div className=" flex justify-center items-center">
            <button
              id="check"
              type="submit"
              className=" hover:shadow-box-primary bg-gradient-primary text-3xl text-white rounded-3xl px-12 py-2 mt-8 cursor-pointer bg-primary-gradient hover:scale-110 duration-150 "
            >
              Check
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
