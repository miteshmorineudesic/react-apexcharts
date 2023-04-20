import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
    const [series, setSeries] = useState([
        {
            name: "Public",
            data: [2, 0, 3, 7, 2, 5, 7, 14.5, 14],

        },
        {
            name: "Private",
            data: [19, 9, 16, 17, 9, 8, 14, 14.5, 9],
            dataLabels: {
                enabled: true,
                offsetY: -15,
            },
        },
    ]);

    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: "line",
            marginLeft: 5000,
            marginRight: 500,
        },
        forecastDataPoints: {
            count: 2, // last three datapoints will be dotted
        }, dataLabels: {
            enabled: true,
            enabledOnSeries: undefined,
            formatter: function (val, opts) {
                return val
            },
            textAnchor: 'middle',
            distributed: false,
            offsetX: 0,
            offsetY: 0,
            style: {
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: '',
                colors: undefined
            }, background: {
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
            tickAmount: 10,
            labels: {
                show: true,
                rotate: 45,
              },
              rotateAlways: true,
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

        colors: ['#000', '#ff0000'] //arrays used to set the color to black and red respectively

    });

    return (
        <div id="chart">
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={350}
                width={700}
            />
        </div>
    );
};

export default ApexChart;
