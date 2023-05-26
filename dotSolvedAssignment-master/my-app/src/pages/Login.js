import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import constants from "../utils/constant";
import Toast from "../utils/messagesLayer";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";

const Login = ({ registeredUsers }) => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    try {
        debugger
      const getUserInfo = [...registeredUsers];
      debugger
      const isUser = getUserInfo?.find(
        (user) =>
          user.email === values.email && user.password === values.password
      );
      if (!getUserInfo.length || !isUser)
        Toast({ error: true, message: constants.LOGIN_FAILURE });
      else {
        localStorage.setItem("loggedIn", JSON.stringify(isUser));
        Toast({ error: true, message: constants.LOGIN_SUCCESS });
        navigate("/user-authentication");
      }
    } catch (err) {
      console.log(err);
      Toast({ error: true, message: constants.LOGIN_FAILURE });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="login__component">
        <h2 className="font400 color">Login</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
            subscribe: true,
          }}
          onSubmit={onSubmit}
        >
          {({ values, handleSubmit, handleChange, isSubmitting }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="color">Email Address:</label>
                  <input
                    name="email"
                    value={values.email}
                    placeholder="Email"
                    onChange={handleChange}
                    type="email"
                    required
                  />
                </div>
                <div>
                  <label className="color">Password:</label>
                  <input
                    name="password"
                    value={values.password}
                    placeholder="Password"
                    onChange={handleChange}
                    type="password"
                    required
                  />
                </div>
                <div style={{ display: "inline-block" }}>
                  <label className="color">
                    Subscribe to newsletter
                    <input
                      type="checkbox"
                      value={values.subscribe}
                      onChange={handleChange}
                      style={{ verticalAlign: "middle" }}
                    />
                  </label>
                </div>

                <div>
                  <button type="submit" disabled={isSubmitting}>
                    Login
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Login);
