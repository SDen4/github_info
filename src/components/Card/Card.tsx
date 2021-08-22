import React from 'react';

import './styles.css';

const Card: React.FC = () => {
  return (
    <div className="card">
      <div className="card_element">
        <div className="card_photo_wrapper">
          <img src="" alt="User's avatar" />
        </div>
      </div>

      <div className="card_element">
        <h2>Name</h2>
        <h3>github login</h3>
        <div className="card_followers_wrapper">
          <div className="card_followers_unit">
            <span>Followers:</span>
            <a href="https://somedomain.com">3</a>
          </div>

          <div className="card_followers_unit">
            <span>Following:</span>
            <a href="https://somedomain.com">1</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
