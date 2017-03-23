import {getStartDayIdForWeekId} from '../utils/dateUtils';

export function getActivityDataByWeekId(state, weekId) {
    const firstDay = getStartDayIdForWeekId(weekId);
    const lastDay = firstDay + 7;
    const activitiesById =  state.activities.activitiesById;
    let currentActivitiesById = {};

    for (let activity in activitiesById) {
        currentActivitiesById[activity] = {
            valueByDayId: {}
        };
        for (let i = firstDay; i < lastDay; i += 1) {
            currentActivitiesById[activity].valueByDayId[i] = activitiesById[activity].valueByDayId[i];
        }
    }
    return currentActivitiesById;
};

export function getCurrentWeekId(state) {
    return state.date.currentWeekId;
}