
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
// import faker from 'faker';
import { RootState, useAppDispatch } from '../store';
import { useSelector } from 'react-redux';
import { fetchCasesData } from '../redux/casesSlice';
import Map from './Map';

import LineCharts from './LineCharts';


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
    // console.log( '11',(casesData.cases));

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

const labels = ['1/12/20', '1/13/20', '1/14/20', '1/22/20', '1/23/20','1/24/20','1/26/20','1/2/20','1/2/20','1/2/20','1/2/20','1/2/20','1/2/20','1/2/20','1/2/20','1/2/20','1/2/20','1/2/20','1/2/20','1/2/20','1/2/20','7/2/20','4/2/20','5/12/20','4/2/20','12/22/20','11/12/20'];

 const data = {
  labels,
  datasets: [
    {
      label: 'cases',
      // data: casesData.map(() => datatype.number({ min: -1000, max: 1000 })),
      data: [557, 657, 944, 1437, 2120,3456,4567,5678,6789,67890,7890,8900,9800,9876],
      
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Deaths',
      // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [17, 18, 26, 42, 56],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
      {
      label: 'Recovered',
      data: [350, 321, 539, 42, 456,789,67890,7890,8900,9800,987],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(, 0, 0, 0)',
    },
  ],
};


  return (
    <>
  
  


 
  <Line options={options} data={data} className=' flex flex-col'/>;
 <div className=' flex flex-col'>

<hr />
<br />

 </div>
 
    </>
  )
}
export default LineGraph