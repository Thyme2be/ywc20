import Image from "next/image";

export default function Majors() {
  const webTitleStyle = " text-2xl text-center mt-5 ";
  const webTitleSpanStyle = " text-gradient-primary  ";
  const webImageStyle = " cursor-pointer hover:scale-105 hover:-translate-y-5 duration-300 "

  return (
    <section className=" w-full flex flex-col items-center ">
      <div className=" bg-primary-gradient px-5 py-3 text-3xl rounded-full shadow-primary-gradient ">
        MAJORS
      </div>

      <div className=" flex justify-center items-center w-full mt-20 gap-14 flex-wrap ">
        {/* Web Design */}
        <div>
          <Image
            src={"/web_design.png"}
            alt="web-design"
            width={200}
            height={200}
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
            width={200}
            height={200}
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
            width={200}
            height={200}
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
            width={200}
            height={200}
            className={webImageStyle}
          />
          <h1 className={webTitleStyle}>
            Web <span className={webTitleSpanStyle}>Content</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
