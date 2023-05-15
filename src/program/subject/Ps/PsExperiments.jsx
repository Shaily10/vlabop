import { Outlet } from "react-router-dom";
import CreateExp from "../../../components/CreateExp";

function PsExperiments() {
  return (
    <div className="content">
      <h2>
        <u>Problem Solving Lab</u>
      </h2>
      <CreateExp />
      <Outlet />
    </div>
  );
}

export default PsExperiments;
