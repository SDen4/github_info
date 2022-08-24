import { all, fork } from 'redux-saga/effects';

import { getFavoriteListSagaWatcher } from './FavoriteReduser/sagas/getFavoriteListSaga';
import { fetchUsersListSagaWatcher } from './SearchReducer/sagas/fetchUsersListSaga';
import { getLocalHistorySagaWatcher } from './SearchReducer/sagas/getLocalHistorySaga';
import { initFetchSagaWatcher } from './SearchReducer/sagas/initFetchSaga';
import { reposListSagaWatcher } from './SearchReducer/sagas/reposListSaga';
import { searchSagaWatcher } from './SearchReducer/sagas/searchSaga';

export function* rootSaga() {
  yield all([
    fork(getFavoriteListSagaWatcher),
    fork(fetchUsersListSagaWatcher),
    fork(getLocalHistorySagaWatcher),
    fork(initFetchSagaWatcher),
    fork(reposListSagaWatcher),
    fork(searchSagaWatcher),
  ]);
}
