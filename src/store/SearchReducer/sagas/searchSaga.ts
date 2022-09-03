import { all, put, takeEvery } from 'redux-saga/effects';

import {
  fetchNote,
  setFavoriteList,
  setFavoriteUser,
  setNoteBtn,
} from '../../FavoriteReduser/actions/actions';
import {
  fetchLogin,
  fetchSearhHistory,
  getStart,
  setCard,
  setError,
  setLoading,
  setSearchList,
  setUsersList,
} from '../actions/actions';
import { isMobileSelect } from '../selectors';

import { getLastActivityDate, getUserInfo } from 'api/searchRequest';
import { select } from 'utils/select';

import { ISearchSaga, ISearhHistoryItem } from 'model/search/types';

import { SEARCH_LOGIN_SAGA } from '../constants';

function* sagaWorker(action: ISearchSaga) {
  const isMobile = yield* select(isMobileSelect);

  try {
    yield all([put(getStart()), put(fetchNote('')), put(setNoteBtn(false))]);

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
      yield put(setFavoriteUser(true));
    } else {
      yield put(setFavoriteUser(false));
    }

    if (
      action.favoritesList?.find((el) => el.name === allData.login)?.note
        ?.length
    ) {
      yield put(setNoteBtn(true));

      const noteToWrite: string = yield action.favoritesList?.find(
        (el) => el.name === action.login,
      )?.note;

      yield put(fetchNote(noteToWrite));
    } else {
      yield put(setNoteBtn(false));
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

    yield all([put(setCard(true)), put(setLoading(false))]);

    yield put(setUsersList(false));

    // in the end because of input focus in mobiles
    if (isMobile) {
      yield put(setSearchList(false));
      yield put(setFavoriteList(false));
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    yield all([put(setLoading(false)), put(setError(true))]);
  }
}

export function* searchSagaWatcher() {
  yield takeEvery(SEARCH_LOGIN_SAGA, sagaWorker);
}
