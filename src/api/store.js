import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../api/reducers/rootReducer";
import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

const preloadedState = {};

const persistConfig = {
  key: "root",
  version: 1,
  storage: storageSession,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState,
  middleware: [sagaMiddleware],
});
