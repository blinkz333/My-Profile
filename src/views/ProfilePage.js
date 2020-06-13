import React, { useState } from "react";
import ProfilePageHeader from "./Header/ProfilePageHeader";
import AboutMe from './Component/Aboutme'
import DarkFooter from "./Footers/DarkFooter.js";

function ProfilePage() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });

  return (
    <>
      <div className="wrapper">
        <ProfilePageHeader />
        <AboutMe/>
        <DarkFooter />
      </div>
      
    </>
  );
}

export default ProfilePage;
