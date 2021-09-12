import {
  FAVORITE_BTN_FLAG,
  FAVORITE_LIST_FLAG,
  FAVORITE_LIST_ADD,
  FAVORITE_LIST,
  FAVORITE_USER_FLAG,
  NOTE_FLAG,
  NOTE_SAVE,
  NOTE_BTN_FLAG,
} from './constants';

import { InitialFavoriteStateType } from './types';

import { ActionsType } from './actions';

const InitialState: InitialFavoriteStateType = {
  favoriteBtnFlag: false,
  favoriteListFlag: false,
  favoriteList: [],
  favoriteUser: false,
  noteFlag: false,
  noteBtnFlag: false,
  note: '',
};

export const FavoriteReducer = (
  state = InitialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case FAVORITE_BTN_FLAG:
      return {
        ...state,
        favoriteBtnFlag: action.favoriteBtnFlag,
      };

    case FAVORITE_LIST:
      return {
        ...state,
        favoriteList: action.favoriteList,
      };

    case FAVORITE_LIST_ADD:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.favoriteList],
      };

    case FAVORITE_LIST_FLAG:
      return {
        ...state,
        favoriteListFlag: action.favoriteListFlag,
      };

    case FAVORITE_USER_FLAG:
      return {
        ...state,
        favoriteUser: action.favoriteUserFlag,
      };

    case NOTE_FLAG:
      return {
        ...state,
        noteFlag: action.noteFlag,
      };

    case NOTE_SAVE:
      return { ...state, note: action.note };

    case NOTE_BTN_FLAG:
      return { ...state, noteBtnFlag: action.noteBtnFlag };

    default:
      return state;
  }
};
