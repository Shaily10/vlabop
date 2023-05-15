import { Outlet } from "react-router-dom";
import CreateExp from "../../../components/CreateExp";

function PyExperiments() {
  return (
    <div className="content">
      <h2>
        <u>Python Programming Lab</u>
      </h2>
      <CreateExp />
      <Outlet />
    </div>
  );
}

export default PyExperiments;
