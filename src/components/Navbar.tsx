import Image from "next/image";

export default function Navbar() {
  const linkClassName =
    "hover-underline-animation hover:cursor-pointer hover:scale-110 duration-100 ease-in-out";

  return (
    <>
      <header className=" max-sm:hidden flex justify-center ">
        <nav className="flex rounded-full items-center bg-primary-gradient primary-gradient py-3 px-8 gap-5">
          {/* Left nav */}
          <ul className=" flex gap-5 text-xl ">
            <li className={linkClassName}>Home</li>
            <li className={linkClassName}>Major</li>
          </ul>

          {/* Logo */}
          <Image
            src="/logo-ywc20-mono.png"
            width={80}
            height={80}
            alt="ywc-mono-logo"
            className="hover:cursor-pointer hover:scale-110 duration-100 ease-in-out"
          />

          {/* Right nav */}
          <ul className=" flex gap-5 text-xl  ">
            <li className={linkClassName}>Sponsors</li>
            <li className={linkClassName}>FAQ</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
