"use client";

import { BiMenuAltRight } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "./Header.css";
import { RxCross1 } from "react-icons/rx";

const Header: React.FC = () => {
  // ============ State =============
  const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);

  // ============ Rendering =============
  return (
    <div className="n-wrapper">
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
            <div className="signup">Sign Up</div>
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
          <Link href={"/"}>Home</Link>
          <Link href={"/aboutus"}>About Us</Link>
          <Link href={"/services"}>Services</Link>
          <Link href={"/testimonials"}>Testimonials</Link>
          <Link href={"/contact"}>Contact Us</Link>
          <div className="m-signup-button">Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
