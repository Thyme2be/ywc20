import Image from "next/image";

export default function FAQ() {
  const h1Style = " text-2xl max-sm:text-center text-gradient-primary ";
  const descriptionStyle = " pt-2 text-lg max-sm:text-center ";

  return (
    <section className=" relative flex flex-col items-end max-sm:items-center gap-10 ">
      {/* FAQ */}
      <div className=" py-3 w-fit gradient-border h-fit  ">
        <h1 className=" text-4xl px-14 text-gradient-primary ">FAQ</h1>
      </div>

      <div className=" flex flex-col items-end max-sm:items-center gap-5">
        <div className=" flex flex-col text-end max-sm:text-center w-5/6 max-sm:w-full ">
          <h1 className={h1Style}>What is Young Webmaster Camp?</h1>
          <p className={descriptionStyle}>
            The university-level web development camp organized by the Thai
            Webmasters and Online Media Association is held annually to produce
            new digital talents ready to enter the digital workforce of the
            future.
          </p>
        </div>
        <div className=" flex flex-col text-end w-5/6 ">
          <h1 className={h1Style}>How many majors can I apply for?</h1>
          <p className={descriptionStyle}>
            You can apply for only 1 branch, but you will have the opportunity
            to study in other branches in the camp and special classes that will
            be open for additional learning in the pre-camp. Therefore, you
            should choose the branch that you are most good at first.
          </p>
        </div>
        <div className=" flex flex-col text-end w-5/6 ">
          <h1 className={h1Style}>Who can apply?</h1>
          <p className={descriptionStyle}>
            Be a person born in 2001 - 2007 or be an undergraduate student or
            equivalent born in 2000 or later.
          </p>
        </div>
      </div>
      <Image
        src={"/abstract_star.png"}
        alt=" star "
        width={200}
        height={200}
        className=" absolute top-10 left-30 -z-10  max-sm:h-14 max-sm:w-14 rotate-z-45 "
      />
      <Image
        src={"/abstract_circle.png"}
        alt=" circle "
        width={100}
        height={100}
        className=" absolute -bottom-10 right-10 -z-10 "
      />
    </section>
  );
}
