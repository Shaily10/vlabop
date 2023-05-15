import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Course() {
  const navigate = useNavigate();
  const subject = () => {
    navigate("subject");
  };
  return (

      <div className="course-div">
        <h1>Branch</h1>
        <select onChange={subject}>
          <option>Type</option>
          <option>CSE/IT</option>
          <option>AI/ML</option>
        </select>

        <Outlet/>
      </div>
  );
}

export default Course;
