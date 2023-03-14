/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable no-unused-vars */
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { MemoryRouter } from 'react-router-dom';
import Login from '../components/Login';

describe('Login', () => {
  it('expect(component).toMatchSnapshot();', () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
  it('inputs should be initially empty', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const userNameInput = screen.getByPlaceholderText('username');
    const passwordInput = screen.getByPlaceholderText('password');

    expect(userNameInput.value).toBe('');
    expect(passwordInput.value).toBe('');
  });
  it('Correctly changes input fields value', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>
    );

    const userNameInput = screen.getByPlaceholderText('username');
    const passwordInput = screen.getByPlaceholderText('password');

    fireEvent.change(userNameInput, { target: { value: 'mary' } });
    fireEvent.change(passwordInput, { target: { value: 123456789 } });

    expect(userNameInput.value).toBe('mary');
    expect(passwordInput.value).toBe('123456789');
  });
});
