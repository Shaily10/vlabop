import { Navigate } from "react-router-dom";

function Faculty({ children }) {
  const userData = localStorage.getItem("userData");
  const parsedData = JSON.parse(userData);
  const role = parsedData.role;

  return role === "Faculty" ? children : <Navigate to='/'/>
}

export default Faculty;
