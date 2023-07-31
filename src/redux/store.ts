import createSagaMiddleware from 'redux-saga';
import saga from "./saga";
import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './slices/usersSlice';
import detailsSlice from './slices/detailsSlice';


const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    users: usersSlice,
    details: detailsSlice

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(saga);

export default store;
