import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../redux/actions/authedUser';
import Button from './Button';

const Nav = ({ authedUser, dispatch }) => {
  const navigate = useNavigate();
  const { id, name, avatarURL } = authedUser;
  const logout = () => {
    dispatch(handleLogout());
    navigate('/login');
  };
  return (
    <nav className="nav">
      <div className="container nav-content">
        <div className="left">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
            <li>
              <Link to="/add">New Poll</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <img className="avatar" alt={name} src={avatarURL} />
          <Button className="log-btn" text={id} />
          <Button className="log-btn" onClick={logout} text="logout" />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Nav);
