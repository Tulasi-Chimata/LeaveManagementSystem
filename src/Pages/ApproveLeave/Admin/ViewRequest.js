import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Headers from "../../Navbar/Headers";
import Service from "./Service/Service";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ViewRequest() {
  const { id } = useParams();
  const [request, setRequest] = useState("");
  const [manageremail, setManageremail] = useState("");
  const [managername, setManagername] = useState("");
  const [leaveid, setLeaveid] = useState("");
  const [managerid, setManagerid] = useState("");
  const [reason, setReason] = useState("");
  const [response, setResponse] = useState("");
  const usenavigate = useNavigate()

  const handleClick = (e) =>{
    e.preventDefault()
    const request = {manageremail,managerid,managername,leaveid,reason,response}
    if(id){
        Service.updater(id,request).then((response)=>{
            console.log(response)
            usenavigate(-1)
        }).catch((err)=>{
            console.log(err)
        })
    }else{

    }
  }

  useEffect(() => {
    Service.getByIds(id).then((response) => {
      setManageremail(response.data.manageremail);
      setManagername(response.data.managername);
      setLeaveid(response.data.leaveid);
      setManagerid(response.data.managerid);
      setReason(response.data.reason);
      setResponse(response.data.response);
    });
  }, []);

  function ProceedRequest(leaveid){
    usenavigate("/reviewrequest/"+leaveid)
  }

  return (
    <div>
      <Headers /> <br/>
        <br></br> <br/>
        <br></br>
      <Card style={{ width: "28rem" }}>
        <Card.Body>
          <Card.Title>Manager Email : {manageremail}</Card.Title>
          <Card.Text>
            Manager Id : {managerid}
          </Card.Text>
          <Card.Text>
           Manager Name : {managername}
          </Card.Text>
          <Card.Text>
            Request ChangeId : {leaveid}
          </Card.Text>
          <Card.Text>
            Reason To Proceed Request : {reason}
          </Card.Text>
          <input value={response} onChange={(e)=>setResponse(e.target.value)}></input>
          <Button onClick={()=>ProceedRequest(leaveid)}>Proceed Change</Button>
          <Button onClick={handleClick} variant="primary">Close Ticket</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ViewRequest;
