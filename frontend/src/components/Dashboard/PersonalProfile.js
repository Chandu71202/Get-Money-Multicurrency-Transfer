import React from "react";
import "../../styles/Dashboard/PersonalProfile.css";

export default function PersonalProfile({ account, user }) {
  return (
    <div>
      <div className="profile-card">
        <h2 className="profile-header">Personal Profile</h2>
        <div className="profile-details">
          <div className="profile-box">
            <label className="profile-label">Account Number : </label>
            <span className="profile-value"> {account.accountNumber}</span>
          </div>
          <div className="profile-box">
            <label className="profile-label">Full Name : </label>
            <span className="profile-value"> {user.name}</span>
          </div>
          <div className="profile-box">
            <label className="profile-label">Email : </label>
            <span className="profile-value"> {user.email}</span>
          </div>
          <div className="profile-box">
            <label className="profile-label">Phone Number : </label>
            <span className="profile-value"> {user.phoneNo}</span>
          </div>
          <div className="profile-box">
            <label className="profile-label">Date of Birth : </label>
            <span className="profile-value"> {account.dateOfBirth}</span>
          </div>
          <div className="profile-box">
            <label className="profile-label">Gender : </label>
            <span className="profile-value"> {account.gender}</span>
          </div>
          <div className="profile-box">
            <label className="profile-label">Alternate Email : </label>
            <span className="profile-value"> {account.alternateEmailId}</span>
          </div>
          <div className="profile-box">
            <label className="profile-label">Address : </label>
            <span className="profile-value"> {account.address}</span>
          </div>
          <div className="profile-box">
            <label className="profile-label">City : </label>
            <span className="profile-value"> {account.city}</span>
          </div>
          <div className="profile-box">
            <label className="profile-label">State : </label>
            <span className="profile-value"> {account.state}</span>
          </div>
          <div className="profile-box">
            <label className="profile-label">Country : </label>
            <span className="profile-value"> {account.country}</span>
          </div>
        </div>
        <h4 className="update-text">Please click on Settings to update details!</h4>
      </div>
    </div>
  );
}
