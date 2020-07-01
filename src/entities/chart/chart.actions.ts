import artistsActionTypes from './chart.actionTypes';
import ChartType from './Chart';

export const chartDataRequest = () => ({
    type: artistsActionTypes.CHART_DATA_REQUEST,
});

export const chartDataReceived = (chartData: ChartType) => ({
    type: artistsActionTypes.CHART_DATA_RECEIVED,
    payload: {
        chartData
    },
});