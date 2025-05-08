import Image from "next/image";

export default function Sponsors() {
  return (
    <section className=" h-auto  ">
      <h1 className=" text-center text-4xl shadow-white text-glow-white ">
        SPONSORS
      </h1>
      <div className=" mt-16 flex justify-center w-full gap-40 max-lg:gap-20 flex-wrap">
        <div className=" flex flex-col items-center gap-5 ">
          <h1 className=" text-xl opacity-70 ">Organized By</h1>
          <Image
            src={"/twa_sponsors.png"}
            alt="twa-sponsors"
            height={300}
            width={300}
          />
        </div>
        <div className=" flex flex-col items-center gap-5 ">
          <h1 className=" text-xl opacity-70 ">Super VIP</h1>
          <Image
            src={"/odt_sponsors.png"}
            alt="odt-sponsors"
            height={200}
            width={200}
          />
        </div>
      </div>
    </section>
  );
}
