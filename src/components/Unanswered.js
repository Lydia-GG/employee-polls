//After npm run test please enter a to see all test (13 tests)
import React from 'react';
import PollCard from './PollCard';
import { connect } from 'react-redux';

const Unanswered = (props) => {
  const unAnsweredQuestions = props.questions.filter(
    (question) =>
      !question.optionOne.votes.includes(props.authedUser.id) &&
      !question.optionTwo.votes.includes(props.authedUser.id)
  );
  return (
    <div>
      <ul>
        {unAnsweredQuestions.map((question) => (
          <li key={question.id}>
            <PollCard question={question} />
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
  users,
});
export default connect(mapStateToProps)(Unanswered);
