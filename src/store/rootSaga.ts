import { all, fork } from 'redux-saga/effects';

import { getFavoriteListSagaWatcher } from './FavoriteReduser/sagas/getFavoriteListSaga';
import { fetchUsersListSagaWatcher } from './SearchReducer/sagas/fetchUsersListSaga';
import { getGithubUserSagaWatcher } from './SearchReducer/sagas/getGithubUserSaga';
import { getLocalHistorySagaWatcher } from './SearchReducer/sagas/getLocalHistorySaga';
import { initFetchSagaWatcher } from './SearchReducer/sagas/initFetchSaga';
import { paginationReposSagaWatcher } from './SearchReducer/sagas/paginationReposSaga';
import { paginationSagaWatcher } from './SearchReducer/sagas/paginationSaga';
import { reposListSagaWatcher } from './SearchReducer/sagas/reposListSaga';
import { searchUsersSagaWatcher } from './SearchReducer/sagas/searchUsersSaga';

export function* rootSaga() {
  yield all([
    fork(getFavoriteListSagaWatcher),
    fork(fetchUsersListSagaWatcher),
    fork(getLocalHistorySagaWatcher),
    fork(initFetchSagaWatcher),
    fork(reposListSagaWatcher),
    fork(paginationReposSagaWatcher),
    fork(paginationSagaWatcher),
    fork(getGithubUserSagaWatcher),
    fork(searchUsersSagaWatcher),
  ]);
}
