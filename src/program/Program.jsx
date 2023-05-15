import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Program() {
  const navigate = useNavigate();
  const course = () => {
    navigate("course");
  };
  return (
    <div className="program-div">
      <h1>Program</h1>
      <select onChange={course}>
        <option>Type</option>
        <option>Btech</option>
      </select>
      <Outlet />
    </div>
  );
}

export default Program;
