import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleAddQuestion } from '../redux/actions/questions';
import Button from './Button';
import Input from './Input';

const NewPollPage = ({ dispatch }) => {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const navigate = useNavigate();

  const disabled = optionOne.length === 0 || optionTwo.length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(optionOne, optionTwo));
    navigate('/');
  };
  return (
    <div className="new-poll container">
      <h2>Would You Rather</h2>
      <h4>Create You Own Poll</h4>
      <form>
        <div>
          <h5>First Question</h5>

          <Input
            type="text"
            placeholder="Question One"
            value={optionOne}
            onChange={(e) => setOptionOne(e.target.value)}
          />
        </div>
        <div>
          <h5>Second Question</h5>

          <Input
            type="text"
            placeholder="Question Two"
            value={optionTwo}
            onChange={(e) => setOptionTwo(e.target.value)}
          />
        </div>

        <Button
          data-testid="add-test"
          onClick={handleSubmit}
          disabled={disabled}
          text="Submit"
        />
      </form>
    </div>
  );
};

export default connect()(NewPollPage);
