import { shallow } from "enzyme";
import Register from "../components/Register/Register";
import { act } from "react-dom/test-utils";
import axios from "axios";
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

describe("Register Component", () => {
    let wrapper;
    
    beforeEach(() => {
      wrapper = shallow(<Register />);
    });
  
    afterEach(() => {
      jest.clearAllMocks();
    });
    
  
    it("should register a new user when the form is submitted with valid data", async () => {
      const mockAxiosResponse = { data: "Registered Successfully" };
    
      axios.post.mockResolvedValue(mockAxiosResponse);
    
      act(() => {
        wrapper.find('input[name="name"]').simulate('change', {
          target: { name: 'name', value: 'John Doe' },
        });
        wrapper.find('input[name="email"]').simulate('change', {
          target: { name: 'email', value: 'johndoe@example.com' },
        });
        wrapper.find('input[name="phoneNo"]').simulate('change', {
          target: { name: 'phoneNo', value: '1234567890' },
        });
        wrapper.find('input[name="password"]').simulate('change', {
          target: { name: 'password', value: 'ValidPass123' },
        });
        wrapper.find('input[name="confirmPassword"]').simulate('change', {
          target: { name: 'confirmPassword', value: 'ValidPass123' },
        });
      });
     
      await act(async () => {
        await wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      });
    
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:8080/users/registerNewUser",
        {
          "confirmPassword": "ValidPass123",
          "email": "johndoe@example.com",
          "name": "John Doe",
          "password": "ValidPass123",
          "phoneNo": "1234567890",
        }
      );
      
        
      expect(wrapper.find('Popup').prop('message')).toBe("Registered Successfully");
      expect(mockUsedNavigate).toHaveBeenCalledWith("/login");
    });
   
    
    
  });
