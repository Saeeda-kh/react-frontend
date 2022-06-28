import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, NavItem } from "react-bootstrap";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav-link">
              Excercise Tracker
            </Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li>
                  <NavItem>
                    <Link to="/users" className="nav-link">
                      Users
                    </Link>
                  </NavItem>
                </li>

                <li>
                  {/* <NavItem>
                    <Link to="/" className="nav-link">
                      Excercises
                    </Link>
                  </NavItem> */}
                </li>

                <li>
                  <NavItem>
                    <Link to="/createExc" className="nav-link">
                      Create Excercise
                    </Link>
                  </NavItem>
                </li>
                <li>
                  <Link to="/createUser" className="nav-link">
                    Create User
                  </Link>
                </li>
              </ul>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};
