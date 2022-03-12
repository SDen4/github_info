import {
  ISearhHistoryItem,
  UserInnerType,
} from '../../store/SearchReducer/types';

export interface IUserItem {
  user: UserInnerType;
  history: ISearhHistoryItem[];
  isMobile: boolean;
}
