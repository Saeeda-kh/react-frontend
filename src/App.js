import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navBar";
import { CreateExcercise } from "./components/createExcercise";
import { CreateUser } from "./components/createUser";
import { EditExcercise } from "./components/editExcercise";

import "bootstrap/dist/css/bootstrap.css";
import { Users } from "./components/users";
const App = () => {
  return (
    <Router>
      <NavBar />
      <br />
      <Routes>
        {/* <Route path="/" exact element={<ExcerciseList />} /> */}
        <Route path="/edit/:id" element={<EditExcercise />} />
        <Route path="/createExc" element={<CreateExcercise />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
