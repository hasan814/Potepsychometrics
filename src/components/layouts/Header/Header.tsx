"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import "./Header.css";

const Header: React.FC = () => {
  // ============ State =============
  const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) setNavStyle("n-sticky");
    else setNavStyle("");
  });
  // ============ Rendering =============
  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* Desktop Version*/}
      <div className="container">
        <div className="n-container">
          <div className="n-logo">
            <Link href={"/"} className="flex flex-col items-center">
              <Image src={"/Logo.png"} alt="logo" width={60} height={60} />
              Potepsychometrics
            </Link>
          </div>
          <div className="n-right">
            <div className="n-menu">
              <Link href={"/"}>Home</Link>
              <Link href={"/aboutus"}>About Us</Link>
              <Link href={"/services"}>Services</Link>
              <Link href={"/testimonials"}>Testimonials</Link>
              <Link href={"/contact"}>Contact Us</Link>
            </div>
            <div className="signup">
              <Link href={"/register"}>Regsiter</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version*/}
      <div className="nm-container">
        <div className="n-logo">
          <Link href={"/"} className="flex flex-col items-center">
            <Image src={"/Logo.png"} alt="logo" width={40} height={40} />
            <span className="text-xs">Potepsychometrics</span>
          </Link>
        </div>
        {!mobileMenuOpened ? (
          <BiMenuAltRight
            size={30}
            className="cursor-pointer"
            onClick={() => setMobileMenuOpened(true)}
          />
        ) : (
          <RxCross1
            size={30}
            className="cursor-pointer"
            onClick={() => setMobileMenuOpened(false)}
          />
        )}

        {/* Mobile Menu*/}
        <div
          className="nm-menu"
          style={{
            transform: mobileMenuOpened
              ? "translateX(0%)"
              : "translateX(-150%)",
          }}
        >
          <Link href={"/"} onClick={() => setMobileMenuOpened(false)}>
            Home
          </Link>
          <Link href={"/aboutus"} onClick={() => setMobileMenuOpened(false)}>
            About Us
          </Link>
          <Link href={"/services"} onClick={() => setMobileMenuOpened(false)}>
            Services
          </Link>
          <Link
            href={"/testimonials"}
            onClick={() => setMobileMenuOpened(false)}
          >
            Testimonials
          </Link>
          <Link href={"/contact"} onClick={() => setMobileMenuOpened(false)}>
            Contact Us
          </Link>

          <Link
            href={"register"}
            className="m-signup-button text-black"
            onClick={() => setMobileMenuOpened(false)}
          >
            Regsiter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
