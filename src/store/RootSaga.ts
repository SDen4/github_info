import { all, fork } from 'redux-saga/effects';

import { GetFavoriteListSagaWatcher } from './FavoriteReduser/sagas/GetFavoriteListSaga';
import { FetchUsersListSagaWatcher } from './SearchReducer/sagas/FetchUsersListSaga';
import { GetLocalHistorySagaWatcher } from './SearchReducer/sagas/GetLocalHistorySaga';
import { InitFetchSagaWatcher } from './SearchReducer/sagas/InitFetchSaga';
import { ReposListSagaWatcher } from './SearchReducer/sagas/ReposListSaga';
import { SearchSagaWatcher } from './SearchReducer/sagas/SearchSaga';

export default function* rootSaga() {
  yield all([
    fork(SearchSagaWatcher),
    fork(FetchUsersListSagaWatcher),
    fork(GetLocalHistorySagaWatcher),
    fork(ReposListSagaWatcher),
    fork(GetFavoriteListSagaWatcher),
    fork(InitFetchSagaWatcher),
  ]);
}
