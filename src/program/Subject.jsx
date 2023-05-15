import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSub } from "../rtk/sub";

function Subject() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const choosed = (e) => {
    setSelected(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    navigate(`${selected}`);
  }, [selected]);

  useEffect(() => {
    dispatch(setSub(selected));
  }, [selected]);

  return (
    <div className="subject-div">
      <h1>Subjects</h1>
      <select onChange={choosed}>
        <option>Type</option>
        <option value="ai">Ai</option>
        <option value="py">Python</option>
        <option value="ps">Problem solving</option>
        <option value="ds">Data Structures</option>
      </select>
    </div>
  );
}

export default Subject;
