import React from "react";
import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";

const CountryCard = (props) => {
  let { name, population, region, capital, flagurl } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "text-black" : "text-white"}>
      <div className="w-[100%] h-80 shadow-md border border-gray-50 rounded-md cursor-pointer">
        <img
          className="w-[100%] h-40 rounded-md"
          alt="flag"
          src={flagurl}
        ></img>
        <div className="p-4">
          <div className="font-bold mb-5 text-md">{name}</div>
          <div className="text-sm">
            <span className="font-semibold">Population: </span>
            {population}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Region: </span>
            {region}
          </div>
          <div className="text-sm">
            <span className="font-semibold">Capital: </span>
            {capital}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
