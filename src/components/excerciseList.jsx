import React from "react";
import "./excercises.css";

export const ExcerciseList = ({ desc, duration, date, deleteExcercise }) => {
  return (
    <div className="excercisesTable">
      {
        <table className="table">
          <tbody>
            <tr>
              <td className="col">{desc}</td>
              <td className="col">{duration}</td>
              <td className="col">{date}</td>
              <td className="col">
                <button onClick={deleteExcercise} className="btn btn-primary">
                  Delete Excercise
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
};
