import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GetToKnow from "@/components/GetToKnow";
import Hero from "@/components/Hero";
import Majors from "@/components/Majors";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <main className="mt-5 py-5 px-10 flex flex-col gap-20 max-sm:px-2">
      <Hero />
      <section id="get-to-know">
        <GetToKnow />
      </section>
      <section id="majors">
        <Majors />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />
    </main>
  );
}
