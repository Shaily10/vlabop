import { Navigate } from "react-router-dom";

function Admin({ children }) {
  const userData = localStorage.getItem("userData");

  const parsedData = JSON.parse(userData);
  const role = parsedData.role;

  return role === "Admin" ? children : <Navigate to='/'/>
}

export default Admin;
