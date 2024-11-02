import React, { useState } from "react";
import "./Login.css";

interface LoginProps {
  setShowLogin: (value: boolean) => void | boolean;
}

const Login: React.FC<LoginProps> = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("LogIn");
  return (
    <div className="login-popup">
      <form className="login-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src="Images/cross_icon.png"
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currentState === "LogIn" ? (
            <></>
          ) : (
            <input type="placeholder" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-conditions">
          <input type="checkbox" required />
          <p>By contuning , i agree to the terms of use & privacy policy</p>
        </div>

        {currentState === "LogIn" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("LogIn")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
