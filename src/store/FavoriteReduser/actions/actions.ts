export const FAVORITE_LIST_SAGA = 'FAVORITE_LIST_SAGA';

export const getFavoriteListSaga = () => {
  return {
    type: FAVORITE_LIST_SAGA,
  } as const;
};
