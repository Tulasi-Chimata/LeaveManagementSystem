import React, { useEffect, useState } from "react";
import Service from "../Userprofile/Service";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserData } from "../../Api/AuthenticationService";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Styles from "../User/Styles/Styles.css";
import Headers from "../Navbar/Headers";

function Userprofile() {
  const [data, setData] = useState({});

  const [user, setUser] = useState("");
  const usenavigate = useNavigate();



  useEffect(() => {
    getAllUsers(data.username);
  }, [data]);




  React.useEffect(() => {
    fetchUserData()
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  const getAllUsers = () => {
    Service.getUserByName(data.username)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  return (
    <div>
      <Headers />

      <br />
      <br />

      <div className="alldetailscard">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
        <div className="title">
          <Card.Title style={{ color: "red" }}>
            {" "}
            {user.email}
          </Card.Title>
        </div>
        <Card style={{ width: "28rem" }}>
          <Card.Body>
            <br />
            <br />

            <Card.Text style={{ color: "red" }}> Email :</Card.Text>
            <Card.Text>{user.username}</Card.Text>
            <Card.Text style={{ color: "red" }}>phonenumber :</Card.Text>

            <Card.Text>{user.phonenumber}</Card.Text>
            
            <Card.Text style={{ color: "red" }}>Password:</Card.Text>

            <Card.Text>{user.password}</Card.Text>

            <Card.Text style={{ color: "red" }}>Designation :</Card.Text>

            <Card.Text>{user.designation}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Userprofile;
