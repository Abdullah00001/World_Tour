import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  const handleSetCountry = (requestedCountry) => {
    setVisitedCountry([...visitedCountry, requestedCountry]);
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl text-center p-4">
          Total Countries : {countries.length}
        </h1>
        <div className="w-full">
          <h1 className="text-center text-3xl">Visited Country : {visitedCountry.length}</h1>
          <div className="p-4 rounded-lg shadow-lg mt-4 flex flex-wrap gap-3">
            {
                visitedCountry.map((visitedCountry)=>(
                    <div key={visitedCountry.ccn3} className="p-4 bg-amber-100 rounded-lg">
                        <h1>{visitedCountry.name.common}</h1>
                    </div>
                ))
            }
          </div>
        </div>
        <div className="grid grid-cols-1 p-2 w-full  md:grid-cols-3 mt-4 gap-4 ">
          {countries.map((country) => (
            <Country
              key={country.ccn3}
              country={country}
              handleSetCountry={handleSetCountry}
            ></Country>
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;
