import { SET_NEWS_LIST, CLEAR_NEWS_LIST } from "../types/newsType";

export const setNewsList = (news) => ({
    type: SET_NEWS_LIST,
    payload:news
});

export const clearNewsList = () => ({
    type: SET_NEWS_LIST,
});
