import { fromJS } from "immutable";
import * as constants from "./constants";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
});
const stateAction = (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHAGNE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      });
    case constants.CHAGNE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      });
    default:
      return state;
  }
};
export default stateAction;
