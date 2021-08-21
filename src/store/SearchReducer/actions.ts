import { SEARCH_SAGA } from './constants';

export const searchSaga = () => {
  return {
    type: SEARCH_SAGA,
  } as const;
};

type searchSagaType = ReturnType<typeof searchSaga>;

export type ActionsType = searchSagaType;
