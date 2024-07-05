import { useState } from "react";

const Country = ({ country, handleSetCountry }) => {
  const [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(!status);
  };
  return (
    <>
      <div className="p-2 flex flex-col md:p-4 bg-slate-300 text-black shadow-2xl rounded-lg md:flex-row w-full gap-2">
        <div>
          <img className="w-[150px]" src={country.flags.png} alt="" />
        </div>
        <div>
          <h1 className="text-lg">Name : {country.name.common}</h1>
          <h1 className="text-lg">
            Independent : {country.independent ? "Yes" : "No"}
          </h1>
          <h1 className="text-lg">Capital : {country.capital}</h1>
          <h1 className="text-lg">Population : {country.population}</h1>
          <button
            onClick={() => {
              handleSetCountry(country);
              handleStatus();
            }}
            className="px-4 py-2 rounded-md bg-red-100"
          >
            {status ? "Visited" : "I will Go"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Country;
