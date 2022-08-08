import React, { useEffect, useState } from "react";
import Headers from "../../Navbar/Headers";
import ManagerReq from "../Service/ManagerReq";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { fetchUserData } from "../../../Api/AuthenticationService";
import './Styles/Style.css'
import * as BootStrap from "react-bootstrap";
function Adminresponse() {
  const [data, setData] = useState({});
  const [requests, setRequests] = useState([]);
  const usenavigate = useNavigate();

  useEffect(() => {
    getAllreq(data.id);
  }, [data]);

  const getAllreq = () => {
    ManagerReq.getbyManagerId(data.id)
      .then((response) => {
        setRequests(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchUserData()
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Headers />
      <br></br>
      <br></br> <br></br> <br></br>
      <div>
      <BootStrap.Row xs={1} md={4}>
          
      {requests.map((requests) => (
           <BootStrap.Col>
           <div>
             <BootStrap.CardGroup>
               <BootStrap.Card>

      <div>
        
          <BootStrap.Card.Body>
            <BootStrap.Card.Text>Manager Name : {requests.managername}   </BootStrap.Card.Text>
            <BootStrap.Card.Text>Manager Email : {requests.manageremail}   </BootStrap.Card.Text>
            <BootStrap.Card.Text>Reason For Request : {requests.reason}   </BootStrap.Card.Text>
            <BootStrap.Card.Text>Admin Response : {requests.response}   </BootStrap.Card.Text>
            </BootStrap.Card.Body>
            </div>
                  </BootStrap.Card>
                </BootStrap.CardGroup>
              </div>
            </BootStrap.Col>
          ))}
        </BootStrap.Row>
      </div>
    </div>
  );
}

export default Adminresponse;
