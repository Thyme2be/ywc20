import Image from "next/image";

export default function Hero() {
  return (
    <section className=" relative ">
      <div className=" flex max-sm:flex-col gap-10 items-center w-full ">
        {/*Hero YWC20 Image */}
        <div className=" h-fit w-1/2 max-sm:w-full max-sm:flex max-sm:justify-center ">
          <Image
            src={"/ywc20-logo-main.webp"}
            alt="ywc-main-logo"
            height={450}
            width={450}
          />
        </div>
        {/* Hero Text */}
        <div className=" text-center w-1/2 max-sm:w-full">
          <h1 className=" font-secondary text-2xl ">
            Young Webmaster <span className=" whitespace-nowrap ">Camp 20</span>
          </h1>
          <p className=" text-xl mt-2 ">
            Announcement of{" "}
            <span className=" text-passed-green text-glow-green whitespace-nowrap ">
              selected candidates
            </span>
          </p>
        </div>
      </div>
      <div className=" w-full flex max-sm:flex-col justify-center sm:gap-30 max-sm:items-center ">
        <button
          type="button"
          className="hover:shadow-box-primary 
          text-3xl text-white rounded-4xl 
          px-5 py-3 mt-8 cursor-pointer 
          bg-primary-gradient hover:scale-110 duration-150
          shadow-primary-gradient
          "
        >
          Check Eligible
        </button>
        <button
          type="button"
          className="hover:shadow-box-primary text-3xl gradient-border rounded-4xl px-5 py-3 mt-8 max-sm:mt-4 cursor-pointer hover:scale-110 duration-150"
        >
          <span className=" text-gradient-primary ">What is YWC?</span>
        </button>
      </div>
      {/* Star abstract */}
      <Image
        src={"/abstract_star.png"}
        alt=" star "
        width={140}
        height={140}
        className=" absolute -top-10 right-0 -z-10 max-sm:h-14 max-sm:w-14 "
      />
      {/* Circle abstract */}
      <Image
        src={"/abstract_circle.png"}
        alt=" star "
        width={140}
        height={140}
        className=" absolute -bottom-16 -z-10 max-lg:w-14 max-sm:hidden "
      />
    </section>
  );
}
