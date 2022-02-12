import {ERROR_GETTING_OFFERS, SET_OFFERS} from "../actions/types";

const initialState = {
    items: [],
    totalItems: 0,
    pages: 0,
    currentPage: 0,
    error: {}
};

export default function (state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SET_OFFERS:
            return {
                ...state,
                items: payload['items'],
                currentPage: payload['currentPage'],
                pages: payload['pages'],
                totalItems: payload['totalItems']
            };

        case ERROR_GETTING_OFFERS:
            return {...state, error: payload};
        default:
            return state;
    }
}