import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../Api/AuthenticationService";
import Headers from "../Navbar/Headers";
import * as BootStrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Service from "../Userprofile/Service";

function ViewEmployees() {
  const [data, setData] = useState({});
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState('');
  const usenavigate = useNavigate();

  useEffect(() => {
    if (data.roleCode === "ADMIN") {
      getAllUser();
    } else if (data.roleCode === "MANAGER") {
      getBySupervisor(data.email);
    }
  }, [data]);

  const getBySupervisor = () => {
    Service.getByUserVisor(data.email)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllUser = () => {
    Service.getAllUsers()
      .then((response) => {
        setUser(response.data);
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

  const deleteEmployees = (id) => {
    Service.deleteById(id)
      .then((response) => {
        getAllUser();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function viewEmployees(id) {
    usenavigate("/userinfo/" + id);
  }
  function editEmployees(id) {
    usenavigate("/edituserinfo/" + id);
  }

  return (
    <div>
      <Headers />
      <br></br>
      <br />
      <br />
      <div className="container">
        <div class="input-group rounded">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            
            aria-describedby="search-addon"
            onChange={(e) => setQuery(e.target.value)}
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="">
        <BootStrap.Row xs={1} md={4}>
          {user
            .filter((user) => {
              if(query===""){
                return user;
              }else if(user.email.toLowerCase().includes(query.toLowerCase())){
                return user;
              }else if(user.username.includes(query.toLowerCase())){ 
                return user;
              }else if(user.designation.toLowerCase().includes(query.toLowerCase())){ 
                return user;
              }
            })
            .map((user) => 
              <BootStrap.Col>
                <div>
                  <BootStrap.CardGroup>
                    <BootStrap.Card>
                      <BootStrap.Card.Body>
                        <BootStrap.Card.Text>
                          UserId : {user.id}
                        </BootStrap.Card.Text>
                        <BootStrap.Card.Text>
                          UserName : {user.email}
                        </BootStrap.Card.Text>
                        <BootStrap.Card.Text>
                          Email : {user.username}
                        </BootStrap.Card.Text>
                        <BootStrap.Card.Text>
                          Phonenumber : {user.phonenumber}
                        </BootStrap.Card.Text>
                        <BootStrap.Card.Text>
                          Designation : {user.designation}
                        </BootStrap.Card.Text>
                      </BootStrap.Card.Body>

                      <br></br>
                      <BootStrap.Button
                        onClick={() => editEmployees(user.id)}
                        className="btn btn-info"
                      >
                        Edit
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                      </BootStrap.Button>

                      <br></br>
                      <BootStrap.Button
                        onClick={() => viewEmployees(user.id)}
                        className="btn btn-success"
                      >
                        {" "}
                        View
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                      </BootStrap.Button>
                      <br></br>
                      <BootStrap.Button
                        onClick={() => deleteEmployees(user.id)}
                        className="btn btn-danger"
                      >
                        Delete
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </BootStrap.Button>
                    </BootStrap.Card>
                  </BootStrap.CardGroup>
                </div>
              </BootStrap.Col>
            )}
        </BootStrap.Row>
      </div>
    </div>
  );
}

export default ViewEmployees;
