import { fetchActivityDataByWeekId } from '../services/dataService';
import { getCurrentWeekId } from '../utils/dateUtils';
import { GET_ACTIVITY_DATA_BY_WEEK } from './types';

export function getActivityDataByWeekId(weekId = getCurrentWeekId()) {
    return function(dispatch, getState) {
        const data = fetchActivityDataByWeekId(weekId);
        const activitiesIdList = Object.keys(data);
        dispatch({type: GET_ACTIVITY_DATA_BY_WEEK, data, activitiesIdList});
    };
};
