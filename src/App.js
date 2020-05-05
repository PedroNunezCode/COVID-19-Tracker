import React, { useEffect, useState } from 'react';

/**
 * The following imports will be for the whole application, ranging
 * from components to all the required css and libraries used to maintain
 * the main application enpoint.
 */
import styles from './App.module.css';

import { Cards, Chart, CountryPicker } from './Components';
import { fetchData } from './api';


function App() {

  const [data, setData] = useState({});
  const [country, setCountry] = useState();

  useEffect(() => {
    async function getAPIData() {
      setData(await fetchData());
    }

    getAPIData();
  }, [setData]);

  const handleCountryChange = async (country) => {
     setData(await fetchData(country));
     setCountry(country);
  }

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  )
}

export default App;
