import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from '$store/RootReducer';

export const selectSearch = createSelector(
  (store: AppStateType) => store.search,
  (search) => search,
);
