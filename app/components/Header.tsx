"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileLinks from "./MobileLinks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="lg:fixed lg:h-screen lg:left-0 lg:top-0 flex sticky top-0 bg-cyan-900 border-y-8 lg:border-0 lg:border-r-4 border-solid border-blue-900">
      <div className="w-full m-2.5 flex gap-y-2 items-center justify-between lg:flex-col lg:justify-start">
        <Link href="/">
          <Image
            src="/code_club_logo.jpg"
            width={50}
            height={50}
            className="rounded-full border-solid border-3 border-emerald-600"
            alt="Code club logo"
          />
        </Link>
        <button onClick={toggleMenu} className="text-3xl md:hidden" aria-label="Open menu">&#9776;</button>
        <NavLinks />
      </div>
      <section className={`absolute top-0 bg-gray-950 w-full text-5xl flex-col justify-center origin-top
          ${menuOpen ? "flex animate-open-menu" : "hidden"}`}
      >
        <button onClick={closeMenu} className="text-7xl self-end px-6" aria-label="Close menu">&times;</button>
        <MobileLinks closeMenu={closeMenu} />
      </section>
    </header>
  );
}
