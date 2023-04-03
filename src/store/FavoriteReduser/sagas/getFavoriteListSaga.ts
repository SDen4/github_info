import { put, takeEvery } from 'redux-saga/effects';

import { FAVORITE_LIST_SAGA } from '../actions/actions';
import { fetchFavoriteList } from '../favoriteReducer';

import type { IFavoriteUser } from 'model/favorite/types';

function* sagaWorker() {
  try {
    const saved: IFavoriteUser[] = yield JSON.parse(
      localStorage.getItem('favorite') || '[]',
    );

    yield put(fetchFavoriteList(saved));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export function* getFavoriteListSagaWatcher() {
  yield takeEvery(FAVORITE_LIST_SAGA, sagaWorker);
}
