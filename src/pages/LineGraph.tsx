
import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { RootState, useAppDispatch } from '../store';
import { useSelector } from 'react-redux';
import { fetchCasesData } from '../redux/casesSlice';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineGraph = () => {
  const dispatch = useAppDispatch();
  const casesData = useSelector((state: RootState) => state.cases);


  useEffect(() => {
    dispatch(fetchCasesData());
  }, [dispatch]);

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };


  const keys = Object.keys(casesData.data.cases)
  const keys1 = Object.keys(casesData.data.deaths)
  const keys2 = Object.keys(casesData.data.recovered)


  const values = Object.values(casesData.data.cases)
  const values1 = Object.values(casesData.data.deaths)
  const values2 = Object.values(casesData.data.recovered)

  
  console.log(values1, 'values7')
  const data = {
  labels:keys,keys1,keys2,
    datasets: [
      {
        label: 'cases',
          data:values,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Deaths',
        data: values1,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'Recovered',
        data: values2,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(, 0, 0, 0)',
      },
    ],
  };


  return (
    <>





      <Line options={options} data={data} className=' flex flex-col' />;
      <div className=' flex flex-col'>

        <hr />
        <br />

      </div>

    </>
  )
}
export default LineGraph