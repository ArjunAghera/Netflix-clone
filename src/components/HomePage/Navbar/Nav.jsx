import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import logo from "../../../assets/netflix-logo-png-2582.png";
import "./Nav.css";

function Nav() {
  const history = useHistory();
  const [showBlack, setShowBlack] = useState(false);

  const transitionBlack = () => {
    if (window.scrollY > 100) {
      setShowBlack(true);
    } else {
      setShowBlack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionBlack);
    return () => window.removeEventListener("scroll", transitionBlack);
  }, []);

  return (
    <div className={`nav ${showBlack && `navBlack`}`}>
      <img
        onClick={() => history.push("/")}
        className="navLogo"
        src={logo}
        alt=""
      />
      <img
        onClick={() => history.push("/profile")}
        className="navAvatar"
        src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
        alt=""
      />
    </div>
  );
}

export default Nav;
