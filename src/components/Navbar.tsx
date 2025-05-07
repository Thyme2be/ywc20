"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { LottieRefCurrentProps } from "lottie-react";
import Image from "next/image";
import MenuLottie from "../../public/menu-lottie.json";
import Link from "next/link";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Navbar() {
  const linkClassName =
    "hover-underline-animation hover:cursor-pointer hover:scale-110 duration-100 ease-in-out";

  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    if (!lottieRef.current) return;

    lottieRef.current.setSpeed(4.5);

    if (isOpen) {
      lottieRef.current.playSegments([45, 0], true);
    } else {
      lottieRef.current.playSegments([0, 45], true);
    }

    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (!lottieRef.current) return;
    lottieRef.current.setSpeed(4.5);
    lottieRef.current.playSegments([45, 0], true);
    setIsOpen(false);
  };

  return (
    <header className="flex justify-center max-sm:justify-between mb-5">
      {/* Mobile nav */}

      <Image
          src="/logo-ywc20-mono.png"
          width={80}
          height={80}
          alt="ywc-mono-logo"
          className="hover:cursor-pointer hover:scale-110 duration-100 ease-in-out"
        />

      <nav className="sm:hidden h-10 w-10 z-10">
        <div onClick={handleMenuClick}>
          <Lottie
            lottieRef={lottieRef}
            animationData={MenuLottie}
            autoplay={false}
            loop={false}
            initialSegment={[0, 45]}
          />
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`sm:hidden absolute left-0 top-0 w-full bg-primary-gradient transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 shadow-secondary shadow-lg/40 "
            : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 text-lg font-semibold">
          <Link href={"/"}>
            <li className={linkClassName} onClick={handleLinkClick}>
              Home
            </li>
          </Link>
          <li className={linkClassName}>Major</li>
          <li className={linkClassName}>Sponsors</li>
          <li className={linkClassName}>FAQ</li>
        </ul>
      </div>

      {/* Desktop nav */}
      <nav className="max-sm:hidden flex rounded-full items-center bg-primary-gradient shadow-primary-gradient py-3 px-8 gap-5">
        <ul className="flex gap-5 text-xl">
          <li className={linkClassName}>Home</li>
          <li className={linkClassName}>Major</li>
        </ul>

        <Image
          src="/logo-ywc20-mono.png"
          width={80}
          height={80}
          alt="ywc-mono-logo"
          className="hover:cursor-pointer hover:scale-110 duration-100 ease-in-out"
        />

        <ul className="flex gap-5 text-xl">
          <li className={linkClassName}>Sponsors</li>
          <li className={linkClassName}>FAQ</li>
        </ul>
      </nav>
    </header>
  );
}
