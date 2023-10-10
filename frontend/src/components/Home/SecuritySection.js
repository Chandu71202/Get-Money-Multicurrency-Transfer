import React from "react";
import "../../styles/Home/SecuritySection.css";

export default function SecuritySection() {
  return (
    <div>
      <section className="securitySection">
        <div className="security">
          <div>
            <h1 className="securityHeader">Always ahead of thieves</h1>
            <div>
              <p className="security-p">
                Every month, our customers trust us to move around $9 billion of
                their money. Here are some of the important ways we protect
                them.
              </p>
            </div>
            <div className="row">
              <ul className="security-ul">
                <li>We use a strong, proven and secure encryption algorithm</li>
                <li>
                  Our dedicated fraud and security teams work to keep your money
                  safe
                </li>
                <li>We use 2-factor authentication to protect your account</li>
              </ul>
            </div>
          </div>

          <div>
            <img
              alt="lock"
              src="https://wise.com/web-art/assets/illustrations/lock-large@1x.webp"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
