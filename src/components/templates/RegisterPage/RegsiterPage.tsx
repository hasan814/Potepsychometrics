"use client";

import { useState } from "react";

import LoginForm from "@/modules/LoginForm/LoginForm";
import SignUpForm from "@/modules/SignUpForm/SignUpForm";

import "./RegisterPage.css";

const RegsiterPage = () => {
  // ============== State =============
  const [isLoginActive, setIsLoginActive] = useState(true);

  // ============== Rendering =============
  return (
    <div className="body">
      <div className="form-container">
        <div className="col col-1">
          <div className="image-layer">
            <img
              src="/register/white-outline.png"
              alt="regsiter"
              className="form-image-main"
            />
            <img
              src="/register/dots.png"
              alt="regsiter"
              className="form-image dots"
            />
            <img
              src="/register/coin.png"
              alt="regsiter"
              className="form-image coin"
            />
            <img
              src="/register/spring.png"
              alt="regsiter"
              className="form-image spring"
            />
            <img
              src="/register/rocket.png"
              alt="regsiter"
              className="form-image rocket"
            />
            <img
              src="/register/cloud.png"
              alt="regsiter"
              className="form-image cloud"
            />
            <img
              src="/register/stars.png"
              alt="regsiter"
              className="form-image stars"
            />
          </div>
        </div>
        <div className="col col-2">
          <div className="btn-box">
            <button
              className={`btn btn-1 ${isLoginActive ? "active" : ""}`}
              onClick={() => setIsLoginActive(true)}
            >
              Sign In
            </button>
            <button
              className={`btn btn-2 ${!isLoginActive ? "active" : ""}`}
              onClick={() => setIsLoginActive(false)}
            >
              Sign Up
            </button>
          </div>
          {/*========== Login Form ======= */}
          <LoginForm isLoginActive={isLoginActive} />

          {/*========== Register Form ======= */}
          <SignUpForm isLoginActive={isLoginActive} />
        </div>
      </div>
    </div>
  );
};

export default RegsiterPage;
