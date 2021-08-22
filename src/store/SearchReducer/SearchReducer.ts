import { FETCH_LOGIN } from './constants';

import { InitialStateType } from './types';

import { ActionsType } from './actions';

const initialState: InitialStateType = {
  user: {
    name: '',
    login: '',
    followersUrl: '',
    followingUrl: '',
    avatarUrl: '',
    followersNum: 0,
    followingNum: 0,
  },
};

export const SearchReducer = (
  state = initialState,
  action: ActionsType,
): typeof state => {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        user: {
          name: action.name,
          login: action.login,
          followersUrl: action.followers_url,
          followingUrl: action.following_url,
          avatarUrl: action.avatar_url,
          followersNum: action.followers,
          followingNum: action.following,
        },
      };

    default:
      return state;
  }
};
