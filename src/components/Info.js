import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Info = () => {
  return (
    <div>
      <h6>The library for web and native user interface</h6>
      <section>
        <a href="/">
    <FontAwesomeIcon icon={faLink}    style={{color:"#3C3C3C ",}} /> react.dev 
        </a>

        <p>
      <FontAwesomeIcon icon={faCalendar} />    <span> Joined July 2013  </span> 
        </p>
      </section>
      <section>
<p>
267 <span>Following</span> 

</p>
<p>
 708.1k <span>Followers</span>

</p>
      </section>
      <br></br>
      <img src={require("../assets/gd.png")} alt="followers" /> 
      <span>     Followed by
      Mohamad Kukhun,Yazen Alsada, and 14 others you follow
        </span>
    </div>
  );
};

export default Info;
