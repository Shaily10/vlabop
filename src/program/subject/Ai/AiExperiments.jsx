import { Outlet } from "react-router-dom";
import CreateExp from "../../../components/CreateExp";

function AiExperiments() {
  return (
    <div className="content">
      <h2>
        <u>Artificial Neural Networks</u>
      </h2>
      <CreateExp />
      <Outlet />
    </div>
  );
}

export default AiExperiments;
