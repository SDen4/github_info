import {} from './constants';

import { InitialStateType } from './types';

import { ActionsType } from './actions';

const initialState: InitialStateType = {};

export const SearchReducer = (
  state = initialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    default:
      return state;
  }
};
