import axios from "axios";
import * as constants from "./constants";
import { List } from "immutable";
const changeHomeData = (result) => ({
  type: constants.CHAGNE_HOME_DATA,
  topicList: result.data.data.topicList,
  articleList: result.data.data.articleList,
  recommendList: result.data.data.recommendList,
});
const addHomeList = (list) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: List(list),
});
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      dispatch(changeHomeData(res));
    });
  };
};
export const getMoreList = () => {
  return (dispatch) => {
    axios.get("/api/homeList.json").then((res) => {
      dispatch(addHomeList(res.data.data));
    });
  };
};
