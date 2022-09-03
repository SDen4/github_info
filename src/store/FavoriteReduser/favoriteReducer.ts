import { ActionsType } from './actions/actions';

import { IInitialFavoriteState } from 'model/favorite/types';

import * as CONST from './constants';

const InitialState: IInitialFavoriteState = {
  isFavoriteBtn: false,
  isFavoriteList: false,
  isFavoriteUser: false,
  isNote: false,
  isNoteBtn: false,
  favoriteList: [],
  note: '',
};

export const favoriteReducer = (
  state = InitialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case CONST.FAVORITE_BTN_FLAG:
      return { ...state, isFavoriteBtn: action.isFavoriteBtn };

    case CONST.FAVORITE_LIST:
      return { ...state, favoriteList: action.favoriteList };

    case CONST.FAVORITE_LIST_ADD:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.favoriteList],
      };

    case CONST.FAVORITE_LIST_FLAG:
      return { ...state, isFavoriteList: action.isFavoriteList };

    case CONST.FAVORITE_USER_FLAG:
      return { ...state, isFavoriteUser: action.isFavoriteUser };

    case CONST.NOTE_FLAG:
      return { ...state, isNote: action.isNote };

    case CONST.NOTE_SAVE:
      return { ...state, note: action.note };

    case CONST.NOTE_BTN_FLAG:
      return { ...state, isNoteBtn: action.isNoteBtn };

    default:
      return state;
  }
};
