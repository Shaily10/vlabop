import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Python() {
  return (
    <div className="navigated-content">
      <nav className="subject-navbar">
        <NavLink to="introduction">Introduction</NavLink>
        <NavLink to="objective">Objective</NavLink>
        <NavLink to="experiment">List of Experiments</NavLink>
        <NavLink to="ta">Target Audience</NavLink>
        {/* <NavLink to="pyca">Course Alignment</NavLink>
        <NavLink to="pyfeedback">Feedback</NavLink> */}
      </nav>
      <Outlet />
    </div>
  );
}

export default Python;
