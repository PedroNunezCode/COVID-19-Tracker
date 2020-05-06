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

<<<<<<< HEAD
  /**
   * The following state variables will be used to keep track of the data that needs to
   * be displayed along with the country if one is selected.
   */
  const [data, setData] = useState({});
  const [country, setCountry] = useState();

  /**
   * This hook will handle fetching the current data from the api with axios. It will set
   *  the response equal to the state variable of "data". Anytime the setData function is triggered,
   * this hook will refetch the required data to be displayed.
   */
=======
  const [data, setData] = useState({});
  const [country, setCountry] = useState();

>>>>>>> 3bb318ab53474014ef7f16c137105cb6496bbdc8
  useEffect(() => {
    async function getAPIData() {
      setData(await fetchData());
    }

    getAPIData();
  }, [setData]);

<<<<<<< HEAD
  /**
   * This callback function will handle changing the country which a user selects. It will be set 
   * with the setData state variable and tigger the useEffect hook once more to re-fetch the api. 
   */
=======
>>>>>>> 3bb318ab53474014ef7f16c137105cb6496bbdc8
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
