import { FAVORITE_BTN_FLAG } from './constants';

import { InitialFavoriteStateType } from './types';

import { ActionsType } from './actions';

const InitialState: InitialFavoriteStateType = {
  favoriteBtnFlag: false,
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

    default:
      return state;
  }
};
