import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import themeReducer from "./themeReducer";


const rootReducer = combineReducers({
     auth: authReducer,
     theme: themeReducer
})

const store = createStore(rootReducer)

export default store