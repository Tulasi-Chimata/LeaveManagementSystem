import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../../Api/AuthenticationService";
import "./Styles/Header.css";

function Headers() {
  const [data, setData] = useState({});
  const usenavigate = useNavigate();

  React.useEffect(() => {
    fetchUserData()
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function Logout() {
    localStorage.clear();
    usenavigate("/");
  }

  return (
    <div>
      <Navbar className="navbarfs" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/dashboard">LeaveManagement</Navbar.Brand>
          <Nav className="me-auto">
            {data &&
              data.roles &&
              data.roles.filter((value) => value.roleCode === "ADMIN")
                .length && (
                <Nav.Link href="/approvallist">Approve Leave</Nav.Link>
              )}

            {data &&
              data.roles &&
              data.roles.filter((value) => value.roleCode === "ADMIN")
                .length && <Nav.Link href="/profile">Profile</Nav.Link>}

            {data &&
              data.roles &&
              data.roles.filter((value) => value.roleCode === "ADMIN")
                .length && <Nav.Link href="/calendar">Calendar</Nav.Link>}

            {data &&
              data.roles &&
              data.roles.filter((value) => value.roleCode === "MANAGER")
                .length && <Nav.Link href="/calendar">Calendar</Nav.Link>}
            {data &&
              data.roles &&
              data.roles.filter((value) => value.roleCode === "USER")
                .length && <Nav.Link href="leaves">History</Nav.Link>}
            {data &&
              data.roles &&
              data.roles.filter((value) => value.roleCode === "USER")
                .length && <Nav.Link href="/profile">Profile</Nav.Link>}

            {data &&
              data.roles &&
              data.roles.filter((value) => value.roleCode === "USER")
                .length && <Nav.Link href="/calendar">Calendar</Nav.Link>}

            <Nav.Link className="logoutcss" onClick={() => Logout()}>
              Logout
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Headers;
