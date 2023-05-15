import { Route, Routes } from "react-router-dom";
import Ps from "./Ps/Ps";
import PsIntro from "./Ps/PsIntro";
// import AiExperiments from "./Ai/AiExperiments";
import PsObjective from "./Ps/PsObjective";
import PsTa from "./Ps/PsTa";
import ExpData from "../../components/ExpData";
import { useSelector } from "react-redux";
import CreateExp from "../../components/CreateExp";

const PsRoutes = () => {
  const { currentExp } = useSelector((state) => state.expid);
  console.log("currentkivalue", currentExp);

  return (
    <Routes>
      <Route path="program/course/subject/ps" element={<Ps />}>
        <Route path="introduction" element={<PsIntro />} />
        <Route path="objective" element={<PsObjective />} />
        <Route path="experiment" element={<CreateExp />}>
          <Route path={`${currentExp}`} element={<ExpData />} />
        </Route>
        <Route path="ta" element={<PsTa />} />
      </Route>
    </Routes>
  );
};
export default PsRoutes;