import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { authApi } from './commonApi';
import userReducer from './userSlice';
import loadingReducer from './LoadingSlice';


const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
  } = createReduxHistoryContext({ history: createBrowserHistory() });
  
export const store = configureStore({
    reducer: combineReducers({
      router: routerReducer,
      [authApi.reducerPath]: authApi.reducer,
      user: userReducer,
      loading: loadingReducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware, authApi.middleware),
  });

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
