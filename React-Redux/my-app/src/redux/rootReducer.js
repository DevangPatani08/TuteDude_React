import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

export default rootReducer;