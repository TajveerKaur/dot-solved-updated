import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserOpt = () => {
  const [opts, setOtps] = useState({ otp1: "", otp2: "", otp3: "", otp4: "" });
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (!event.target.value || Number(event.target.value) > 9) {
      return opts[name];
    }
    setOtps({
      ...opts,
      [name]: value,
    });
  };

  const inputfocus = (event) => {
    if (!event.target.value || Number(event.target.value) > 9) {
      return null;
    }
    if (event.keyCode === 8 || event.keyCode === 46) {
      const next = event.target.tabIndex - 2;
      if (next > -1) event.target.form.elements[next].focus();
    } else {
      const next = event.target.tabIndex;
      if (next < 5) {
        event.target.form.elements[next].focus();
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="otpContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <h1 className="font400">
            Please verify your four digit OTP sent on your email.{" "}
          </h1>
        </div>
        <div>
          {Object.keys(opts).map((otp, i) => {
            return (
              <input
                key={i}
                name={otp}
                type="number"
                className="otpInput"
                max="9"
                value={opts[otp]}
                onChange={onChangeHandler}
                tabIndex={i + 1}
                maxLength="1"
                onKeyUp={inputfocus}
                onKeyDown={(e) =>
                  ["e", "E", "+", "-", "."].includes(e.key) &&
                  e.preventDefault()
                }
              />
            );
          })}
        </div>
        <div className="otpFooter">
          <button className="btn-primary" type="submit">
            Submit
          </button>
          <a type="submit" href="">
            Resend Otp
          </a>
        </div>
      </form>
    </div>
  );
};

export default UserOpt;
