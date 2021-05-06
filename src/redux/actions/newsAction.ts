import { newsList } from "../../api/axios";
import { FETCH_NEWS_FAILURE, FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from "../constants/action-type";
import { News } from "../types/types";

export const fetchNews = () => {
    return (dispatch: any) => {
        dispatch(fetchNewsRequest);
        newsList('OSL', 1)
        .then(res => {
            const news = res.data;
            dispatch(fetchNewsSuccess(news))
        })
        .catch(error => {
            dispatch(fetchNewsFailure(error))
        })
    }
}
export const fetchNewsRequest = () => {
    return {
        type: FETCH_NEWS_REQUEST,
    }
}
export const fetchNewsSuccess = (news: News) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: news
    }
}
export const fetchNewsFailure = (error: String) => {
    return {
        type: FETCH_NEWS_FAILURE,
        payload: error
    }
}