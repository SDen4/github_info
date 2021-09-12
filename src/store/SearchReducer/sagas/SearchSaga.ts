import { takeEvery, put } from 'redux-saga/effects';

import { SEARCH_LOGIN_SAGA } from '../constants';

import {
  favoriteUserFlag,
  noteBtnFlag,
  noteSave,
} from '../../FavoriteReduser/actions';
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
  const response = await API.get(`${login.trim()}`).then((res) => res.data);
  return response;
}

async function getLastActivityDate(login: string) {
  const response = await API.get(`${login.trim()}/events`)
    .then((res) => res.data[0].created_at)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
  return response;
}

function* sagaWorker(action: SearchSagaWorkerType) {
  try {
    yield put(errorFlag(false));
    yield put(userListOpenedFlag(false));
    yield put(cardOPenedFlag(false));
    yield put(reposOpenedListFlag(false));
    yield put(noteBtnFlag(false));
    yield put(noteSave(''));
    yield put(fetchReposList([]));
    yield put(loadingFlag(true));

    const allData: UserInnerType = yield getUserInfo(action.login);
    const lastActivityDate: string = yield getLastActivityDate(action.login);

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
        lastActivityDate,
      ),
    );

    if (action.favoritesList?.find((el) => el.name === allData.login)) {
      yield put(favoriteUserFlag(true));

      if (action.favoritesList?.find((el) => el.note !== '')) {
        yield put(noteBtnFlag(true));
        const noteToWrite: string = yield action.favoritesList?.find(
          (el) => el.name === action.login,
        )?.note;
        yield put(noteSave(noteToWrite));
      } else {
        yield put(noteBtnFlag(false));
      }
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
