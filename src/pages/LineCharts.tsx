import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { RootState } from '../store';
// import { setCovidData } from './covidDataSlice';
// import { AppThunk } from './types';
import { useAppDispatch } from '../store';

function LineCharts() {
    //   const covidData = useSelector((state: RootState) => state.covidData);

    const dispatch = useAppDispatch();
    const covidData = useSelector((state: RootState) => state.chart);
    // console.log(covidData.cases,'11')
    const chartData = {
        labels: [  "updated","cases","todayCases","deaths","todayDeaths","recovered","todayRecovered","active","critical","casesPerOneMillion","deathsPerOneMillion","tests","testsPerOneMillion","population","oneCasePerPeople","oneDeathPerPeople","oneTestPerPeople","activePerOneMillion","recoveredPerOneMillion","criticalPerOneMillion","affectedCountries"],
        datasets: [
            {
                label: 'Covid Data',
                data: [
                    covidData.updated,
                    covidData.cases,
                    covidData.deaths,
                    covidData.recovered,
                    covidData.active,
                    covidData.critical,
                    covidData.casesPerOneMillion,
                    covidData.deathsPerOneMillion,
                    covidData.tests,
                    covidData.testsPerOneMillion,
                    covidData.population,
                    covidData.oneCasePerPeople,
                    covidData.oneDeathPerPeople,
                    covidData.oneDeathPerPeople,
                    covidData.oneTestPerPeople,
                    covidData.activePerOneMillion,
                    covidData.recoveredPerOneMillion,
                    covidData.affectedCountries,
                    
                    covidData.criticalPerOneMillion
                ],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Line data={chartData} />
        </div>
    );
}

export default LineCharts;
