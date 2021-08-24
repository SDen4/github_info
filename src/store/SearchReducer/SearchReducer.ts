import { FETCH_LOGIN, CARD_OPEN_FLAG, LOADING } from './constants';

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
  cardOpened: false,
  loading: false,
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

    case CARD_OPEN_FLAG:
      return {
        ...state,
        cardOpened: action.cardOPenedFlag,
      };

    case LOADING:
      return {
        ...state,
        loading: action.loadingFlag,
      };

    default:
      return state;
  }
};
