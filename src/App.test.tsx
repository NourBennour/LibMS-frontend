import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import App from "./App";

const renderWithRouter = (component: JSX.Element) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("should contain the login button", () => {
  const { getByTestId } = render(<App />);
  const loginBtn = getByTestId("login-button");

  expect(loginBtn).toBeInTheDocument();
});

it("should contain the register button", () => {
  const { getByTestId } = render(<App />);
  const regBtn = getByTestId("register-button");

  expect(regBtn).toBeInTheDocument();
});

it("should navigate to the login page", () => {
  const { getByTestId } = renderWithRouter(<App />);

  fireEvent.click(getByTestId("login-link"), { button: 0 });

  const form = getByTestId("login-form");

  expect(form).toBeInTheDocument();
});
