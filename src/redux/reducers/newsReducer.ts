import { FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from "../constants/action-type";
import { NewsState, NewsAction  } from "../types/types"

const initialState: NewsState = {
    news: [],
    loading: false,
    error: '',
}

export const newsReducer = (state = initialState, action: NewsAction) => {
    switch (action.type) {
        case FETCH_NEWS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                news: action.payload
            }
        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}