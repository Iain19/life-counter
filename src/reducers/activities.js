import { GET_ACTIVITY_DATA_BY_WEEK } from '../actions/types';

const initialState = {
    activitiesById: {},
    activitiesIdList: []
};

export default function(state = initialState, action = {}) {
    switch (action.type) {
        case GET_ACTIVITY_DATA_BY_WEEK:
            return {
                ...state,
                activitiesById: { ...state.activitiesById, ...action.data},
                activitiesIdList: action.activitiesIdList
            };
        default:
            return state;
    }
};