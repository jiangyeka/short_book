import { reducer as headerReducer } from "../common/header/store";
import { combineReducers } from "redux-immutable";
import { reducer as homeReducer } from "../pages/home/store";
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
});
export default reducer;
