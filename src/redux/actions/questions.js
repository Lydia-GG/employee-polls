import { saveQuestion, saveQuestionAnswer } from '../../util/api';
import { userAddQuestion, userAddAnswer } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    let { authedUser } = getState();
    authedUser = authedUser.id;

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(userAddQuestion({ authedUser: authedUser, qid: question.id }));
    });
  };
}
export function handleAddAnswer(qid, answer) {
  return (dispatch, getState) => {
    let { authedUser } = getState();
    authedUser = authedUser.id;
    return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(addAnswer({ authedUser, qid, answer }));
      dispatch(userAddAnswer({ authedUser, qid, answer }));
    });
  };
}
