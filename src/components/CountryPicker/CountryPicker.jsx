import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api/coreApi'; 

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    const fetchAPI = async () => {
        const countries = await fetchCountries();
        setFetchedCountries(countries);
        console.log(countries);
    }
    useEffect(() => {
        fetchAPI();
    }, [setFetchedCountries]);


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {fetchedCountries.map((c,i) => (<option key={i} value={c}>{c}</option>))}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;