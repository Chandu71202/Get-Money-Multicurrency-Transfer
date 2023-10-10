import React from "react";
import "../../styles/Dashboard/DashboardInitial.css";
import { BsArrowLeft } from "react-icons/bs";

export default function DashboardInitial() {
  return (
    <div className="initial">
      <h4>
        <BsArrowLeft />
        Click on <b>Personal Profile</b> to view your profile details.
      </h4>
      <h4>
        <BsArrowLeft />
        Click on <b>Your Account</b> to know your current balance.
      </h4>
      <h4>
        <BsArrowLeft />
        Click on <b>Inter-Account Transfer</b> to make a transaction.
      </h4>
      <h4>
        <BsArrowLeft />
        Click on <b>Deposit</b> to deposit money in your account.
      </h4>
      <h4>
        <BsArrowLeft />
        Click on <b>Transaction History</b> to see your past transactions.
      </h4>
      <h4>
        <BsArrowLeft />
        Click on <b>Support</b> to connect with us.
      </h4>
      <h4>
        <BsArrowLeft />
        Click on <b>More Info</b> to view FAQs.
      </h4>
      <h4>
        <BsArrowLeft />
        Click on <b>Settings</b> to edit your profile.
      </h4>
    </div>
  );
}
