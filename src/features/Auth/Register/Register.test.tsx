import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Register from "./Register";
import { act } from "react-dom/test-utils";

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

describe("First name validation", () => {
  it("should display correct error first name message", async () => {
    const { getByTestId, getByLabelText, container } = renderWithRouter(
      <Register />
    );
    const getSbmtBtn = getByTestId("submit-button");

    await act(async () => {
      const firstNameInput = getByLabelText("First name");
      fireEvent.change(firstNameInput, { target: { value: "" } });
      fireEvent.click(getSbmtBtn);
    });
    expect(container.innerHTML).toMatch("First name is required");
  });
});

describe("Password confirmation validation", () => {
  it("should display correct unmatched passwords message", async () => {
    const { getByTestId, getByLabelText, container } = renderWithRouter(
      <Register />
    );
    const getSbmtBtn = getByTestId("submit-button");

    await act(async () => {
      const passwdInput = getByLabelText("Password");
      const confirmPasswdInput = getByLabelText("Confirm password");

      fireEvent.change(passwdInput, {
        target: { value: "passwrd@787azxazer" },
      });
      fireEvent.change(confirmPasswdInput, {
        target: { value: "passwrd@777azxazer" },
      });

      fireEvent.click(getSbmtBtn);
    });
    expect(container.innerHTML).toMatch("Passwords must match");
  });
});

describe("Univertsity ID validation", () => {
  it("should display digits only error message", async () => {
    const { getByTestId, getByLabelText, container } = renderWithRouter(
      <Register />
    );
    const getSbmtBtn = getByTestId("submit-button");

    await act(async () => {
      const uniID = getByLabelText("University ID");

      fireEvent.change(uniID, {
        target: { value: "12345a7" },
      });
      fireEvent.click(getSbmtBtn);
    });
    expect(container.innerHTML).toMatch(
      "University ID should contain digits only"
    );
  });

  it("should display university ID length error message", async () => {
    const { getByTestId, getByLabelText, container } = renderWithRouter(
      <Register />
    );
    const getSbmtBtn = getByTestId("submit-button");

    await act(async () => {
      const uniID = getByLabelText("University ID");

      fireEvent.change(uniID, {
        target: { value: "12347" },
      });
      fireEvent.click(getSbmtBtn);
    });
    expect(container.innerHTML).toMatch(
      "University ID must be exactly 7 digits"
    );
  });
});
