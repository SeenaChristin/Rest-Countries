import React, { useEffect, useState } from "react";
import Select from "react-select";
import CountryCard from "./CountryCard";
import { filterCountry } from "../utils/helper";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
const options = [
  { value: "", label: "Filter by Region" },
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Body = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [serachText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    let data = await fetch("https://restcountries.com/v3.1/all");
    let json = await data.json();
    setCountries(json);
    setFilteredCountries(json);
  };
  const colourStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: theme
        ? "#FFFFFF"
        : "rgb(55 65 81 / var(--tw-bg-opacity))",
      cursor: "pointer",
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: theme ? "rgb(55 65 81 / var(--tw-bg-opacity))" : "#FFFFFF",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      console.log({ data, isDisabled, isFocused, isSelected });
      return {
        ...styles,
        backgroundColor:
          theme ^ isFocused
            ? "#FFFFFF"
            : "rgb(55 65 81 / var(--tw-bg-opacity))",
        color:
          theme ^ isFocused
            ? "rgb(55 65 81 / var(--tw-bg-opacity))"
            : "#FFFFFF",
        cursor: "pointer",
      };
    },
  };
  return (
    <div className="mx-12">
      <div className="mt-12 flex justify-between">
        <div className={theme ? "bg-white w-[30%]" : "bg-gray-700 w-[30%]"}>
          <input
            className={
              theme
                ? "bg-white p-2 border border-gray-300 w-[100%] rounded-sm  shadow-md"
                : " bg-gray-700 p-2 border border-gray-300 w-[100%] rounded-sm  shadow-md"
            }
            type="text"
            placeholder="🔍 Search"
            onChange={(event) => {
              setSearchText(event.target.value);
              let filteredData = filterCountry(
                countries,
                event.target.value,
                filterText
              );
              setFilteredCountries(filteredData);
            }}
          ></input>
        </div>
        <Select
          className="p-2 border border-gray-100 w-[30%] shadow-md"
          value={options.value}
          options={options}
          styles={colourStyles}
          defaultValue={options[0]}
          onChange={(event) => {
            setFilterText(event.value);
            let filteredData = filterCountry(
              countries,
              serachText,
              event.value
            );
            setFilteredCountries(filteredData);
          }}
        ></Select>
      </div>

      <div className="flex flex-wrap gap-16 justify-start mt-10">
        {filteredCountries.length === 0
          ? null
          : filteredCountries.map((country) => (
              <Link className="inline-block w-[20%]" to={"/" + country.cca3}>
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  flagurl={country.flags.png}
                />
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Body;
