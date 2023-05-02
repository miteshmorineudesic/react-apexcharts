import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const StackedColumnChart = () => {
    const [series] = useState([
        {
            name: 'Others',
            data: [32, 50, 140]
        },
        {
            name: 'Inorganic',
            data: [15, 25, 65],
        },
        {
            name: 'Pet-Chem',
            data: [51, 90, 350]
        },
        {
            name: 'Fertilizers',
            data: [18, 25, 50]
        },
        {
            name: 'Specially',
            data: [60, 95, 250]
        },
    ]);
  
      
    const [options] = useState({
        chart: {
            
            type: 'bar',
            height: 350,
            stacked: true,
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
        colors:[ '#b3b3b3','#00a9fb','#2236ef', '#9be7f2','#0098b6'  ], //arrays used to set the color to black and red respectively
        dataLabels: {
            enabled: true,
            // formatter: function (val) {
            //   return val + "%";
            // },
            // offsetY: -20,
            // style: {
            //   fontSize: '12px',
            //   colors: ["#304758"]
            // }
          },
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
            // style: {
            //     fontSize: '12px',
            //     fontFamily: undefined,
            // },
            fontWeight: 400,
            inverseOrder: true,
        },
        plotOptions: {
            bar: {
              horizontal: false,
              rangeBarGroupRows: true, // set to true to enable rangeBar
              rangeBarOverlap: false, // set to false to have rangeBar side-by-side
              dataLabels: {
                position: 'center',
                formatter: function(val, opts) {
                  let seriesIndex = opts.seriesIndex;
                  let cumulativeVal = 0;
                  for(let i = 0; i <= seriesIndex; i++) {
                    cumulativeVal += opts.w.globals.stackedSeriesTotals[i][opts.dataPointIndex];
                  }
                  return cumulativeVal;
                },
            }}}
    });

    return (
        <div id="chart">
            <p>asheini</p>
            <ReactApexChart options={options} series={series} type="bar" height={500} width={700} />
        </div>
    );
    };
    


export default StackedColumnChart