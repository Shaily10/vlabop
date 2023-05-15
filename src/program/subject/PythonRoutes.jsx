import { Route, Routes } from "react-router-dom";
import Python from "./python/Python";
import PyIntro from "./python/PyIntro";
// import AiExperiments from "./Ai/AiExperiments";
import PyObjective from "./python/PyObjective";
import PyTa from "./python/PyTa";
import ExpData from "../../components/ExpData";
import { useSelector } from "react-redux";
import CreateExp from "../../components/CreateExp";

const PyRoutes = () => {
  const { currentExp } = useSelector((state) => state.expid);
  console.log("currentkivalue", currentExp);

  return (
    <Routes>
      <Route path="program/course/subject/py" element={<Python />}>
        <Route path="introduction" element={<PyIntro />} />
        <Route path="objective" element={<PyObjective />} />
        <Route path="experiment" element={<CreateExp />}>
          <Route path={`${currentExp}`} element={<ExpData />} />
        </Route>
        <Route path="ta" element={<PyTa />} />
      </Route>
    </Routes>
  );
};
export default PyRoutes;