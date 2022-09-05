import React from 'react';
import MultiLineChart from './MultiLineChart';

import './css/Chart.css';
import LineChart from './LineChart';
const Chart = ({ apiData }) => {
  return (
    <div className='chart__section'>
      <MultiLineChart apiData={apiData} />
      <LineChart apiData={apiData} />
    </div>
  );
};

export default Chart;
