import chartActionTypes from './chart.actionTypes';
import ChartType from './Chart';

export const chartDataRequest = () => ({
    type: chartActionTypes.CHART_DATA_REQUEST,
});

export const chartDataReceived = (chartData: ChartType) => ({
    type: chartActionTypes.CHART_DATA_RECEIVED,
    payload: {
        chartData
    },
});