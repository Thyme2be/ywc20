import SearchForm from "@/components/SearchForm";
import TypingText from "@/components/ui/TypingText";

export default function Page() {
  return (
    <main className=" flex flex-col items-center ">
      <header className=" flex justify-center items-center w-full my-12  ">
        <div className=" flex flex-col text-center gap-2 ">
          <h1 className=" text-5xl ">
            Check{" "}
            <span className=" text-passed-green text-glow-green ">
              Eligible
            </span>
          </h1>
          <TypingText message="Search your name" />
        </div>
      </header>

      {/* Form Box */}
      <section>
        <SearchForm />
      </section>
    </main>
  );
}
