import { combineReducers } from 'redux';
import activities from './activities';
import date from './date';

const rootReducer = combineReducers({
    activities,
    date
});

export default rootReducer;