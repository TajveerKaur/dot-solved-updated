import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineSyncLock } from "react-icons/md";
import {
  TbDeviceMobile,
  TbClipboardText,
  TbBrandMercedes,
} from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1 className="font400">DotSolved Employee Panel</h1>
      </div>
      <div className="leftTopNav">
        <NavLink to="/dashboard">
          {" "}
          <TbBrandMercedes />
          Dashboard
        </NavLink>

        <NavLink to="/">
          {" "}
          <TbClipboardText /> Register
        </NavLink>

        <NavLink to="/login">
          {" "}
          <TbDeviceMobile />
          Login
        </NavLink>

        <NavLink to="/lock">
          {" "}
          <MdOutlineSyncLock />
          Lock
        </NavLink>
        <div
          id="google_translate_element"
          style={{ display: "inline-block" }}
        ></div>
      </div>
    </div>
  );
};
export default Navbar;
