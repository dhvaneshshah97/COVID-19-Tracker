import React from 'react';
import { Cards, Chart, CountryPicker } from './components/paths';
import styles from './App.module.css';
import { fetchData } from './api/coreApi';
import coronaImage from './images/covid.png';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            data: {},
            country: '',
        }
        this.handleCountryChange = this.handleCountryChange.bind(this);
    }
    


    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({
            data: fetchedData,
        });
    }  

    async handleCountryChange(country) {
        const fetchedData = await fetchData(country);
        this.setState({
            data: fetchedData,
            country,
        });
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img src={coronaImage} alt="COVID-19" className={styles.image} />
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        );
    }
}

export default App;