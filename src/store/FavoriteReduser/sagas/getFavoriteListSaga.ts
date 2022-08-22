import { put, takeEvery } from 'redux-saga/effects';

import { fetchFavoriteList } from '../actions/actions';

import { FavoriteUser } from '../../../model/favorite/types';

import { FAVORITE_LIST_SAGA } from '../constants';

function* sagaWorker() {
  try {
    const saved: FavoriteUser[] = yield JSON.parse(
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
