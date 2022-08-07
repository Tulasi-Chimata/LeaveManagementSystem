import React, { useEffect, useState } from "react";
import Service from "../Userprofile/Service";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserData } from "../../Api/AuthenticationService";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Styles from "../User/Styles/Styles.css";
import Headers from "../Navbar/Headers";

function EditRedirect() {
  const [data, setData] = useState({});
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phonenumber,setPhonenumber] = useState('')
  const [password,setPassword] = useState('')
  const [designation, setDesignation] = useState('')
  const [supervisor,setSupervisor] = useState('')
    const {id} = useParams()
  const [user, setUser] = useState("");
  const usenavigate = useNavigate();


  useEffect(() => {
    
    getAllUsers(id);
  }, [data]);

  
  const handleClick = () =>{
    const details = {username,email,supervisor,designation,phonenumber}
    if(id){
        Service.updateUser(id,details).then((response)=>{
            console.log(response)
            usenavigate(-1)
        }).catch((err)=>{
            console.log(err)
        })
    }
  }



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
    const details = {user}
        Service.updateByAdmin(id,details).then((response)=>{
       
                setUser(response.data);
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          };

          
          useEffect(()=>{
            Service.getUserById(id).then((response)=>{
                setEmail(response.data.email)
                setUsername(response.data.username)
                setSupervisor(response.data.supervisor)
                setPhonenumber(response.data.phonenumber)
                setDesignation(response.data.designation)
            })
            
        },[data])
    
    
        
    
    
    
  
  return (
    <div className="checker">
      <Headers />

      

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
          <form onSubmit={handleClick}>

            <br />
            <br />

            <Card.Text style={{ color: "red" }}  > Email :
        
              
              <input
                type="email"
                name="email_of_user"
                className="form-control"
                value={username}
                placeholder="Email"  onChange={(e)=>setUsername(e.target.value)}
              />
            </Card.Text>
            <Card.Text style={{ color: "red" }}  > UserName :
        
              
            <input
                type="text"
                name="name"
                className="form-control"
                value={email}
                placeholder="Name" onChange={(e)=>setEmail(e.target.value)}
              />
            </Card.Text>
            
          
            <Card.Text style={{ color: "red" }}>phonenumber :
            <input
                type="text"
                name="name"
                className="form-control"
                value={phonenumber}
                placeholder="PhoneNumber" onChange={(e)=>setPhonenumber(e.target.value)}
              />
            
            
            </Card.Text>

          
            
            <Card.Text style={{ color: "red" }}>Supervisor:
            
            
            <input
                type="text"
                name="name"
                className="form-control"
                value={supervisor}
                placeholder="Supervisor" onChange={(e)=>setSupervisor(e.target.value)}
              />
            
            
            </Card.Text>

        

            <Card.Text style={{ color: "red" }}>Designation :
            <input
                type="text"
                name="name"
                className="form-control"
                value={designation}
                placeholder="Designation" onChange={(e)=>setDesignation(e.target.value)}
              />
            
            
            
            
            </Card.Text>
            <button className="btn btn-success"  >Submit </button></form>
           
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default EditRedirect;
