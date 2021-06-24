import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import Nav from "../HomePage/Navbar/Nav";
import PlansSection from "./PlansSection/PlansSection";
import "./ProfilePage.css";

function ProfilePage() {
  const user = useSelector(selectUser);
  return (
    <div className="profilePage">
      <Nav />
      <div className="profilePageBody">
        <h1>My Profile</h1>
        <div className="profilePageInfo">
          <img
            src="https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png"
            alt=""
          />
          <div className="profiPageDetails">
            <h2>{user.email}</h2>
            <div className="profilePagePlans">
              <h3>Plans</h3>
              <PlansSection />
            </div>
            <button className="signOutBtn" onClick={() => auth.signOut()}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
