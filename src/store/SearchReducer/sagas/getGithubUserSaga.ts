import { all, put, takeEvery } from 'redux-saga/effects';

import {
  fetchLogin,
  fetchSearhHistory,
  getSearchedUser,
  getSearchedUsersList,
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

import {
  fetchNote,
  setFavoriteList,
  setFavoriteUser,
  setNoteBtn,
} from 'store/FavoriteReduser/favoriteReducer';

import { IFavoriteUser } from 'model/favorite/types';
import { ISearhHistoryItem, IUserInner } from 'model/search/types';

import { GET_GITHUB_USER_SAGA } from '../constants';
import { defaultSearchUsersList } from 'constants/searchConstants';

export interface IProps {
  type: typeof GET_GITHUB_USER_SAGA;
  login: string;
  history: ISearhHistoryItem[];
  favoritesList?: IFavoriteUser[];
}

function* sagaWorker(action: IProps) {
  const isMobile = yield* select(isMobileSelect);

  try {
    yield put(getSearchedUsersList(defaultSearchUsersList));
    yield put(getSearchedUser(''));

    yield all([put(getStart()), put(fetchNote('')), put(setNoteBtn(false))]);

    const allData: IUserInner = yield getUserInfo(action.login);
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

export function* getGithubUserSagaWatcher() {
  yield takeEvery(GET_GITHUB_USER_SAGA, sagaWorker);
}