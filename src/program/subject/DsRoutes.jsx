import { Route, Routes } from "react-router-dom";
import Ds from "./Ds/Ds";
import DsIntro from "./Ds/Dsintro";
// import AiExperiments from "./Ai/AiExperiments";
import DsObjective from "./Ds/DsObjective";
import DsTa from "./Ds/DsTa";
import ExpData from "../../components/ExpData";
import { useSelector } from "react-redux";
import CreateExp from "../../components/CreateExp";

const DsRoutes = () => {
  const { currentExp } = useSelector((state) => state.expid);
  console.log("currentkivalue", currentExp);

  return (
    <Routes>
      <Route path="program/course/subject/ds" element={<Ds />}>
        <Route path="introduction" element={<DsIntro />} />
        <Route path="objective" element={<DsObjective />} />
        <Route path="experiment" element={<CreateExp />}>
          <Route path={`${currentExp}`} element={<ExpData />} />
        </Route>
        <Route path="ta" element={<DsTa />} />
      </Route>
    </Routes>
  );
};

export default DsRoutes;
