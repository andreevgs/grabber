import OffersService from "../services/OffersService";
import {SET_OFFERS} from "./types";

export const setOffers = (query, page) => (dispatch) => {
    return OffersService.getOffers(query, page).then(
        data => {
            dispatch({
                type: SET_OFFERS,
                payload: data
            })
            return Promise.resolve();
        },
        error => {
            console.log(error);
            return Promise.reject(error);
        }
    );
};