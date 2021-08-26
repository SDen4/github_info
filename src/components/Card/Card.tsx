import React from 'react';
import { useDispatch } from 'react-redux';

import { dateFormatter } from '../../utils/dateFormatter';
import { periodCounter } from '../../utils/periodCounter';

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
        <div className="card_sub_element">
          <h2>
            {user.name} ({user.login})
          </h2>
        </div>

        {user.company && (
          <div className="card_sub_element">
            <span>Company:&nbsp;</span>
            <div className="card_user_info">{user.company}</div>
          </div>
        )}

        {user.email && (
          <div className="card_sub_element">
            <span>Email:&nbsp;</span>
            <div className="card_user_info">{user.email}</div>
          </div>
        )}

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

        <div className="card_sub_element">
          <span>Created at&nbsp;</span>
          <div className="card_user_info">
            {dateFormatter(user.dataCreated)}
          </div>
          <div className="card_user_info">
            &nbsp;({periodCounter(user.dataCreated)})
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
