import React, { useEffect, useState } from "react";
import Headers from "../../Navbar/Headers";
import Service from "./Service/Service";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import * as BootStrap from "react-bootstrap";
function Adminmanager() {
  const [request, setRequest] = useState([]);
const usenavigate = useNavigate()
  

  useEffect(() => {
    getRequests();
  }, []);

  

  function checker(id){
    usenavigate("/viewDetails/"+id)
  }

  const getRequests = () => {
    Service.getAllreq()
      .then((response) => {
        setRequest(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Headers />
      <div > 
        <br/>
        <br></br>
        <br/>
        <br></br>
        <BootStrap.Row xs={1} md={3}>
          
        {request.map((request) => 
         <BootStrap.Col>
         <div>
           <BootStrap.CardGroup>
             <BootStrap.Card>
               <BootStrap.Card.Body>
                 <BootStrap.Card.Text>
Manager Email :{request.managername}
              </BootStrap.Card.Text>
                      <BootStrap.Card.Text>

               Manager Name : {request.manageremail}
             </BootStrap.Card.Text>
             <BootStrap.Card.Text>

               Reason for Request :{request.reason}
                </BootStrap.Card.Text>
                <BootStrap.Card.Text>
              Your Response :{request.response}
                </BootStrap.Card.Text> </BootStrap.Card.Body>
              <Button onClick={()=>checker(request.id)} variant="primary">View Request</Button>
              </BootStrap.Card>
                </BootStrap.CardGroup>  </div> </BootStrap.Col>
        )} 
      
           
          
        </BootStrap.Row>
      </div>
    </div>
  );
}

export default Adminmanager;
