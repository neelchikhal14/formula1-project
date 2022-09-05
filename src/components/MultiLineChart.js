import React from 'react';
import { Chart, registerables } from 'chart.js';

import { Line } from 'react-chartjs-2';

import { createLabelsAndDatasets } from '../utilities/chartingUtilities';
import './css/MultiLineChart.css';
import { defaults } from 'chart.js';
defaults.font.family = 'f1reg';
Chart.register(...registerables);
const MultiLineChart = ({ apiData }) => {
  const chartData = createLabelsAndDatasets(apiData);
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Start/End Grid Position Vs Races',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const data = {
    labels: chartData[0],
    datasets: [
      {
        label: 'Start Positions',
        data: chartData[1],
        borderColor: 'hsl(240, 11%, 14%)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'End Positions',
        data: chartData[2],
        borderColor: 'hsl(2, 100%, 44%)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };
  return (
    <div className='multiline-chart'>
      <Line options={options} data={data} />
    </div>
  );
};

export default MultiLineChart;
