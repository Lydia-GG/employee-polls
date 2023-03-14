import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleAddAnswer } from '../redux/actions/questions';
import Button from './Button';
import NotFound from './NotFound';

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollPage = (props) => {
  if (!props.question) {
    return <NotFound />;
  }

  const { avatarURL } = props.user;
  const { author, optionOne, optionTwo, id } = props.question;

  const answeredOptionOne = optionOne.votes.includes(props.authedUser);
  const answeredOptionTwo = optionTwo.votes.includes(props.authedUser);
  const answeredPoll = answeredOptionOne || answeredOptionTwo;

  // percentage
  const optionOneTotalVotes = optionOne.votes.length;
  const optionTwoTotalVotes = optionTwo.votes.length;
  const totalVotes = optionOneTotalVotes + optionTwoTotalVotes;

  const optionOnePercentage = (optionOneTotalVotes / totalVotes) * 100;
  const optionTwoPercentage = (optionTwoTotalVotes / totalVotes) * 100;

  const handleOptionOneClick = (e) => {
    e.preventDefault();

    props.dispatch(handleAddAnswer(id, 'optionOne'));
  };
  const handleOptionTwoClick = (e) => {
    e.preventDefault();
    props.dispatch(handleAddAnswer(id, 'optionTwo'));
  };

  return (
    <div className="poll-page container">
      <div>
        <h2>Poll by: {author}</h2>
        <img src={avatarURL} alt={author} />
      </div>
      <h3>Would You Rather</h3>
      <div className="info">
        <div className="info-element">
          <div className={answeredOptionOne ? 'answeredOption' : ''}>
            <p className="sector">{optionOne.text}</p>
            {totalVotes > 0 && (
              <p className="percentage">
                <span className="votes">
                  Votes: {optionOne.votes.length}/{totalVotes}{' '}
                </span>
                {optionOnePercentage.toFixed(2)}%{' '}
              </p>
            )}
          </div>
          <Button
            onClick={handleOptionOneClick}
            disabled={answeredPoll}
            text="Click"
          />
        </div>
        <div className="info-element">
          <div className={answeredOptionTwo ? 'answeredOption' : ''}>
            <p className="sector">{optionTwo.text}</p>
            {totalVotes > 0 && (
              <p className="percentage">
                <span className="votes">
                  Votes: {optionTwoTotalVotes}/{totalVotes}{' '}
                </span>
                {optionTwoPercentage.toFixed(2)}%
              </p>
            )}
          </div>
          <Button
            onClick={handleOptionTwoClick}
            disabled={answeredPoll}
            text="Click"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { question_id } = props.router.params;
  const question = questions[question_id];
  if (!question) {
    return <NotFound />;
  }
  return {
    authedUser: authedUser.id,
    question,
    user: Object.values(users).find((user) => user.id === question.author),
  };
};

export default withRouter(connect(mapStateToProps)(PollPage));
