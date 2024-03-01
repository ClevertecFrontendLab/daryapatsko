import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { authApi } from './commonApi';
import userReducer from './userSlice';
import loadingReducer from './LoadingSlice';
import { feedBackApi } from './FeedBackSlice';


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
      [feedBackApi.reducerPath]: feedBackApi.reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware, authApi.middleware, feedBackApi.middleware),
  });

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
