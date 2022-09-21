import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../Api/AuthenticationService";
import Headers from "../Navbar/Headers";
import ApproveService from "./Service/ApproveService";
import * as BootStrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Approve() {
  const [data, setData] = useState("");
  const [leaves, setLeaves] = useState([]);
  const usenavigate = useNavigate();

  React.useEffect(() => {
    fetchUserData()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (data.roleCode === "ADMIN") {
      getterForAdmin();
    } else {
      getBySuperior(data.email);
    }
  }, [data]);

  const getterForAdmin = () => {
    ApproveService.getAllRequest()
      .then((response) => {
        setLeaves(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getBySuperior = () => {
    ApproveService.getBySuperVisor(data.email)
      .then((response) => {
        setLeaves(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function redirect(id) {
    usenavigate("/managerreq/" + id);
  }

  function review(id, status) {
    if (status === "Approved" && data.roleCode === "MANAGER") {
      alert(
        "Sorry This Request Has Been FullFilled This Can Only Accessed My Admin Now"
      );
    } else {
      usenavigate("/reviewrequest/" + id);
    }
  }

  return (
    <div>
      <Headers />
      <br/>
        <br></br>
      <br />
      <br />
      <div className="container">
        <BootStrap.Row xs={1} md={4}>
          {leaves.map((leaves) => (
            <BootStrap.Col>
              <div>
                <BootStrap.CardGroup>
                  <BootStrap.Card style={{ width: "100%"}}>
                    <BootStrap.Card.Body>
                      <BootStrap.Card.Text>
                        StartDate : {leaves.startDate}
                      </BootStrap.Card.Text>
                      <BootStrap.Card.Text>
                        EndDate : {leaves.endDate}
                      </BootStrap.Card.Text>
                      <BootStrap.Card.Text>
                        Status : {leaves.status}
                      </BootStrap.Card.Text>
                      <BootStrap.Card.Text>
                        Reason : {leaves.reason1}
                      </BootStrap.Card.Text>
                      <BootStrap.Card.Text>
                        Supervisor : {leaves.supervisor}
                      </BootStrap.Card.Text>
                    </BootStrap.Card.Body>
                    <BootStrap.Button 
                      style={{width:"50%",position:"absolute",marginLeft:"5%",marginTop:"70%"}}
                      onClick={() =>
                        review(leaves.leaverequestid, leaves.status)
                      }
                    >
                      View Request
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

                    <br />

                    {data.roleCode === "MANAGER" &&
                      leaves.status === "Approved" && (
                        <BootStrap.Button  style={{width:"30%",position:"absolute",marginLeft:"65%",marginTop:"70%"}}
                          className="btn btn-danger"
                          onClick={() => redirect(leaves.leaverequestid)}
                        >
                          Help
                        </BootStrap.Button>
                      )}

                    <br />

                    {data.roleCode === "MANAGER" &&
                      leaves.status === "Rejected" && (
                        <BootStrap.Button   style={{width:"30%",position:"absolute",marginLeft:"65%",marginTop:"70%"}}
                          className="btn btn-danger"
                          onClick={() => redirect(leaves.leaverequestid)}
                        >
                          Help
                        </BootStrap.Button>
                      )}
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

export default Approve;
