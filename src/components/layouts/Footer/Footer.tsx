import Subscribe from "@/modules/Subscribe/Subscribe";
import Link from "next/link";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Get Potepsychomerics Today!</span>
          <Subscribe />
          <hr />
          <div className="f-menu">
            <Link href={"/"}>Home</Link>
            <Link href={"/aboutus"}>About Us</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/testimonial"}>Testimonials</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
          <hr />
          <span className="copy">&copy; All right reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
