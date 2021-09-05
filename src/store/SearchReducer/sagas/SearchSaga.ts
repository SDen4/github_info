import { takeEvery, put } from 'redux-saga/effects';

import { SEARCH_LOGIN_SAGA } from '../constants';

import { favoriteUserFlag } from '../../FavoriteReduser/actions';
import {
  cardOPenedFlag,
  errorFlag,
  fetchLogin,
  fetchReposList,
  fetchSearhHistory,
  loadingFlag,
  reposOpenedListFlag,
  userListOpenedFlag,
} from '../actions';

import {
  ISearhHistoryItem,
  SearchSagaWorkerType,
  UserInnerType,
} from '../types';

import { API } from '../../../api/API';

async function getUserInfo(login: string) {
  const response = await API.get(`${login}`).then((res) => res.data);
  return response;
}

function* sagaWorker(action: SearchSagaWorkerType) {
  try {
    yield put(errorFlag(false));
    yield put(userListOpenedFlag(false));
    yield put(cardOPenedFlag(false));
    yield put(reposOpenedListFlag(false));
    yield put(fetchReposList([]));
    yield put(loadingFlag(true));

    const allData: UserInnerType = yield getUserInfo(action.login);
    // eslint-disable-next-line no-console
    // console.log(allData);

    yield put(
      fetchLogin(
        allData.name,
        allData.login,
        allData.followers_url,
        allData.following_url,
        allData.followers,
        allData.following,
        new Date(allData.created_at),
        allData.avatar_url,
        allData.company,
        allData.email,
        allData.public_repos,
        allData.repos_url,
        allData.location,
      ),
    );

    if (action.favoritesList?.find((el) => el === allData.login)) {
      yield put(favoriteUserFlag(true));
    } else {
      yield put(favoriteUserFlag(false));
    }

    const newHistoryItem: ISearhHistoryItem = yield {
      login: allData.login,
      dateOfSearch: new Date(),
    };
    yield put(fetchSearhHistory(newHistoryItem));
    yield localStorage.setItem(
      'saves',
      JSON.stringify([...action.history, newHistoryItem]),
    );

    yield put(loadingFlag(false));
    yield put(cardOPenedFlag(true));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield put(loadingFlag(false));
    yield put(errorFlag(true));
  }
}

export function* SearchSagaWatcher() {
  yield takeEvery(SEARCH_LOGIN_SAGA, sagaWorker);
}
