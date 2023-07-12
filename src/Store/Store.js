import {combineReducers, legacy_createStore as createStore} from "redux";
import MainReducer from "./MainReducer";

let reducers = combineReducers({
    MainData: MainReducer
})
let store = createStore(reducers);
export default store