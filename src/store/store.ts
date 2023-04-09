import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from 'store/rootReducer';
import { rootSaga } from 'store/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleWare),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleWare.run(rootSaga);
