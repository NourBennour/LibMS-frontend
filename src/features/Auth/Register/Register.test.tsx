import { Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Register from "./Register";

const renderWithRouter = (component: JSX.Element) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

it("should contain the registration form", () => {
  const { getByTestId } = renderWithRouter(<Register />);
  const regForm = getByTestId("registration-form");

  expect(regForm).toBeInTheDocument();
});
