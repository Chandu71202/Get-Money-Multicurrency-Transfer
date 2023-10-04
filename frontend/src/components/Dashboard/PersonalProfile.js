import React, { useState, useEffect } from "react";
import "../../styles/Dashboard/PersonalProfile.css";
import axios from "axios";

export default function PersonalProfile({ account }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [occupation, setOccupation] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (account.id) {
      axios.get(`http://localhost:8081/users/${account.id}`).then((response) => {
        const userData = response.data;
        setFullName(userData.fullName);
        setEmail(userData.email);
        setPhoneNumber(userData.phoneNumber);
        setAddress(userData.address);
        setCity(userData.city);
        setState(userData.state);
        setPostalCode(userData.postalCode);
        setCountry(userData.country);
        setDateOfBirth(userData.dateOfBirth);
        setGender(userData.gender);
        setNationality(userData.nationality);
        setOccupation(userData.occupation);
        setMaritalStatus(userData.maritalStatus);
        setEducationLevel(userData.educationLevel);
        setEmergencyContact(userData.emergencyContact);
      });
    }
  }, [account.id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    // Send updated personal information to the backend for saving
    if (account.id) {
      await axios.put(`http://localhost:8081/users/${account.id}`, {
        fullName,
        email,
        phoneNumber,
        address,
        city,
        state,
        postalCode,
        country,
        dateOfBirth,
        gender,
        nationality,
        occupation,
        maritalStatus,
        educationLevel,
        emergencyContact,
      });
      setIsEditing(false);
      alert("Profile updated successfully");
    }
  };

  return (
    <div>
      <div className="profile-card">
        <h2>Personal Profile</h2>
        {isEditing ? (
          <div>
            <div className="profile-field">
              <label>Full Name:</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>Phone Number:</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>City:</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>State:</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>Postal Code:</label>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>Country:</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>Date of Birth:</label>
              <input
                type="text"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>Gender:</label>
              <input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>Nationality:</label>
              <input
                type="text"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>Occupation:</label>
              <input
                type="text"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>Marital Status:</label>
              <input
                type="text"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>Education Level:</label>
              <input
                type="text"
                value={educationLevel}
                onChange={(e) => setEducationLevel(e.target.value)}
              />
            </div>
            <div className="profile-field">
              <label>Emergency Contact:</label>
              <input
                type="tel"
                value={emergencyContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
              />
            </div>
            <button onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <div>
            <div className="profile-field">
              <label>Full Name:</label>
              <span>{fullName}</span>
            </div>
            <div className="profile-field">
              <label>Email:</label>
              <span>{email}</span>
            </div>
            <div className="profile-field">
              <label>Phone Number:</label>
              <span>{phoneNumber}</span>
            </div>
            <div className="profile-field">
              <label>Address:</label>
              <span>{address}</span>
            </div>
            <div className="profile-field">
              <label>City:</label>
              <span>{city}</span>
            </div>
            <div className="profile-field">
              <label>State:</label>
              <span>{state}</span>
            </div>
            <div className="profile-field">
              <label>Postal Code:</label>
              <span>{postalCode}</span>
            </div>
            <div className="profile-field">
              <label>Country:</label>
              <span>{country}</span>
            </div>
            <div className="profile-field">
              <label>Date of Birth:</label>
              <span>{dateOfBirth}</span>
            </div>
            <div className="profile-field">
              <label>Gender:</label>
              <span>{gender}</span>
            </div>
            <div className="profile-field">
              <label>Nationality:</label>
              <span>{nationality}</span>
            </div>
            <div className="profile-field">
              <label>Occupation:</label>
              <span>{occupation}</span>
            </div>
            <div className="profile-field">
              <label>Marital Status:</label>
              <span>{maritalStatus}</span>
            </div>
            <div className="profile-field">
              <label>Education Level:</label>
              <span>{educationLevel}</span>
            </div>
            <div className="profile-field">
              <label>Emergency Contact:</label>
              <span>{emergencyContact}</span>
            </div>
            <button onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
}
