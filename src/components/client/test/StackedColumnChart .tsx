import { Column } from '@ant-design/charts';

const StackedColumnChart = () => {
    const data = [
        { year: '2018', category: 'A', value: 30 },
        { year: '2018', category: 'B', value: 20 },
        { year: '2019', category: 'A', value: 50 },
        { year: '2019', category: 'B', value: 30 },
        { year: '2020', category: 'A', value: 70 },
        { year: '2020', category: 'B', value: 40 },
    ];

    const config = {
        data,
        isStack: true,
        xField: 'year',
        yField: 'value',
        seriesField: 'category',
        label: {
            position: 'middle',
            style: {
                fill: '#FFFFFF',
                opacity: 0.6,
            },
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
            shared: true,
            showMarkers: false,
        },
        interactions: [{ type: 'active-region' }],
    };

    return <Column {...config} />;
};

export default StackedColumnChart;
