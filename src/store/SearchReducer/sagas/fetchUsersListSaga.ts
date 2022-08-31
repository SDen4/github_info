import { put, takeEvery } from 'redux-saga/effects';

import { getUsersInfo } from '../../../api/searchRequest';
import {
  fetchUsersList,
  setCard,
  setLoading,
  setUsersList,
} from '../actions/actions';
import { userSelect } from '../selectors';

import { select } from '../../../utils/select';

import { IFetchUsersListSaga, IUserInner } from '../../../model/search/types';

import { FETCH_USERS_LIST_SAGA } from '../constants';

function* sagaWorker(action: IFetchUsersListSaga) {
  const user = yield* select(userSelect);

  try {
    yield put(setLoading(true));

    const allData: IUserInner[] = yield getUsersInfo(
      user.login,
      action.requestType,
    );

    yield put(fetchUsersList(allData, action.requestType));

    yield put(setLoading(false));
    yield put(setUsersList(true));
    yield put(setCard(false));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield put(setLoading(false));
  }
}

export function* fetchUsersListSagaWatcher() {
  yield takeEvery(FETCH_USERS_LIST_SAGA, sagaWorker);
}
