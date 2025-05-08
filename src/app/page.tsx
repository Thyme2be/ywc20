import GetToKnow from "@/components/GetToKnow";
import Hero from "@/components/Hero";
import Majors from "@/components/Majors";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <main className=" mt-5 py-5 px-10 max-sm:px-2 ">
      <Hero />
      <GetToKnow />
      <Majors />
      <Sponsors />
    </main>
  );
}
