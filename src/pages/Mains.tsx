import React from 'react'
import LineCharts from './LineCharts'
import LineGraph from './LineGraph'
import Map from './Map'

const Mains = () => {
  return (
    <>
    <div className='flex flex-col w-full h-auto'>

    <div className='w-full h-80 '>
        <LineGraph />
    </div>
    <br />
    <br />
    <hr />
    <div className='w-3/4 h-96'>
        <LineCharts />

    </div>
    <div>
        <Map />
    </div>
    </div>
    </>
  )
}

export default Mains