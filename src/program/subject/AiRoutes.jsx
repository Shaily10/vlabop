import { Route, Routes } from "react-router-dom";
import Ai from "./Ai/Ai";
import AiIntro from "./Ai/AiIntro";
// import AiExperiments from "./Ai/AiExperiments";
import AiObjective from "./Ai/AiObjective";
import AiTa from "./Ai/AiTa";
import ExpData from "../../components/ExpData";
import { useSelector } from "react-redux";
import CreateExp from "../../components/CreateExp";

const AiRoutes = () => {
  const { currentExp } = useSelector((state) => state.expid);
  console.log("currentkivalue", currentExp);

  return (
    <Routes>
      <Route path="program/course/subject/ai" element={<Ai />}>
        <Route path="introduction" element={<AiIntro />} />
        <Route path="objective" element={<AiObjective />} />
        <Route path="experiment" element={<CreateExp />}>
          <Route path={`${currentExp}`} element={<ExpData />} />
        </Route>
        <Route path="ta" element={<AiTa />} />
      </Route>
    </Routes>
  );
};

export default AiRoutes;
