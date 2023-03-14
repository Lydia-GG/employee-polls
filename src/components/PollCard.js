import React from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../util/helpers';
import { Link } from 'react-router-dom';

const PollCard = ({ question }) => {
  return (
    <div className="tweet">
      <div className="tInfo">
        <h3>{question.author}</h3>
        <p className="timestamp">{formatDate(question.timestamp)}</p>
      </div>
      <hr />
      <Link to={`questions/${question.id}`} className="show">
        Show
      </Link>
    </div>
  );
};

export default connect()(PollCard);
