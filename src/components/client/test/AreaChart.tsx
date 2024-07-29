import React from 'react';
import { Area } from '@ant-design/charts';

const AreaChart = () => {
    const data = [
        { year: '2010', value: 30 },
        { year: '2011', value: 40 },
        { year: '2012', value: 35 },
        { year: '2013', value: 50 },
        { year: '2014', value: 49 },
        { year: '2015', value: 60 },
        { year: '2016', value: 70 },
        { year: '2017', value: 90 },
        { year: '2018', value: 100 },
    ];

    const config = {
        data,
        xField: 'year',
        yField: 'value',
        smooth: true, // Làm mịn các đường miền
        areaStyle: { fill: 'l(270) 0:#ffffff 0.5:#36cfc9 1:#36cfc9' }, // Màu chuyển sắc
        line: {
            color: '#36cfc9', // Màu đường viền
        },
        xAxis: {
            title: {
                text: 'Year',
            },
        },
        yAxis: {
            title: {
                text: 'Value',
            },
        },
        tooltip: {
            showCrosshairs: true, // Hiển thị đường chéo trên tooltip
            shared: true,
        },
    };

    return <Area {...config} />;
};

export default AreaChart;
