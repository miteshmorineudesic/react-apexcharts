import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const GradientLineChart = () => {
    const [series, setSeries] = useState([
        {
            name: "Public",
            data: [2, 0, 3, 7, 2, 5, 7, 14.5, 14],
        },
        {
            name: "Private",
            data: [19, 9, 16, 17, 9, 8, 14, 14.5, 9],
        },
    ]);

    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: "line",
        },
        forecastDataPoints: {
            count: 2, // last three datapoints will be dotted
        },
        dataLabels: {    //label on chart line
            enabled: true,
            textAnchor: 'middle',
            distributed: false,
            style: {
                fontSize: '15px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: '',
            },
            background: {
                enabled: false,
            },
        },

        stroke: {
            width: 1,
            curve: "smooth",
        },

        xaxis: {
            type: "string",
            categories: [
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
            show: true,
            tickAmount: 10,
            labels: {
                show: true,
                rotate: -90,
                rotateAlways: true,
                minWidth: 100,
                maxHeight: 120,
                style: {
                    colors: [],
                    fontSize: '15px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
            axisBorder: {
                show: 'true',
                color: '#000000',
                height: 1,
                width: '100%',
            },
            
        },

        grid: {
            show: 'false',
            borderColor: 'transparent', //removes grid lines
        },

        yaxis: {
            labels: {
                show: false, // hide labels on y-axis
            },
        },

        fill: {
            type: "solid",
            colors: "red"
        },

        colors: ['#000', '#ff0000'], //arrays used to set the color to black and red respectively

        legend: {
            width: 700,
            fontSize: '15px',
            markers: {
                shape: 'line',
                width: 25,
                height: 2,
                strokeWidth: 0,
                radius: 0,
                offsetX: 0,
                offsetY: 0
            },
            itemMargin: {
                horizontal: 100,
                vertical: 0
            },
        }

    });

    return (
        <div id="chart">
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={350}
                width={700}
            // marginleft={3000}
            />
        </div>
    );
};

export default GradientLineChart;
