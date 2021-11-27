import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {checkboxReducer} from "../../h13/bll/checkbox-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    check: checkboxReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
