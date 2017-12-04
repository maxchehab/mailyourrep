import reducer from "./reducers";
import { persistStore, autoRehydrate } from "redux-persist";
import CookieStorage from "redux-persist-cookie-storage";
import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

export const initialState = {};

export const initStore = initialState => {
  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunkMiddleware), autoRehydrate())
  );

  if (typeof window !== "undefined") {
    persistStore(store, { storage: new CookieStorage() });
  }
  return store;
};
