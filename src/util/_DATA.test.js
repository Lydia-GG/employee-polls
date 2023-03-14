import { _saveQuestion, _saveQuestionAnswer } from './_DATA';

describe('Data', () => {
  describe('_saveQuestion', () => {
    it('verify that the saved question is returned and all expected fields', async () => {
      const question = {
        optionOneText: 'Sleep',
        optionTwoText: 'Travel',
        author: 'tylermcginnis',
      };
      const result = await _saveQuestion(question);

      expect(result).toBeTruthy();
      expect(result).toMatchObject({
        author: 'tylermcginnis',
        optionOne: { votes: [], text: 'Sleep' },
        optionTwo: { votes: [], text: 'Travel' },
      });
    });
    it('verify that an error is returned if incorrect data is passed', async () => {
      const question = {
        optionOneText: 'Sleep',
        author: 'tylermcginnis',
      };

      await expect(_saveQuestion(question)).rejects.toEqual(
        'Please provide all fields'
      );
    });
  });

  describe('_saveQuestionAnswer', () => {
    it('return true  when correctly formatted data is passed', async () => {
      const answer = {
        authedUser: 'tylermcginnis',
        qid: 'am8ehyc8byjqgar0jgpub9',
        answer: 'optionOne',
      };

      await expect(_saveQuestionAnswer(answer)).toBeTruthy();
    });

    it('return error if incorrect data is passed', async () => {
      const answer = {
        authedUser: 'tylermcginnis',
        answer: 'optionOne',
      };

      await expect(_saveQuestionAnswer(answer)).rejects.toEqual(
        'Please provide all fields'
      );
    });
  });
});
