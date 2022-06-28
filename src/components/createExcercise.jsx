import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./excercises.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const CreateExcercise = () => {
  const [users, setUsers] = useState([]);

  const name = useRef("");
  const desc = useRef("");
  const duration = useRef("");
  const date = useRef("");

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => {
      setUsers(res.data);
      console.log(users);
    });
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/excercises/add", {
        username: name.current.value,
        description: desc.current.value,
        duration: duration.current.value,
        date: date.current.value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    name.current.value = "";
    desc.current.value = "";
    duration.current.value = "";
    date.current.value = "";
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>UserName</label>
          <select className="form-control" ref={name} required>
            {users.map((user, i) => (
              <option key={i}>{user.username}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label>Description</label>
          <input
            type={"textarea"}
            className="form-control"
            ref={desc}
            required
          />
        </div>
        <div className="mb-3">
          <label>Duration</label>
          <input
            type={"text"}
            className="form-control"
            ref={duration}
            required
          />
        </div>
        <div className="mb-3">
          <label>Date</label>
          <input type={"date"} className="form-control" ref={date} required />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
