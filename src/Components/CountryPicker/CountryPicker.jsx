import React, { useEffect, useState } from 'react';

import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';

import { getCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {

    const [countries, setCountries] = useState([]);

<<<<<<< HEAD
=======

>>>>>>> 3bb318ab53474014ef7f16c137105cb6496bbdc8
    useEffect(() => {
        const fetchCountries = async () => {
            setCountries(await getCountries());
        }
<<<<<<< HEAD
        fetchCountries();
    }, [setCountries]);

=======

        fetchCountries();
    }, [setCountries]);


    console.log(countries)

>>>>>>> 3bb318ab53474014ef7f16c137105cb6496bbdc8
    return (
        <div className={styles.container}>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}}>
                    <option value="global">Global</option>
                    {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker;