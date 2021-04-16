import { BrowserRouter, Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Auth from './Auth';

const renderWithRouter = (component: JSX.Element) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it('should contain the login button', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Auth />
    </BrowserRouter>,
  );
  const loginBtn = getByTestId('login-button');

  expect(loginBtn).toBeInTheDocument();
});

it('should contain the register button', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Auth />
    </BrowserRouter>,
  );
  const regBtn = getByTestId('register-button');

  expect(regBtn).toBeInTheDocument();
});
