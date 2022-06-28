import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ExcerciseList } from "./excerciseList";
import "bootstrap/dist/css/bootstrap.css";
import "./excercises.css";
import { useSelector } from "react-redux";
import { setUsers, delUser } from "../redux/slices/usersSlice";
import { setExcercises, delExcercise } from "../redux/slices/excercisesSlice";
import { useDispatch } from "react-redux";

export const Users = () => {
  const [back, setBack] = useState(false);
  const excerciseList = useSelector((state) => state.excercises);

  const users = useSelector((state) => state.users);
  const [userN, setUserN] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    async function userList() {
      const res = await axios.get("http://localhost:3001/users");
      dispatch(setUsers(res.data));
    }
    userList();
  }, []);

  const showExcercises = async (uName) => {
    const res = await axios.get(`http://localhost:3001/excercises/${uName}`);
    res.data.length
      ? dispatch(setExcercises(res.data)) && setBack(!back)
      : alert("no excercises");

    setUserN(uName);
  };

  const deleteUser = async (i) => {
    await axios
      .delete(`http://localhost:3001/users/${i}`)
      .then((res) => console.log(res.data));
    dispatch(delUser(i));
  };

  const setBackBtn = () => {
    setBack(!back);
    dispatch(setExcercises([]));
  };

  const deleteExcercise = async (i) => {
    await axios
      .delete(`http://localhost:3001/excercise/${i}`)
      .then((res) => console.log(res));
    dispatch(delExcercise(i));
  };
  return (
    <div>
      <div className="list">
        {!back && (
          <ol className="list-group-flush ">
            <div>
              {users &&
                users.map((user, i) => (
                  <li
                    className="list-group-item list-group-item-action"
                    key={i}
                  >
                    <div className="list-item">
                      <div>{user.username}</div>
                      <div className="buttons-div">
                        <button
                          className="btn btn-secondary"
                          onClick={() => showExcercises(user.username)}
                        >
                          Show Excercises
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteUser(i)}
                        >
                          Delete User
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
            </div>
          </ol>
        )}
      </div>
      {back && (
        <div className="excercisesTable">
          <div>
            <h1>{userN}</h1>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td className="col-head">
                  <h4>Description</h4>
                </td>
                <td className="col-head">
                  <h4>Duration</h4>
                </td>
                <td className="col-head">
                  <h4>date</h4>
                </td>
                <th className="col-head"></th>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {back &&
        excerciseList.map((exc, i) => (
          <ExcerciseList
            excercise={exc}
            username={exc.username}
            desc={exc.description}
            date={exc.date}
            duration={exc.duration}
            key={i}
            deleteExcercise={() => deleteExcercise(i)}
          />
        ))}

      <br />
      {back && (
        <button className="button" onClick={setBackBtn}>
          Back to users
        </button>
      )}
    </div>
  );
};
