import { createStore, combineReducers } from "redux";
import storesReducer from "./reducers/storeReducers";
// import skusReducer from "./reducers/skusReducer";
// import planningReducer from "./reducers/planningReducer";

const rootReducer = combineReducers({
  stores: storesReducer,
  //   skus: skusReducer,
  //   planning: planningReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
