import React from "react";
import axios from "axios";
import "./excercises.css";
import { useRef } from "react";

export const CreateUser = () => {
  const name = useRef("");
  const email = useRef("");
  const age = useRef("");
  const passward = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    axios
      .post("http://localhost:3001/users/add", {
        username: name.current.value,
        email: email.current.value,
        age: age.current.value,
        passward: passward.current.value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    name.current.value = "";
    email.current.value = "";
    age.current.value = "";
    passward.current.value = "";
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>UserName</label>
          <input type={"text"} ref={name} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type={"text"} ref={email} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input type={"text"} ref={age} className="form-control" required />
        </div>
        <div className="mb-3">
          <label>Passward</label>
          <input
            type="password"
            ref={passward}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
