import { useSelector } from "react-redux";

export function Aim() {
  const { allExp } = useSelector((state) => state.allexp);
  return (
    <div>
      {allExp.map((value) => {
        return <p>{value.aim}</p>;
      })}
    </div>
  );
}

export function Theory() {
  const { allExp } = useSelector((state) => state.allexp);
  return (
    <div>
      {allExp.map((value) => {
        return <p>{value.theory}</p>;
      })}
    </div>
  );
}

export function Procedure() {
  const { allExp } = useSelector((state) => state.allexp);
  return (
    <div>
      {allExp.map((value) => {
        return <p>{value.procedure}</p>;
      })}
    </div>
  );
}

export function Observation() {
  const { allExp } = useSelector((state) => state.allexp);
  return (
    <div>
      {allExp.map((value) => {
        return <p>{value.observation}</p>;
      })}
    </div>
  );
}

export function Assignment() {
  const { allExp } = useSelector((state) => state.allexp);
  return (
    <div>
      {allExp.map((value) => {
        return <p>{value.assignment}</p>;
      })}
    </div>
  );
}

export function Reference() {
  const { allExp } = useSelector((state) => state.allexp);
  return (
    <div>
      {allExp.map((value) => {
        return <p>{value.reference}</p>;
      })}
    </div>
  );
}
