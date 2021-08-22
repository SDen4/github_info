import { SEARCH_LOGIN_SAGA } from './constants';

export interface InitialStateType {
  login: string;
}

export interface SearchSagaWorkerType {
  type: typeof SEARCH_LOGIN_SAGA;
  login: string;
}
