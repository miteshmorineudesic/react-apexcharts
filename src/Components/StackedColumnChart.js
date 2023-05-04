import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const StackedColumnChart = () => {
    const [series] = useState([
        {
            name: 'Others',
            data: [62.5, 97.5, 275]
        },
        {
            name: 'Inorganic',
            data: [18, 27.5, 55],
        },
        {
            name: 'Pet-Chem',
            data: [51, 95, 360]
        },
        {
            name: 'Fertilizers',
            data: [15, 25, 67.5]
        },
        {
            name: 'Specialty',
            data: [32, 60, 165]
        },
    ]);


    const [options] = useState({
        chart: {

            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false
            },
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0,
                    },
                },
            },
        ],
        xaxis: {

            categories: [
                "2021",
                "2027",
                "2040",
            ],
            axisBorder: {
                show: 'true',
                color: '#0d0d0d',
                height: 1,
                width: '100%',
            },
        },
        yaxis: {
            min: 0,
            max: 1000,
            labels: {
                show: false, // hide labels on y-axis
            },
        },
        fill: {
            opacity: 1,
        },
        grid: {
            show: 'false',
            borderColor: 'transparent', //removes grid lines
        },
        colors: ['#b3b3b3', '#00a9fb', '#2236ef', '#9be7f2', '#0098b6'],

        tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: true,
            style: {
                fontSize: '12px',
                fontFamily: undefined,
            },
        },
        legend: {
            show: true,
            position: 'left',
            align: 'left',
            floating: false,
            fontSize: '14px',
            fontFamily: 'Helvetica, Arial',
            fontWeight: 400,
            inverseOrder: true,
            onItemHover: {
                highlightDataSeries: true
              },
        },
        plotOptions: {
            bar: {
              dataLabels: {
                enabled: true,
                total: {
                  enabled: true,
                  style: {
                    fontSize: '13px',
                    fontWeight: 900,
                    fontWeight: 'bold',
                    margin:'20px',
                    color: 'black'
                  },
                }
              }
            }
          }
,          
        dataLabels: {
            enabled: true,
            enabledOnSeries: undefined,
            style: {
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 'bold',
                colors: undefined
            },
            background: {
                enabled: true,
                padding: 4,
                borderRadius: 0,
                borderWidth: 0,
                borderColor: '#fff',
                opacity: 0.9,
            },
        }
    });

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={500} width={700} />
        </div>
    );
};



export default StackedColumnChart