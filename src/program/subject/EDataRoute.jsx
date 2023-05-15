import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ExpData from "../../components/ExpData.jsx";
import {
  Aim,
  Theory,
  Procedure,
  Observation,
  Assignment,
  Reference,
} from "../../components/ExpDataa.jsx";

const PsRoutes = () => {
  const { sub } = useSelector((state) => state.subject);
  console.log(sub);

  return (
    <Routes>
      <Route
        path={`program/course/subject/${sub}/experiment/expdata`}
        element={<ExpData />}
      >
        <Route path="aim" element={<Aim />} />
        <Route path="theory" element={<Theory />} />
        <Route path="procedure" element={<Procedure />} />
        <Route path="observation" element={<Observation />} />
        <Route path="assignment" element={<Assignment />} />
        <Route path="reference" element={<Reference />} />
      </Route>
    </Routes>
  );
};

export default PsRoutes;
