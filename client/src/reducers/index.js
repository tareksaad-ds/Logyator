import { combineReducers } from "redux";
import companyReducer from "./companyReducer";
import customerReducer from "./customerReducer";
import serviceReducer from "./serviceReducer";

export default combineReducers({
  companyReducer: companyReducer,
  customerReducer: customerReducer,
  serviceReducer: serviceReducer,
});
