import { getCurrentWeekId } from '../utils/dateUtils';

const initialState = {
    currentWeekId: getCurrentWeekId()
};

export default function(state = initialState, action = {}) {
    return state;
};