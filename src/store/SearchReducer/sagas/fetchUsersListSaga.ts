import { put, takeEvery } from 'redux-saga/effects';

import {
  fetchUsersList,
  setCard,
  setLoading,
  setUsersList,
} from '../searchReducer';

import { getUsersInfo } from 'api/searchRequest';
import { caching } from 'utils/caching';
import { select } from 'utils/select';

import { userSelect } from 'selectors/search';

import type { IUserInner } from 'model/search/types';

import { FETCH_USERS_LIST_SAGA } from '../constants';

export interface IProps {
  type: typeof FETCH_USERS_LIST_SAGA;
  login: string;
  requestType: string;
}

function* sagaWorker(action: IProps) {
  const user = yield* select(userSelect);

  try {
    yield put(setLoading(true));

    const cacheGetUsersInfo = caching(getUsersInfo);

    const allData: IUserInner[] = yield cacheGetUsersInfo(
      user.login,
      action.requestType,
    );

    yield put(
      fetchUsersList({
        usersList: allData,
        lastRequestType: action.requestType,
      }),
    );

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
