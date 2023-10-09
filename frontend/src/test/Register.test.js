import { shallow } from "enzyme";
import Register from "../components/Register/Register";

jest.mock("axios");

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

test("Value of h1 should be Create a GET-Money account", () => {
  const wrapper = shallow(<Register/>);
  const text = wrapper.find("h1").text();
  expect(text).toBe("Create a GET-Money account");
});

describe('Register Component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Register />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined();
  });

  it('should update the name input value when changed', () => {
    const nameInput = wrapper.find('input[name="name"]');
    nameInput.simulate('change', { target: { name: 'name', value: 'John' } });
    const updatedNameValue = wrapper.find('input[name="name"]').prop('value');
    expect(updatedNameValue).toEqual('John');
  });

  
});
