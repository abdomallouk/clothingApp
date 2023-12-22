import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";


const middleware = (getDefaultMiddleware) => {
  const middlewares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);
  return getDefaultMiddleware().concat(middlewares);
  // return getDefaultMiddleware({serializableCheck: false}).concat(middlewares);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const persistor = persistStore(store);
