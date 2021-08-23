import React from 'react';
import { useDispatch } from 'react-redux';

import { cardOPenedFlag } from '../../store/SearchReducer/actions';

import { CardType } from './types';

import './styles.css';

const Card: React.FC<CardType> = ({ user }) => {
  const dispatch = useDispatch();

  const onClickCloseBtnHandler = () => {
    dispatch(cardOPenedFlag(false));
  };

  return (
    <div className="card">
      <div className="card_element">
        <div className="card_photo_wrapper">
          <img src={user.avatarUrl} alt="User's avatar" />
        </div>
      </div>

      <div className="card_element">
        <h2>{user.name}</h2>
        <h3>{user.login}</h3>
        <div className="card_followers_wrapper">
          <div className="card_followers_unit">
            <span>Followers:</span>
            <a href="?">{user.followersNum}</a>
          </div>

          <div className="card_followers_unit">
            <span>Following:</span>
            <a href="?">{user.followingNum}</a>
          </div>
        </div>
      </div>

      <div className="card_close_btn_wrapper">
        <button
          className="card_close_btn"
          type="button"
          aria-label="Close"
          onClick={onClickCloseBtnHandler}
        />
      </div>
    </div>
  );
};

export default Card;