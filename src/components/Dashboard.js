import React, { useState } from 'react';
import { connect } from 'react-redux';
import Answered from './Answered';
import Unanswered from './Unanswered';
import Button from './Button';

const Dashboard = () => {
  const [active, setActive] = useState(false);

  const handleLogin = () => {
    setActive(false);
  };
  const handleRegister = () => {
    setActive(true);
  };

  return (
    <>
      <div className="dashboard-page center"></div>
      <div className="dashboard-container">
        <div className="btn-box">
          <Button
            className={active ? 'toggle-btn' : 'toggle-btn clicked'}
            onClick={handleLogin}
            text={'New Polls'}
          />
          <Button
            className={active ? 'toggle-btn clicked' : 'toggle-btn'}
            onClick={handleRegister}
            text={'Done'}
          />
        </div>
        <div className="poll-list">
          {active ? <Answered /> : <Unanswered />}
        </div>
      </div>
    </>
  );
};

export default connect()(Dashboard);
