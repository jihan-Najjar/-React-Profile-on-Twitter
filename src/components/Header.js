import React from "react";
import Button from "./Button";
import NavHeader from "./NavHeader";
import User from "./User"

const Header = () => {
  
  return (
    <div className="header">
      
      <NavHeader/>
  
       <User/>
    </div>
  );
};

export default Header;
