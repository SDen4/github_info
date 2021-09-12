export interface FavoriteUser {
  name: string;
  note?: string;
}

export interface InitialFavoriteStateType {
  favoriteBtnFlag: boolean;
  favoriteListFlag: boolean;
  favoriteList: FavoriteUser[];
  favoriteUser: boolean;
  noteFlag: boolean;
  noteBtnFlag: boolean;
  note: string;
}
