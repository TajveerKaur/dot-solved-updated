import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./style.css";
import UserOpt from "./components/Otp";
import Navbar from "./components/navbar/navbar";
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));
const Lock = React.lazy(() => import("./pages/Lock"));

function App() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  return (
    <div className={"App " + location}>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/lock" element={<Lock />} />
            <Route path="/" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="/user-authentication" element={<UserOpt />} />
          </Routes>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
