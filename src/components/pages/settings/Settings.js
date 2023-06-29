import Sidebar from "../../sidebar/Sidebar";
import "./settings.css";

import React from "react";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsContainer">
        <div className="titleSettings">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePic">
            <img src="assets/alfred.png" alt="" className="settingProfileImg" />
            <label htmlFor="fileInput">
              <img
                className="settingProIcon"
                src="assets/icons/user-profile-16.png"
                alt=""
              />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username:</label>
          <input type="text" placeholder="Alfred" />
          <label>Email:</label>
          <input type="email" placeholder="example@gmail.com" />
          <label>Password:</label>
          <input type="password" placeholder="16sbnkm55mt6" />
          <button className="settingSubmit ">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
