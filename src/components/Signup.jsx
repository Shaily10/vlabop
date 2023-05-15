import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  const { subapi } = useSelector((state) => state.api);
  console.log(subapi);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const signup = async () => {
    const resp = await axios.post(
      `http://localhost:3000/${subapi}`,
      { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await resp.data;
    const dataObj = JSON.stringify(data);
    localStorage.setItem("userData", dataObj);
    return data;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = await signup();
    setName("");
    setEmail("");
    setPwd("");
  };

  return (
    <div className="main-signup-div">
      <h3>SIGN UP</h3>
      <div className="signup-div">
        <form className="signup-form" onSubmit={submitHandler}>
          <label>Name :</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email :</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password :</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPwd(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
