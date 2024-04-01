import { applyMiddleware, compose, createStore } from "redux";
import {thunk} from 'redux-thunk';
import rootReducer from "./reducer";

const composeEnhancer=compose;
const store=createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;