import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  return (
    <section className=" relative h-auto  ">
      <h1 className=" text-center text-4xl shadow-white text-glow-white ">
        SPONSORS
      </h1>
      <div className=" mt-16 flex justify-center w-full gap-40 max-lg:gap-20 flex-wrap">
        <div className=" flex flex-col items-center gap-5 ">
          <h1 className=" text-xl opacity-70 ">Organized By</h1>
          <Link href={"https://www.webmaster.or.th/"}>
          
          <Image
            src={"/twa_sponsors.png"}
            alt="twa-sponsors"
            height={300}
            width={300}
          />
          </Link>
        </div>
        <div className=" flex flex-col items-center gap-5 ">
          <h1 className=" text-xl opacity-70 ">Super VIP</h1>
          <Link href={"https://odds.team/"}>
            <Image
              src={"/odt_sponsors.png"}
              alt="odt-sponsors"
              height={200}
              width={200}
            />
          </Link>
        </div>
      </div>
      <Image
        src={"/abstract_star.png"}
        alt=" star "
        width={140}
        height={140}
        className=" absolute top-6 right-120 -z-10 max-sm:h-14 max-sm:w-14 rotate-z-45 "
      />
      {/* Circle abstract */}
      <Image
        src={"/abstract_circle.png"}
        alt=" circle "
        width={100}
        height={100}
        className=" absolute top-10 left-30 -z-10 max-lg:hidden "
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
