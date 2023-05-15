import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import { allFetchedExp } from "./GetExp";
import { setAllExp } from "../rtk/exp";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { setExpById, setCurrentExp } from "../rtk/expbyid.js";

function CreateExp() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [aim, setAim] = useState("");
  const [theory, setTheory] = useState("");
  const [procedure, setProcedure] = useState("");
  const [observation, setObservation] = useState("");
  const [assignment, setAssignment] = useState("");
  const [reference, setReferences] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();
  const { allExp } = useSelector((state) => state.allexp);

  const createExp = async () => {
    const resp = await axios.post(
      `http://localhost:3000/addexp`,
      {
        number,
        name,
        aim,
        theory,
        procedure,
        observation,
        assignment,
        reference,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await resp.data;
    const dataObj = JSON.stringify(data);
    localStorage.setItem("userData", dataObj);
    return data;
  };

  useEffect(() => {
    const allExpData = async () => {
      const expData = await allFetchedExp();
      dispatch(setAllExp(expData));
    };
    allExpData();
  }, []);

  const submitHandler = async (event) => {
    // event.preventDefault();
    const data = await createExp();
    setNumber("");
    setName("");
    setAim("");
    setTheory("");
    setProcedure("");
    setObservation("");
    setAssignment("");
    setReferences("");
    setModalIsOpen(false);
  };

  const openExp = async (id) => {
    const resp = await axios.get(`http://localhost:3000/exp/${id}`);
    const data = await resp.data;
    console.log("nice bro", data);
    dispatch(setExpById(data));
    dispatch(setCurrentExp(id));
  };

  return (
    <div className="createexp-main-div">
      {allExp.map((value, index) => {
        return (
          <div key={index}>
            <Link to={`${value.number}`} onClick={openExp(value.number)}>
              {console.log(value.number)}
              <p>{value.name}</p>
            </Link>
          </div>
        );
      })}

      <Modal show={modalIsOpen} onHide={() => setModalIsOpen(false)}>
        <Modal.Header>
          <Modal.Title className="create-modal-title">
            New Experiment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="formWraper" onSubmit={submitHandler}>
            <label>
              Experiment Number:
              <input
                className="title-input"
                placeholder="Enter experiment no."
                required={true}
                type="text"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
            </label>

            <label>
              Experiment Name:
              <input
                className="title-input"
                placeholder="Enter experiment name"
                required={true}
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>

            <label>
              Aim:
              <textarea
                className="body-textarea"
                placeholder="aim"
                required={true}
                type="text"
                value={aim}
                onChange={(event) => setAim(event.target.value)}
              />
            </label>

            <label>
              Theory:
              <textarea
                className="body-textarea"
                placeholder="theory"
                required={true}
                value={theory}
                onChange={(event) => setTheory(event.target.value)}
              />
            </label>

            <label>
              Procedure:
              <textarea
                className="body-textarea"
                placeholder="procedure"
                required={true}
                value={procedure}
                onChange={(event) => setProcedure(event.target.value)}
              />
            </label>

            <label>
              Observation:
              <textarea
                className="body-textarea"
                placeholder="observation"
                required={true}
                value={observation}
                onChange={(event) => setObservation(event.target.value)}
              />
            </label>

            <label>
              Assignment:
              <textarea
                className="body-textarea"
                placeholder="assignment"
                required={true}
                value={assignment}
                onChange={(event) => setAssignment(event.target.value)}
              />
            </label>

            <label>
              References:
              <textarea
                className="body-textarea"
                placeholder="references"
                required={true}
                value={reference}
                onChange={(event) => setReferences(event.target.value)}
              />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="create-cancelexp-btn"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
          <button className="create-addexp-btn" onClick={() => submitHandler()}>
            Add Experiment
          </button>
        </Modal.Footer>
      </Modal>

      <button className="newexp-btn" onClick={() => setModalIsOpen(true)}>
        Add New Experiment
      </button>
      <Outlet/>
    </div>
  );
}

export default CreateExp;
