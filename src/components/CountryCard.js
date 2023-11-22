import React from "react";

const CountryCard = (props) => {
  let { name, population, region, capital, flagurl } = props;
  return (
    <div className="w-[20%] h-80 shadow-md border border-gray-50 rounded-md">
      <img className="w-[100%] h-40 rounded-md" alt="flag" src={flagurl}></img>
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
  );
};

export default CountryCard;
