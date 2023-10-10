import React from "react";
import { shallow } from "enzyme";
import Login from "../components/Login/Login";

jest.mock("axios");

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

describe("Login Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("should update the email input value when changed", () => {
    const emailInput = wrapper.find('input[name="email"]');
    emailInput.simulate("change", {
      target: { name: "email", value: "test@example.com" },
    });
    expect(wrapper.find('input[name="email"]').prop("value")).toEqual(
      "test@example.com",
    );
  });

  it("should update the password input value when changed", () => {
    const passwordInput = wrapper.find('input[name="password"]');
    passwordInput.simulate("change", {
      target: { name: "password", value: "password123" },
    });
    expect(wrapper.find('input[name="password"]').prop("value")).toEqual(
      "password123",
    );
  });
});
