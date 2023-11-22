import React, { useEffect, useState } from "react";
import Select from "react-select";
import CountryCard from "./CountryCard";
import { filterCountry } from "../utils/helper";
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

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    let data = await fetch("https://restcountries.com/v3.1/all");
    let json = await data.json();
    setCountries(json);
    setFilteredCountries(json);
  };
  return (
    <div className="mx-12">
      <div className="mt-12 flex justify-between">
        <input
          className="p-2 border border-gray-300 rounded-sm w-[30%] shadow-md"
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
        <Select
          className="p-2 border border-gray-100 w-[30%] shadow-md"
          value={options.value}
          options={options}
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
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                flagurl={country.flags.png}
              />
            ))}
      </div>
    </div>
  );
};

export default Body;
