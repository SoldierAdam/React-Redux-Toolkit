import {combineReducers} from "redux";
import cartSlice from "./reducers/cartSlice";


export const rootReducer = combineReducers({
	cart: cartSlice,
});
