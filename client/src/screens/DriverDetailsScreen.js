import React, { useState } from 'react';
import DriverInfo from '../components/DriverInfo';
import InputForm from '../components/InputForm';

const DriverDetailsScreen = () => {
  const [apiData, setApiData] = useState({
    loading: false,
    data: null,
    error: null,
  });
  return (
    <div>
      <InputForm apiData={apiData} setApiData={setApiData} />
      {apiData && apiData.data !== null && <DriverInfo apiData={apiData} />}
    </div>
  );
};

export default DriverDetailsScreen;
