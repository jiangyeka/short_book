import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 0,
  showScroll: false,
  witerList: [],
});
const stateAction = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHAGNE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        witerList: fromJS(action.witerList)
      });
    case constants.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(action.list),
        articlePage: action.nextPage,
      });
    case constants.TOGGLE_SCROLL_TOP:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};
export default stateAction;
