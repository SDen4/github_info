import { FETCH_LOGIN } from './constants';

import { InitialStateType } from './types';

import { ActionsType } from './actions';

const initialState: InitialStateType = {
  login: '',
};

export const SearchReducer = (
  state = initialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        login: action.login,
      };

    default:
      return state;
  }
};
