"use client";

import Image from "next/image";
import { useState } from "react";
import MajorsModal from "./ui/MajorsModal";

interface MajorModalDataProps {
  title: string;
  description: string;
  tips: string;
  image: string;
}

const majors: MajorModalDataProps[] = [
  {
    title: "Web Design",
    description:
      "Great design doesn't happen by chance, it happens by reason and understanding. YWC Web Design Camp Discover tools that are both eye-catching and business-friendly (20 people)",
    tips:
      "Present your unique UX/UI concept and design process, including examples of your work and explaining your design, color, or font choices. Be sure to mention the tools you use, such as Figma, Adobe XD.",
    image: "/web_design.png",
  },
  {
    title: "Web Programming",
    description:
      "Good code is not measured by its complexity, but by its simplicity and efficiency.",
    tips:
      "Show your ability to solve problems and develop websites. Describe projects you have worked on, including your roles and problems you encountered. Show your understanding of website structures (Frontend/Backend) and the use of various frameworks. Don't forget to mention your learning and self-development.",
    image: "/web_programming.png",
  },
  {
    title: "Web Marketing",
    description:
      "True marketing is about getting customers to tell others. It changes you from an ordinary marketer to someone who can read your competitors' games and understands consumers in every dimension. (20 people)",
    tips:
      "Focus on explaining and demonstrating understanding of online marketing strategies and business operations, such as business analysis models, branding, or user behavior analysis, to conduct website marketing.",
    image: "/web_marketing.png",
  },
  {
    title: "Web Content",
    description:
      "In a world of information overload, the ones who tell the most compelling stories win. Open the door to becoming a professional content welder who understands both the art and science of digital communication. (20 people)",
    tips:
      "Demonstrate strong storytelling and communication skills. Demonstrate analytical skills such as articles, videos, or social posts and explain the strategies used. Understanding of SEO and user behavior helps your application stand out.",
    image: "/web_content.png",
  },
];

export default function Majors() {
  const [selectedMajor, setSelectedMajor] = useState<MajorModalDataProps | null>(null);

  const webTitleStyle = " text-2xl text-center mt-5 ";
  const webTitleSpanStyle = " text-gradient-primary  ";
  const webImageStyle =
    " cursor-pointer hover:scale-105 hover:-translate-y-5 duration-300 ";

  return (
    <section className="relative w-full flex flex-col items-center">
      <div className="bg-primary-gradient px-5 py-3 text-3xl rounded-full shadow-primary-gradient">
        MAJORS
      </div>

      <div className="flex justify-center items-center w-full mt-20 gap-18 flex-wrap">
        {majors.map((major) => (
          <div key={major.title}>
            <Image
              src={major.image}
              alt={major.title}
              width={300}
              height={300}
              className={webImageStyle}
              onClick={() => setSelectedMajor(major)}
            />
            <h1 className={webTitleStyle}>
              Web <span className={webTitleSpanStyle}>{major.title.split(" ")[1]}</span>
            </h1>
          </div>
        ))}
      </div>

      <Image
        src="/abstract_star.png"
        alt="star"
        width={140}
        height={140}
        className="absolute top-20 left-70 -z-10 max-sm:h-14 max-sm:w-14"
      />
      <Image
        src="/abstract_circle.png"
        alt="circle"
        width={150}
        height={150}
        className="absolute bottom-12 right-60 -z-10 max-lg:w-14"
      />

      {/* Modal */}
      {selectedMajor && (
        <MajorsModal
          majorTitle={selectedMajor.title}
          majorDescription={selectedMajor.description}
          majorTips={selectedMajor.tips}
          onClose={() => setSelectedMajor(null)}
        />
      )}
    </section>
  );
}
