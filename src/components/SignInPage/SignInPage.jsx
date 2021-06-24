import React, { useRef } from "react";
import "./SignInPage.css";
import { auth } from "../../firebase";

function SignInPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="signInPage">
      <form>
        <h1 className="SignInTxt">Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          New to Netflix? <strong onClick={register}>Sign up now.</strong>
        </h4>
      </form>
    </div>
  );
}

export default SignInPage;
