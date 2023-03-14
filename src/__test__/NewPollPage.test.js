/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable no-unused-vars */
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { MemoryRouter } from 'react-router-dom';
import NewPollPage from '../components/NewPollPage';
import Button from '../components/Button';
describe('NewPollPage', () => {
  it('inputs should be initially empty', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPollPage />
        </Provider>
      </MemoryRouter>
    );
    const optionOneInput = screen.getAllByRole('textbox')[0];
    const optionTwoInput = screen.getAllByRole('textbox')[1];

    expect(optionOneInput.value).toBe('');
    expect(optionTwoInput.value).toBe('');
  });

  it('Correctly changes input fields value', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPollPage />
        </Provider>
      </MemoryRouter>
    );
    const optionOneInput = screen.getAllByRole('textbox')[0];
    const optionTwoInput = screen.getAllByRole('textbox')[1];
    fireEvent.change(optionOneInput, { target: { value: 'Sleep' } });
    fireEvent.change(optionTwoInput, { target: { value: 'Travel' } });

    const submitBtn = screen.getByTestId('add-test');

    expect(optionOneInput.value).toBe('Sleep');
    expect(optionTwoInput.value).toBe('Travel');
    expect(submitBtn).not.toBeDisabled();
  });

  it('button disabled when fill only one input', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPollPage />
        </Provider>
      </MemoryRouter>
    );
    const optionOneInput = screen.getAllByRole('textbox')[0];
    fireEvent.change(optionOneInput, { target: { value: 'Sleep' } });
    const submitBtn = screen.getByTestId('add-test');
    expect(submitBtn).toBeDisabled();
  });

  it('button disabled when with empty inputs', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPollPage />
        </Provider>
      </MemoryRouter>
    );
    const optionOneInput = screen.getAllByRole('textbox')[0];
    fireEvent.change(optionOneInput, { target: { value: '' } });
    const submitBtn = screen.getByTestId('add-test');
    expect(submitBtn).toBeDisabled();
  });
});
