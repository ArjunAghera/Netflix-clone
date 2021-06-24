import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../../assets/netflix-logo-png-2582.png";
import SignInPage from "../SignInPage/SignInPage";

function LoginPage() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginPage">
      <div className="loginBg">
        <img className="loginPageLogo" src={logo} alt="Netflix logo" />
        <button className="signInBtn" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginBgGradient" />
      </div>
      <div className="loginPageBody">
        {signIn ? (
          <SignInPage />
        ) : (
          <>
            <h1>
              Unlimited movies, TV <br />
              shows and more.
            </h1>
            <p className="flexTxt">Watch anywhere. Cancel anytime.</p>
            <p className="restartMemTxt">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="loginPageInput">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  className="getStartedBtn"
                  onClick={() => setSignIn(true)}
                >
                  Get Started >
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
