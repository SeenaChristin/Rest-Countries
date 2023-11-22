export const filterCountry = (countries, searchtxt, filtertxt) => {
  let result = countries.filter((country) => {
    console.log(searchtxt + " " + filtertxt);
    if (filtertxt !== "") {
      console.log("hi");
      return (
        country.name.common.toLowerCase().includes(searchtxt.toLowerCase()) &&
        country.region === filtertxt
      );
    } else {
      return country.name.common
        .toLowerCase()
        .includes(searchtxt.toLowerCase());
    }
  });
  return result;
};
