import { createAction } from '@reduxjs/toolkit';

export const FAVORITE_LIST_SAGA = 'FAVORITE_LIST_SAGA';

export const getFavoriteListSaga = createAction(FAVORITE_LIST_SAGA);
