import React from "react";
import darkIcon from "../images/dark.png";
import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
import LightIcon from "../images/Light.png";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={theme ? "bg-white text-black" : "bg-gray-700  text-white"}>
      <div className="my-3 px-12 flex justify-between border-b-2 border-gray-100 shadow-md">
        <div className="pt-5 font-bold">Where in the world</div>
        <div className="m-5 h-8 flex justify-between">
          <img
            className="-rotate-45 mr-3"
            alt="dark-Icon"
            src={theme ? darkIcon : LightIcon}
          ></img>
          <button
            onClick={() => {
              setTheme((prev) => !prev);
            }}
          >
            {theme ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
