import { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // setVisited(true);  // one click and not to back more click
    setVisited(!visited);  // toggle: one click true then one click false
  };

  return (
    <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
      <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
      {visited ? "I have visited this country." : 'I want visit this country.'}
    </div>
  );
};

export default Country;
