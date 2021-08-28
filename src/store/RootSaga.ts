import { fork, all } from 'redux-saga/effects';

import { SearchSagaWatcher } from './SearchReducer/sagas/SearchSaga';
import { FetchUsersListSagaWatcher } from './SearchReducer/sagas/FetchUsersListSaga';

export default function* rootSaga() {
  yield all([fork(SearchSagaWatcher), fork(FetchUsersListSagaWatcher)]);
}
