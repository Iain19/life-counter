export function getActivityDataByWeekId(state, weekId) {
    return state.activities.activitiesByWeekId[weekId];
};

export function getCurrentWeekId(state) {
    return state.date.currentWeekId;
}