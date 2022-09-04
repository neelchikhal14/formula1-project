import React, { useState } from 'react';
import Chart from '../components/Chart';
import DriverInfo from '../components/DriverInfo';
import DriverJourney from '../components/DriverJourney';
import InputForm from '../components/InputForm';

import MultiLineChart from '../components/MultiLineChart';

import './css/DriverDetailsScreen.css';
const DriverDetailsScreen = () => {
  const [apiData, setApiData] = useState({
    loading: false,
    data: null,
    error: null,
  });
  return (
    <div className='driver__screen__container '>
      <InputForm apiData={apiData} setApiData={setApiData} />
      {apiData && apiData.loading === false && apiData.data !== null && (
        <Chart apiData={apiData} />
      )}

      {apiData && apiData.loading === false && apiData.data !== null && (
        <DriverInfo apiData={apiData} />
      )}
      {apiData && apiData.loading === false && apiData.data !== null && (
        <DriverJourney apiData={apiData} />
      )}
    </div>
  );
};

export default DriverDetailsScreen;
