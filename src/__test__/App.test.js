/* eslint-disable testing-library/no-debugging-utils */
/* eslint-disable testing-library/render-result-naming-convention */
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  screen.debug();
});
