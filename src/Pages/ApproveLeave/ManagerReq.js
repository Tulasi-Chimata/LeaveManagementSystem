import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserData } from "../../Api/AuthenticationService";
import ManagerReqService from "./Service/ManagerReq";
import { ToastContainer, toast } from 'react-toastify';

function ManagerReq() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const usenavigate = useNavigate();
  const [manageremail,setManageremail] = useState("")
  const [managername,setManagername] = useState("")
  const [leaveid,setLeaveid] = useState("")
  const [managerid,setManagerid] = useState("")
  const [reason,setReason] = useState("")
  const [response,setResponse] = useState("")
  const [checker,setChecker] = useState("")

  useEffect(()=>{
    setManageremail(data.username)
    setManagername(data.email)
    setManagerid(data.id)
    setLeaveid(id)
    
  },[data])

  const handler = (e) => {
    e.preventDefault()
    const adddetails = {manageremail,managerid,managername,leaveid,reason,response}
    if(id!==checker){
    fetch("http://localhost:8888/managereq/addManagerReq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adddetails),
    }).then((response)=>{
      if(response.ok){
        emailjs
        .sendForm(
          "service_wztssph",
          "template_qv9i5e9",
          e.target,
          "O4AupeoHsIQupGqhl"
        )
        .then(
          (result) => {
            console.log(result.text);
            usenavigate(-1);
          },
          (error) => {
            console.log(error.text);
          }
        );
      }
    })}else{
    toast.error("Already A Response Has Been Submitted");
    }
  };

  console.log("Hello"+checker)

  useEffect(()=>{
    getBYLeaveid(id)
  },[data])

  const getBYLeaveid = () =>{
    ManagerReqService.getBYLeaveid(id).then((response)=>{
      setChecker(response.data.leaveid)
    }).catch(err=>{
      console.log(err)
    })
  }

  React.useEffect(() => {
    fetchUserData()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 

  return (
    <div>
      <ToastContainer />
      <div className="container">
        <form onSubmit={handler}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group  mx-auto">
              <label>To</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value="chtulasi484@gmail.com"
                placeholder="Email"
              />
            </div>

            <div className="col-8 form-group  mx-auto">
              <label>From</label>
              <input
                type="email"
                name="email_of_user"
                className="form-control"
                value={data.username}
                placeholder="Email"
              />
            </div>

            <div className="col-8 form-group pt-2 mx-auto">
              <label>Manager Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={data.email}
                placeholder="Name"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <label>Leave Id</label>
              <input
                type="text"
                name="id"
                className="form-control"
                value={id}
                placeholder="Leave Id"
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <label>Message</label>
              <textarea
                name="message"
                onChange={(e)=>setReason(e.target.value)}
                className="form-control"
                placeholder="Message"
              />
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input type="submit" value="Send" className="btn btn-info" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManagerReq;
