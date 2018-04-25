import {createStore, applyMiddleware, compose} from "redux";
import {promiseMiddleware} from "./middleware";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware)));

export default store;
