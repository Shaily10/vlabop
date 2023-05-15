import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import Signup from "./Signup";
// import Admin from "../roleBrouting/Admin";
import Login from "./Login";
import Course from "../program/Course";
import Program from "../program/Program";
import AiRoutes from "../program/subject/AiRoutes";
import PythonRoutes from "../program/subject/PythonRoutes";
import PsRoutes from "../program/subject/PsRoutes";
import EDataRoute from "../program/subject/EDataRoute";
import DsRoutes from "../program/subject/DsRoutes";
import Subject from "../program/Subject";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="slogin" element={<Login />} />
        <Route path="flogin" element={<Login />} />
        <Route path="ssignup" element={<Signup />} />
        <Route path="fsignup" element={<Signup />} />

        <Route path="program" element={<Program />}>
          <Route path="course" element={<Course />}>
            <Route path="subject" element={<Subject />} />
          </Route>
        </Route>

        <Route path="profile" element={<Profile />} />
      </Routes>
      <PsRoutes />
      <AiRoutes />
      <DsRoutes/>
      <PythonRoutes />
      <EDataRoute />
    </>
  );
}

export default AppRoutes;
