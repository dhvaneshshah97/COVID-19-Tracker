import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/coreApi';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    const fetchAPI = async () => {
        const data = await fetchDailyData();
        setDailyData(data);
        console.log(data);
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    
    
    const lineChart = (
        dailyData.length ? (<Line
            data={{
                labels: dailyData.map(({date}) => date),
                datasets:[{
                    data: dailyData.map(({confirmed}) => confirmed ),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },{
                    data: dailyData.map(({deaths}) => deaths ),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }],
            }}
            />) : null
    )

    return (
        <div className={styles.container}>
            {lineChart}  
        </div>
    );
}

export default Chart;