// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setAllExp } from "../rtk/exp";
// import { allFetchedExp } from "./GetExp";
import { Link, Outlet } from "react-router-dom";

function ExpData() {
  // const dispatch = useDispatch();
  // const { allExp } = useSelector((state) => state.allexp);
  // useEffect(() => {
  //   const getExpData = async () => {
  //     const expData = await allFetchedExp();
  //     dispatch(setAllExp(expData));
  //   };
  //   getExpData();
  // }, [allExp]);

  return (
    <div>
      <nav>
        <Link to={"aim"}>Aim</Link>
        <Link to={"theory"}>Theory</Link>
        <Link to={"procedure"}>Procedure</Link>
        <Link to={"observation"}>Observation</Link>
        <Link to={"assignment"}>Assignment</Link>
        <Link to={"reference"}>Reference</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default ExpData;
