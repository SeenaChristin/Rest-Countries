import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";

const Details = () => {
  const [country, setCountry] = useState({});
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  useEffect(() => {
    getCountryDetails(id);
  }, [country, id]);

  const getCountryDetails = async (id) => {
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    let result = data.filter((country) => {
      return country.cca3 === id;
    });
    setCountry(result[0]);
  };
  return Object.keys(country).length === 0 ? null : (
    <div
      className={
        theme ? "text-black m-10 h-[100vh]" : "text-white m-10 h-[100vh]"
      }
    >
      <Link to="/">
        <button className="mb-10 border border-gray-200 shadow-md p-2">
          ← Back to Home
        </button>
      </Link>
      <div className="flex justify-start gap-16 items-center">
        <img className="w-[50%] " alt="flag" src={country.flags.png}></img>
        <div>
          <div className="font-bold text-xl mb-8">{country.name.common}</div>
          <div className="flex">
            <div className="flex flex-col">
              <div className="mb-1">
                <span className="font-semibold">Native Name: </span>
                {Object.values(country.name.nativeName)[0].common}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Population: </span>
                {country.population}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Region: </span>
                {country.region}
              </div>
              <div className="mb-1">
                <span className="font-semibold">SubRegion: </span>
                {country.subregion}
              </div>
              <div className="mb-1">
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </div>
            </div>
            <div className="ml-10">
              <div className="flex flex-col">
                <div className="mb-1">
                  <span className="font-semibold">Top Level Domain: </span>
                  {country.tld}
                </div>

                <div className="mb-1">
                  <span className="font-semibold">Currencies: </span>
                  {Object.values(country.currencies)[0].name}
                </div>
                <div className="mb-1">
                  <span className="font-semibold">Languages: </span>
                  {Object.values(country.languages).map((name) => name) + ", "}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center">
            <div className="font-bold text-lg">Border Countries: </div>
            <div className="flex flex-wrap">
              {country.borders === undefined
                ? null
                : country?.borders.map((border) => (
                    <Link to={"/" + border}>
                      <button className="border border-gray-300 m-2 p-2">
                        {border}
                      </button>
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
