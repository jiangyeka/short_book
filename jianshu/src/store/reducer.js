import { reducer as headerReducer } from "../common/header/store"
import { combineReducers } from "redux-immutable"
const reducer = combineReducers({
    header: headerReducer
})
export default reducer