import { takeEvery, put, all } from 'redux-saga/effects';

import { SEARCH_LOGIN_SAGA } from '../constants';

import {
  favoriteListFlag,
  favoriteUserFlag,
  noteBtnFlag,
  noteSave,
} from '../../FavoriteReduser/actions';
import {
  cardOPenedFlag,
  errorFlag,
  fetchLogin,
  fetchSearhHistory,
  loadingFlag,
  searchHistoryLIstFlag,
  searhStart,
} from '../actions';

import { ISearhHistoryItem, SearchSagaWorkerType } from '../types';

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
    yield all([put(searhStart()), put(noteSave('')), put(noteBtnFlag(false))]);

    // TEMP!!!
    let isMobile: boolean = yield false;
    const width: number = yield document.documentElement.clientWidth;

    if (width <= 480) {
      yield (isMobile = true);
    } else {
      yield (isMobile = false);
    }

    if (isMobile) {
      yield put(searchHistoryLIstFlag(false));
      yield put(favoriteListFlag(false));
    }
    // TEMP!!!

    const { allData, lastActivityDate } = yield all({
      allData: getUserInfo(action.login),
      lastActivityDate: getLastActivityDate(action.login),
    });

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
    } else {
      yield put(favoriteUserFlag(false));
    }

    if (
      action.favoritesList?.find((el) => el.name === allData.login)?.note
        ?.length
    ) {
      yield put(noteBtnFlag(true));

      const noteToWrite: string = yield action.favoritesList?.find(
        (el) => el.name === action.login,
      )?.note;

      yield put(noteSave(noteToWrite));
    } else {
      yield put(noteBtnFlag(false));
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

    yield all([put(cardOPenedFlag(true)), put(loadingFlag(false))]);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield all([put(loadingFlag(false)), put(errorFlag(true))]);
  }
}

export function* SearchSagaWatcher() {
  yield takeEvery(SEARCH_LOGIN_SAGA, sagaWorker);
}
