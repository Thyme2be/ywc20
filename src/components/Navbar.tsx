import Image from "next/image";

export default function Navbar() {
  return (
    <header className="flex justify-center ">
      <nav className="flex rounded-full items-center bg-primary-gradient primary-gradient py-2 px-5 gap-5">
        {/* Left nav */}
        <ul className=" flex gap-5 ">
          <li>Home</li>
          <li>Major</li>
        </ul>

        {/* Logo */}
        <Image
          src="/logo-ywc20-mono.png"
          width={80}
          height={80}
          alt="ywc-mono-logo"
        />

        {/* Right nav */}
        <ul className=" flex gap-5 ">
          <li>Sponsors</li>
          <li>FAQ</li>
        </ul>
      </nav>
    </header>
  );
}
