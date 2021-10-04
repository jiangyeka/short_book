import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";
const changeHomeData = (result) => ({
  type: constants.CHAGNE_HOME_DATA,
  topicList: result.data.data.topicList,
  articleList: result.data.data.articleList,
  recommendList: result.data.data.recommendList,
});
const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage,
});
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      dispatch(changeHomeData(res));
    });
  };
};
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page=" + page).then((res) => {
      dispatch(addHomeList(res.data.data, page + 1));
    });
  };
};
export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show,
});
