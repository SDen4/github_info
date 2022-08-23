export interface IFavoriteUser {
  name: string;
  note?: string;
}

export interface IInitialFavoriteState {
  isFavoriteBtn: boolean;
  isFavoriteList: boolean;
  favoriteList: IFavoriteUser[];
  isFavoriteUser: boolean;
  isNote: boolean;
  isNoteBtn: boolean;
  note: string;
}
