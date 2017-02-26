export { fetchActivityDataByWeekId } from '../services/dataService';
export { getCurrentWeekId } from '../utils/dateUtils';

export function getActivityDataByWeekId(weekId = getCurrentWeekId()) {
    return function(dispatch, getState) {
        const data = fetchActivityDataByWeekId(weekId);
        return data;
    };
};
