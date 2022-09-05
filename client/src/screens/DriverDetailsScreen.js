import React, { useState } from 'react';
import Chart from '../components/Chart';
import DriverInfo from '../components/DriverInfo';
import DriverJourney from '../components/DriverJourney';
import InputForm from '../components/InputForm';

import Error from '../components/Error';

import './css/DriverDetailsScreen.css';
import Loading from '../components/Loading';
const DriverDetailsScreen = () => {
  const [apiData, setApiData] = useState({
    loading: false,
    data: null,
    error: null,
  });
  return (
    <div className='driver__screen__container '>
      <InputForm apiData={apiData} setApiData={setApiData} />
      {apiData?.error && <Error msg={apiData.error} />}
      {apiData?.loading && <Loading />}
      {apiData &&
        apiData.loading === false &&
        apiData.error === null &&
        apiData.data !== null && <Chart apiData={apiData} />}

      {apiData &&
        apiData.loading === false &&
        apiData.error === null &&
        apiData.data !== null && <DriverInfo apiData={apiData} />}
      {apiData &&
        apiData.loading === false &&
        apiData.error === null &&
        apiData.data !== null && <DriverJourney apiData={apiData} />}
    </div>
  );
};

export default DriverDetailsScreen;
