import { IoIosArrowRoundForward } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

import Link from "next/link";

import "./LoginForm.css";
import { HiOutlineMail } from "react-icons/hi";

const LoginForm = ({ isLoginActive }: any) => {
  return (
    <div
      className="login-form"
      style={{
        left: isLoginActive ? "0%" : "150%",
        opacity: isLoginActive ? 1 : 0,
      }}
    >
      <div className="form-title">
        <span>Sign In</span>
      </div>
      <div className="form-inputs">
        <div className="input-box">
          <input
            type="text"
            className="input-field"
            placeholder="Email"
            required
          />
          <HiOutlineMail className=" icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            required
          />
          <RiLockPasswordFill className="icon" />
        </div>
        <div className="forget-pass">
          <Link href={""}>Forget Password</Link>
        </div>
        <div className="input-box">
          <button className="input-submit">
            <span>Sign In</span>
            <IoIosArrowRoundForward className="text-white" />
          </button>
        </div>
      </div>
      <div className="social-login flex gap-2 text-black">
        <AiOutlineGoogle className="social-icon" />
        <FaGithub className="social-icon" />
      </div>
    </div>
  );
};

export default LoginForm;
