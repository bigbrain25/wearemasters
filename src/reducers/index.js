import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import assetReducer from "./assetReducer";
import ethRateReducer from "./ethRateReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  asset: assetReducer,
  ethRate: ethRateReducer,
});
