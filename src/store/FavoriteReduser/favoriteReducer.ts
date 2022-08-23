import { ActionsType } from './actions/actions';

import { IInitialFavoriteState } from '../../model/favorite/types';

import * as CONST from './constants';

const InitialState: IInitialFavoriteState = {
  favoriteBtnFlag: false,
  favoriteListFlag: false,
  favoriteList: [],
  favoriteUser: false,
  noteFlag: false,
  noteBtnFlag: false,
  note: '',
};

export const favoriteReducer = (
  state = InitialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case CONST.FAVORITE_BTN_FLAG:
      return { ...state, favoriteBtnFlag: action.favoriteBtnFlag };

    case CONST.FAVORITE_LIST:
      return { ...state, favoriteList: action.favoriteList };

    case CONST.FAVORITE_LIST_ADD:
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.favoriteList],
      };

    case CONST.FAVORITE_LIST_FLAG:
      return { ...state, favoriteListFlag: action.favoriteListFlag };

    case CONST.FAVORITE_USER_FLAG:
      return { ...state, favoriteUser: action.favoriteUserFlag };

    case CONST.NOTE_FLAG:
      return { ...state, noteFlag: action.noteFlag };

    case CONST.NOTE_SAVE:
      return { ...state, note: action.note };

    case CONST.NOTE_BTN_FLAG:
      return { ...state, noteBtnFlag: action.noteBtnFlag };

    default:
      return state;
  }
};
