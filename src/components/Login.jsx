import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

function Login() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const onChange = () =>{    
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  const navigate = useNavigate();

  const userHandler = (e) => {
    setUser(e.target.value);
  };

  const pwdHandler = (e) => {
    setPwd(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const dataObj = {
      user,
      pwd,
    };
    console.log(dataObj);
    //check
    localStorage.setItem("isLoggedIn", "true");
    setUser("");
    setPwd("");
    navigate("/");
  };

  return (
    <div className="login">
      <h3>LOGIN</h3>
      <form onSubmit={submitHandler} className="formc">
        <label className="clabel">Name :
          <input
            placeholder="Enter Username"
            onChange={userHandler}
            type="email"
            value={user}
            required
          />
        </label>
        <label className="clabel">Password :
          <input
            placeholder="Enter Password"
            onChange={pwdHandler}
            type="password"
            value={pwd}
            required
          />
        </label>
        <ReCAPTCHA
sitekey="6Lc0t8IkAAAAAKA4EKOpR8ChwC51FPi9FIH0V_s8" className="recap"
onChange={onChange}
/>
        <button type="submit" className="sub">Submit</button>
      </form>
    </div>
  );
}

export default Login;
