import React from "react";
import darkIcon from "../images/dark.png";

const Header = () => {
  return (
    <div className="my-3 px-12 flex justify-between border-b-2 border-gray-100 shadow-md">
      <div className="pt-5 font-bold">Where in the world</div>
      <div className="m-5 h-8 flex justify-between">
        <img className="-rotate-45 mr-3" alt="dark-Icon" src={darkIcon}></img>
        <div>Dark Mode</div>
      </div>
    </div>
  );
};

export default Header;
