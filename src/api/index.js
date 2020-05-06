import axios from 'axios';

/**
 * The url variable is the url that we will use to access the api built for covid19.
 */
const url = 'https://covid19.mathdro.id/api';


/**
 *  This function will be triggered from within the App.js file. This function handles
 * fetching the information from a desired country and returning the specified information
 * for the use of our chart and cards on the front end.
 */
export const fetchData = async (country) => {
    let editableUrl = url;

    if(country && country !== "global"){
        editableUrl = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, deaths, recovered, lastUpdate } } = await axios.get(editableUrl);
        
        return { confirmed, deaths, recovered, lastUpdate };
    } catch (error) {
    }
}

/**
 * Very similar to the top except this function will fetch the information for the day and not a specific
 * country. It returns the required information for the use of the cards and charts on the frontend.
 */

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }));

        return modifiedData
    } catch (error) {
        
    }
}

/**
 * This function handles displaying the countries on the input on the frontend. Not every country has
 * been affected by covid19 so thankfully there is a shorter list of countries you can choose from. This returns 
 * an array with all the names of the countries to be displayed on the frontend.
 */

export const getCountries = async () => {
    try {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        
        return countries.map((country) => country.name);
    } catch (error) {
        
    }
}