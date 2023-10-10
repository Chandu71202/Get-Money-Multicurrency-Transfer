import React from "react";
import { shallow } from "enzyme";
import CreateAccount from "../components/Dashboard/CreateAccount";

jest.mock("axios");

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

describe("CreateAccount Component", () => {
  it("should submit the form with valid data", () => {
    const updateHasAccountMock = jest.fn();
    const wrapper = shallow(
      <CreateAccount updateHasAccount={updateHasAccountMock} />,
    );

    // Simulate user input
    wrapper.find('input[name="dateOfBirth"]').simulate("change", {
      target: { name: "dateOfBirth", value: "1990-01-01" },
    });
    wrapper.find('input[name="alternateEmailId"]').simulate("change", {
      target: { name: "alternateEmailId", value: "test@example.com" },
    });
    wrapper.find('input[name="address"]').simulate("change", {
      target: { name: "address", value: "123 Main St" },
    });
    wrapper
      .find('input[name="city"]')
      .simulate("change", { target: { name: "city", value: "City" } });
    wrapper
      .find('input[name="state"]')
      .simulate("change", { target: { name: "state", value: "State" } });
    wrapper
      .find('input[name="country"]')
      .simulate("change", { target: { name: "country", value: "Country" } });

    const mockEvent = { preventDefault: jest.fn() };

    wrapper.find("form").simulate("submit", mockEvent);

    expect(updateHasAccountMock).toHaveBeenCalledWith(true);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
