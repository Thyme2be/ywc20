import Image from "next/image";

export default function Footer() {
    const footerParagraphsStyle = "opacity-70 ";
    
  return (
    <section className=" w-full h-fit py-5 flex max-sm:flex-col max-sm:gap-10 justify-between items-center text-sm ">
      <div>
        <Image
          src="/twa_sponsors.png"
          alt="twa-sponsor"
          width={150}
          height={150}
        />
      </div>
      <p className={footerParagraphsStyle + "hover:underline cursor-pointer"}>Privacy Policy</p>
      <p className={footerParagraphsStyle + "hover:underline cursor-pointer"}>Terms and Conditions</p>
      <p className={`text-xs w-1/4 text-end max-sm:text-center max-sm:w-full  ${footerParagraphsStyle}`}>
        Copyright 2003 - 2025. Young Webmaster Camp, in association with Thai
        Webmaster and Online Media Association, all rights reserved.
      </p>
      
    </section>
  );
}
