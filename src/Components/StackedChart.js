import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const StackedChart = () => {
  const [series, setSeries] = useState([{
    name: 'Public',
    data: [68, 66, 63, 61, 60, 59, 58, 56, 55]
  }, {
    name: 'Private',
    data: [32, 34, 37, 39, 40, 41, 42, 44, 45]
  }]);

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'area'
    },
    fill: {
        type: 'solid',
      },

    colors: ['#000', '#ff0000'], //arrays used to set the color to black and red respectively

    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'string',
      categories: ["FY16","FY17","FY18","FY19","FY20","FY21","FY22","FY23","FY24"]
    },
    yaxis: {
        show: true,
        tickAmount: 4,
        min: 0,
        max: 80},
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
    legend: {
        width: 700,
        fontSize: '15px',
        markers: {
            shape: 'line',
            width: 25,
            height: 2,
            // strokeWidth: null,
            radius: 0,
            offsetX: 0,
            offsetY: 0
        },}
  });


  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="area" height={350} width={700}/>
    </div>
  );
};

export default StackedChart;
