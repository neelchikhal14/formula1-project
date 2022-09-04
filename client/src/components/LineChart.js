import React from 'react';

import { Chart, registerables } from 'chart.js';

import { Line } from 'react-chartjs-2';

import { createLabelsAndDatasets } from '../utilities/chartingUtilities';
import './css/LineChart.css';
import { defaults } from 'chart.js';
defaults.font.family = 'f1reg';
Chart.register(...registerables);

const LineChart = ({ apiData }) => {
  const chartData = createLabelsAndDatasets(apiData);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Points scored per Race',
      },
    },
  };

  const data = {
    labels: chartData[0],
    datasets: [
      {
        label: 'Points',
        data: chartData[3],
        borderColor: 'hsl(240, 11%, 14%)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <div className='line-chart'>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
