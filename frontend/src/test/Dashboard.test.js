import React from 'react';
import { shallow } from "enzyme";
import Dashboard from '../components/Dashboard/Dashboard';

describe('Dashboard Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('should display a loading message while fetching user data', () => {
    expect(wrapper.text()).toContain('Loading');
  });

  it('should display a sidebar with navigation items', () => {
    expect(wrapper.find('.sidebar').exists()).toBe(true);
  });
});
