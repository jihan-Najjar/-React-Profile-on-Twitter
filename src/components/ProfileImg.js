import React from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { icons } from "../assets/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Info from "./Info";
import MovingInProfile from "./MovingInProfile";

const ProfileImg = () => {
  let more = icons.find((icon) => icon.name === "More");
  let moreIcon = (
    <FontAwesomeIcon icon={more.icon} style={{ color: "#e7e9ea" }} size="2xl" />
  );
  let notification = icons.find((icon) => icon.name === "Notifications");
  let notificationIcon = (
    <FontAwesomeIcon icon={notification.icon} style={{ color: "#e7e9ea" }} size="2xl" />
  );

  return (
    <div id="profileImg">
        <div className="personalPhoto" >
        <img id="bgCover"  src={logo} alt="react icon cover profile " />
        <img id="bgPersonal" src={logo} alt="react icon personal profile  " />

        </div>
      <div className="profileIcon">
         <Button value={moreIcon}  classN="inProfileIcon"/>

      <Button value={notificationIcon} classN="inProfileIcon" />
      <Button  value="Following" classN="inProfileIcon" />
      </div>
     <div className="profileHead">
    <section className="reactS">
    <h3>React</h3>
     <p>
        <span>@reactjs</span>
      </p>
      </section> 
   
     <Info/>

     </div>
      
    </div>
  );
};

export default ProfileImg;
