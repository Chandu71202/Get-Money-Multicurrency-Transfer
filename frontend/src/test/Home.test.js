import React from "react";
import { shallow } from "enzyme";
import Home from "../components/Home/Home";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

describe("Home Component", () => {
  it("should render Navbar and Footer components", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Navbar).exists()).toBe(true);
    expect(wrapper.find(Footer).exists()).toBe(true);
  });
});
