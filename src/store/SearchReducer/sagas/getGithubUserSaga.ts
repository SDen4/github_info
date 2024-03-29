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
  setPageRepos,
  setReposList,
  setSearchList,
  setUsersList,
} from '../searchReducer';

import { getLastActivityDate, getUserInfo } from 'api/searchRequest';
import { select } from 'utils/select';

import { isFavoriteListSelect } from 'selectors/favorite';
import {
  isMobileSelect,
  isReposListSelect,
  isSearchListSelect,
  isUsersListSelect,
  userSelect,
} from 'selectors/search';

import {
  fetchNote,
  setFavoriteList,
  setFavoriteUser,
  setNoteBtn,
} from 'store/FavoriteReduser/favoriteReducer';

import type { IFavoriteUser } from 'model/favorite/types';
import type { ISearhHistoryItem } from 'model/search/types';

import { GET_GITHUB_USER_SAGA } from '../constants';
import {
  defaultSearchUsersList,
  localStorageKeys,
} from 'constants/searchConstants';

export interface IProps {
  type: typeof GET_GITHUB_USER_SAGA;
  login: string;
  history: ISearhHistoryItem[];
  favoritesList?: IFavoriteUser[];
}

function* sagaWorker(action: IProps) {
  const isMobile = yield* select(isMobileSelect);
  const isFavoriteList = yield* select(isFavoriteListSelect);
  const isSearchList = yield* select(isSearchListSelect);
  const user = yield* select(userSelect);
  const isUsersList = yield* select(isUsersListSelect);
  const isReposList = yield* select(isReposListSelect);

  try {
    if (isMobile && isSearchList) yield put(setSearchList(false));
    if (isMobile && isFavoriteList) yield put(setFavoriteList(false));

    if (action.login === user.login) {
      if (isUsersList) yield put(setUsersList(false));
      if (isReposList) yield put(setReposList(false));
      return;
    }

    yield put(getSearchedUsersList(defaultSearchUsersList));
    yield put(getSearchedUser(''));
    yield put(setPageRepos(1));

    yield all([put(getStart()), put(fetchNote('')), put(setNoteBtn(false))]);

    const [allData, lastActivityDate] = yield all([
      getUserInfo(action.login),
      getLastActivityDate(action.login),
    ]);

    yield put(
      fetchLogin({
        name: allData.name,
        login: allData.login,
        followers_url: allData.followers_url,
        following_url: allData.following_url,
        followers: allData.followers,
        following: allData.following,
        created_at: new Date(allData.created_at),
        avatar_url: allData.avatar_url,
        company: allData.company,
        email: allData.email,
        public_repos: allData.public_repos,
        repos_url: allData.repos_url,
        location: allData.location,
        lastActivityDate,
      }),
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
      localStorageKeys.saves,
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
