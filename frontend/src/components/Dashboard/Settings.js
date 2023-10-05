import React, { useState } from 'react'
import "../../styles/Dashboard/Settings.css"
import axios from 'axios';

export default function Settings({account,user}) {
  const [isEditing, setIsEditing] = useState(false);

  // const [newPassword,setNewPassword] = useState("");

  const [formData, setFormData] = useState({
    dateOfBirth: account.dateOfBirth,
    gender: account.gender,
    alternateEmailId: account.alternateEmailId,
    address: account.address,
    city: account.city,
    state: account.state,
    country: account.country,
    name: user.name,
    phoneNo: user.phoneNo,
    password: user.password,
    newPassword: ""
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  // const settingNewPassword = () => {
  //   setNewPassword(newPassword);
  //   setFormData({ [formData.password]: newPassword });
  // }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'newPassword') {
      setFormData(prevData => ({
        ...prevData,
        newPassword: value,
        password: value // Update password internally
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsEditing(false);
  
    // Check if a new password was entered, and update it if necessary
    if (formData.newPassword !== "") {
      setFormData(prevData => ({
        ...prevData,
        password: formData.newPassword,
        newPassword: "" // Reset newPassword field after saving
      }));
      const saveButton = document.getElementById('saveButton');
      saveButton.disabled = true;
    }
  
    console.log(formData);
    const user_id = sessionStorage.getItem('id');
    // Send the updated data to your server or perform any necessary actions here
    await axios.patch(`http://localhost:8080/users/${user_id}/updateUserDetails`,{
      name: formData.name,
      phoneNo: formData.phoneNo,
      password: formData.password,
    })
    await axios.patch(`http://localhost:8081/accounts/${user_id}/updateAccountDetails`,{
      dateOfBirth: formData.dateOfBirth,
      gender: formData.gender,
      alternateEmailId: formData.alternateEmailId,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      country: formData.country
    })
    alert('Details Updated Successfully');
    // window.location.reload();
  };
  return (
    <form className="user-profile-form" onSubmit={handleSubmit}>
      <div>
        <h1 className='heading'>Edit Details</h1>
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="text"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>Alternate Email ID:</label>
        <input
          type="text"
          name="alternateEmailId"
          value={formData.alternateEmailId}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>Phone No:</label>
        <input
          type="text"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>Current Password:</label>
        <input
          type="password"
          name="password"
          value={account.password}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <div>
        <label>New Password:</label>
        <input
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </div>
      <button type="button" onClick={handleEditClick} disabled={isEditing}>
        Edit
      </button>
      <button
        type="submit"
        id="saveButton" // Added an id to the save button
        disabled={!isEditing} // Disable the save button when not editing
      >
        Save
      </button>
    </form>
  )
}
