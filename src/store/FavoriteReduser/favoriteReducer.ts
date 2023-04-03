import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { IFavoriteUser } from 'model/favorite/types';

interface IInitialFavoriteState {
  isFavoriteBtn: boolean;
  isFavoriteList: boolean;
  favoriteList: IFavoriteUser[];
  isFavoriteUser: boolean;
  isNote: boolean;
  isNoteBtn: boolean;
  note: string;
}

const initialState: IInitialFavoriteState = {
  isFavoriteBtn: false,
  isFavoriteList: false,
  isFavoriteUser: false,
  isNote: false,
  isNoteBtn: false,
  favoriteList: [],
  note: '',
};

const favoriteSlice = createSlice({
  name: 'FReducer',
  initialState,
  reducers: {
    setFavoriteBtnFlag(state, action: PayloadAction<boolean>) {
      return { ...state, isFavoriteBtn: action.payload };
    },
    fetchFavoriteList(state, action: PayloadAction<IFavoriteUser[]>) {
      return { ...state, favoriteList: action.payload };
    },
    setFavoriteList(state, action: PayloadAction<boolean>) {
      return { ...state, isFavoriteList: action.payload };
    },
    setFavoriteUser(state, action: PayloadAction<boolean>) {
      return { ...state, isFavoriteUser: action.payload };
    },
    setNote(state, action: PayloadAction<boolean>) {
      return { ...state, isNote: action.payload };
    },
    fetchNote(state, action: PayloadAction<string>) {
      return { ...state, note: action.payload };
    },
    setNoteBtn(state, action: PayloadAction<boolean>) {
      return { ...state, isNoteBtn: action.payload };
    },
  },
});

export const {
  setFavoriteBtnFlag,
  fetchFavoriteList,
  setFavoriteList,
  setFavoriteUser,
  setNote,
  fetchNote,
  setNoteBtn,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
