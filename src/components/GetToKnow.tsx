import Image from "next/image";

export default function GetToKnow() {
  const h1Style = " text-2xl max-sm:text-center ";
  const descriptionStyle = " pt-2 pl-20 text-lg opacity-70 max-sm:pl-2 ";

  return (
    <section className=" w-full flex h-fit  ">
      {/* Content */}
      <div className=" w-3/5 max-md:w-full max-sm:flex max-sm:flex-col max-sm:items-center ">
        {/* Get to know */}
        <div className=" py-3 px-5 gradient-border w-fit h-fit ">
          <h1 className=" text-4xl text-gradient-primary ">Get to know</h1>
        </div>

        <div className=" mt-10 ">
          <h1 className={h1Style}>
            🔎 Discover your identity and{" "}
            <span className=" text-gradient-primary ">career path</span>
          </h1>
          <p className={descriptionStyle}>
            Give yourself the opportunity to experiment with colleagues from
            different backgrounds, helping you discover your own interests and
            abilities.
          </p>
        </div>
        <div className=" mt-5 ">
          <h1 className={h1Style}>
            💪 Learn from real people with{" "}
            <span className=" text-gradient-primary ">real experiences</span>
          </h1>
          <p className={descriptionStyle}>
            No need to waste time learning overwhelming theories, but listen to
            practical techniques from experts in leading companies nationwide.
          </p>
        </div>
        <div className=" mt-5 ">
          <h1 className={h1Style}>
            <span className=" text-gradient-primary ">
              📝 Create real work{"  "}
            </span>
            and get real feedback
          </h1>
          <p className={descriptionStyle}>
            Experience the feeling of failure and success for real, turning 4
            days into an expensive and valuable lesson.
          </p>
        </div>
        <div className=" mt-5 ">
          <h1 className={h1Style}>
            <span className=" text-gradient-primary ">✨ Build a network </span>
            that is more than family
          </h1>
          <p className={descriptionStyle}>
            Over 2,000 YWC alumni are spread across leading companies across the
            country. Start a network that will stay with you for life, whether
            it&apos;s finding a job, an internship, or building a future
            business.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className=" flex justify-center items-center w-2/5 max-md:hidden ">
        <Image src={"/laptop.png"} alt="Get to know" width={400} height={400} />
      </div>
    </section>
  );
}
