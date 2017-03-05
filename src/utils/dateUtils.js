const MS_IN_DAY = 24 * 60 * 60 * 1000;
const MS_IN_WEEK = 7 * MS_IN_DAY;
const MS_IN_WEEK_MARGIN = 3 * MS_IN_DAY;

export function getWeekIdByDate(date) {
    return Math.ceil((date.getTime() - MS_IN_WEEK_MARGIN)/MS_IN_WEEK);
};

export function getCurrentWeekId() {
    return getWeekIdByDate(new Date());
};