import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ConsumerCategoriesBar = () => {
    const [series] = useState([
        {
            name: 'Agriculture',
            data: [13, 14, 13, 13, 13, 13, 14, 13, 13, 13]
        },
        {
            name: 'Industry',
            data: [44, 42, 38, 35, 33, 31, 28, 27, 25, 23],
        },
        {
            name: 'Services',
            data: [24, 24, 25, 27, 27, 28, 28, 29, 30, 31]
        },
        {
            name: 'Retail',
            data: [19, 20, 24, 25, 27, 28, 30, 31, 32, 33],
        },
    ]);

    const [options] = useState({
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '3D',
            toolbar: {
                show: true
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
                "FY15",
                "FY16",
                "FY17",
                "FY18",
                "FY19",
                "FY20",
                "FY21",
                "FY22",
                "FY23",
                "FY24",
            ],
            axisBorder: {
                show: 'true',
                color: '#0d0d0d',
                height: 1,
                width: '100%',
            },
        },
        yaxis:{
            min: 0,
                max:100,

            axisBorder: {
                show: 'true',
                color: '#000000',
                height: 100,
                width: 1,
                
            },
            axisTicks: {
                show: true,
                borderType: 'solid',
                color: '#78909C',
              },
            labels: {
                formatter: function (value) {
                  return value + '%'; // add % sign to yaxis label
                }
              }

        },
        // plotOptions: {
        //     bar: {
        //       horizontal: false,
        //       columnWidth: '70%',
        //       endingShape: 'flat',
        //       dataLabels: {
        //         position: 'top',
        //       },
        //     },
        //   },
        //   dataLabels: {
        //     enabled: true,
        //     formatter: (val, opts) => {
        //       const cumVal = opts.w.globals.seriesCumulative[opts.seriesIndex][opts.dataPointIndex];
        //       return cumVal.toFixed(2) + '%';
        //     },
        //     offsetY: -20,
        //     style: {
        //       fontSize: '12px',
        //       colors: ['#304758'],
        //     },
        //   },
        fill: {
            opacity: 1,
        }, 
        grid: {
            show: 'false',
            borderColor: 'transparent', //removes grid lines
        },
        colors: ['#5b9bd5', '#ed7d31','#a5a5a5','#fec100'], //arrays used to set the color to black and red respectively
       
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
        }
    });

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={350}  width={700} />
        </div>
    );
};

export default ConsumerCategoriesBar;
