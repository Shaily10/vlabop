import React from "react";
import { NavLink } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSubApi } from "../rtk/api";


function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const choosed = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    navigate(`${selected}`);
  }, [selected]);

  useEffect(() => {
    dispatch(setSubApi(selected));
  }, [selected]);

  return (
    <div>
      <nav className="home-nav">
        <img
          style={{
            height: "4rem",
            width: "4rem",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          src="https://tse1.mm.bing.net/th?id=OIP.rzVhD8gNbUFkHsS9fph7DAHaHa&pid=Api&P=0"
          alt="logo"
        />
        <h1
          style={{
            fontSize: "2rem",
            marginRight: "800px",
            color: "whiteSmoke",
          }}
        >
          Virtual Lab
        </h1>
        <NavLink to="program" onClick={() => navigate('program')}>Programs</NavLink>
        <NavLink to="about" onClick={() => navigate('about')}>About</NavLink>
        <select onChange={choosed} className="home-select">
          <option>Signup</option>
          <option value="ssignup">Student</option>
          <option value="fsignup">Faculty</option>
        </select>
        <select onChange={choosed} className="home-select">
          <option>Login</option>
          <option value="slogin">Student</option>
          <option value="flogin">Faculty</option>
        </select>
      </nav>
      <div className="homeimg">
        <img src="https://www.talentlms.com/blog/wp-content/uploads/2016/09/virtual-labs-in-elearning.png"/>
      </div>
    </div>
  );
}

export default Home;
