import Image from "next/image";

export default function Majors() {
  const webTitleStyle = " text-2xl text-center mt-5 ";
  const webTitleSpanStyle = " text-gradient-primary  ";
  const webImageStyle =
    " cursor-pointer hover:scale-105 hover:-translate-y-5 duration-300 ";

  return (
    <section className=" relative w-full flex flex-col items-center ">
      <div className=" bg-primary-gradient px-5 py-3 text-3xl rounded-full shadow-primary-gradient ">
        MAJORS
      </div>

      <div className=" flex justify-center items-center w-full mt-20 gap-18 flex-wrap ">
        {/* Web Design */}
        <div>
          <Image
            src={"/web_design.png"}
            alt="web-design"
            width={300}
            height={300}
            className={webImageStyle}
          />
          <h1 className={webTitleStyle}>
            Web <span className={webTitleSpanStyle}>Design</span>
          </h1>
        </div>
        {/* Web Programming */}
        <div>
          <Image
            src={"/web_programming.png"}
            alt="web-programming"
            width={300}
            height={300}
            className={webImageStyle}
          />
          <h1 className={webTitleStyle}>
            Web <span className={webTitleSpanStyle}>Programming</span>
          </h1>
        </div>
        {/* Web Marketing */}
        <div>
          <Image
            src={"/web_marketing.png"}
            alt="web-marketing"
            width={300}
            height={300}
            className={webImageStyle}
          />
          <h1 className={webTitleStyle}>
            Web <span className={webTitleSpanStyle}>Design</span>
          </h1>
        </div>
        {/* Web Content */}
        <div>
          <Image
            src={"/web_content.png"}
            alt="web-content"
            width={300}
            height={300}
            className={webImageStyle}
          />
          <h1 className={webTitleStyle}>
            Web <span className={webTitleSpanStyle}>Content</span>
          </h1>
        </div>
      </div>
      <Image
        src={"/abstract_star.png"}
        alt=" star "
        width={140}
        height={140}
        className=" absolute top-20 left-70 -z-10 max-sm:h-14 max-sm:w-14 "
      />
      {/* Circle abstract */}
      <Image
        src={"/abstract_circle.png"}
        alt=" circle "
        width={150}
        height={150}
        className=" absolute bottom-12 right-60 -z-10 max-lg:w-14 "
      />
    </section>
  );
}
