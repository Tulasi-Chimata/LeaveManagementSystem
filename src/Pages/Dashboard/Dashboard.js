import React, { useEffect, useState } from "react";
import Headers from "../Navbar/Headers";
import "./Styles/Dashboard.css";
import { fetchUserData } from "../../Api/AuthenticationService";
import { useNavigate } from "react-router-dom";
import * as BootStrap from "react-bootstrap";

function Dashboard() {
  const [data, setData] = useState("");
  const usenavigate = useNavigate();

  React.useEffect(() => {
    fetchUserData()
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //Hi change this raina9486 as some default password which used for all new user registration it automatically redirect
  //to change password

  useEffect(() => {
    if (data.password === "123456789") {
      usenavigate("/changepassword");
    }
  }, [data]);

  return (
    <div>
      <Headers />
      <div className="dignity">
        <h1>
          <span>We</span>
          <span>Are</span>
          <span>Happy To Help!</span>
          <h1>Raise A Request</h1>
        </h1>
      </div>

      <div>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />

        <link rel="stylesheet" href="styles.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap"
          rel="stylesheet"
        />

        <div class="header">
          <h1>Reliable, Efficient Portal</h1>
          <br />
          <br />
          <h1>Powered by Java</h1>
          <br />
          <br />
          <br />
          <p>
          The leave management system (LMS) of an organization is a software application that enables employees   to request, track, and manage their leaves.
          </p>
        </div>

        <div class="row1-container">
          {data.roleCode === "ADMIN" && (
            <div class="box box-down cyan">
              <h2>Admin</h2>
              <p>
                Monitors activity to identify the problems of users and permit
                authority
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                alt=""
              />
              <BootStrap.Button href="/grantAuthority">
                Authority
              </BootStrap.Button>
            </div>
          )}

          {data.roleCode === "MANAGER" && (
            <div class="box box-down cyan">
              <h2>View Request</h2>
              <p>Managers watch over their subordinates requests</p>

              <img
                src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                alt=""
              />
              <BootStrap.Button href="/approvallist">Requests</BootStrap.Button>
            </div>
          )}

          {data.roleCode === "USER" && (
            <div class="box box-down cyan">
              <h2>Add leave</h2>
              <p>Employees can request their leave here.</p>

              <img
                src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                alt=""
              />
              <BootStrap.Button href="/addleave">
                Request Leave
              </BootStrap.Button>
            </div>
          )}

          {data.roleCode === "ADMIN" && (
            <div class="box red">
              <h2>New Employee Builder</h2>
              <p>
                Scans our employee network to create the optimal account for
                their leave management
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-team-builder.svg"
                alt=""
              />
              <BootStrap.Button variant="danger" href="/signup">
                Create
              </BootStrap.Button>
            </div>
          )}

          {data.roleCode === "MANAGER" && (
            <div class="box red">
              <h2>Employee Details</h2>
              <p>Manager can view their employee details and edit them</p>
              <img
                src="https://assets.codepen.io/2301174/icon-team-builder.svg"
                alt=""
              />
              <BootStrap.Button variant="danger" href="/viewEmployees">
                View Employees
              </BootStrap.Button>
            </div>
          )}

          {data.roleCode === "USER" && (
            <div class="box red">
              <h2>Leave history</h2>
              <p>Employees Can View Their Leave History</p>
              <img
                src="https://assets.codepen.io/2301174/icon-team-builder.svg"
                alt=""
              />
              <BootStrap.Button variant="danger" href="/leaves">
                View History
              </BootStrap.Button>
            </div>
          )}

          {data.roleCode === "ADMIN" && (
            <div class="box box-down blue">
              <h2>Manager Help Requests</h2>
              <p>
                Employee leave data need to be modified according to manager
                requests
              </p>
              <img
                src="https://assets.codepen.io/2301174/icon-calculator.svg"
                alt=""
              />
              <BootStrap.Button href="/viewRequests">
                Help Requests
              </BootStrap.Button>
            </div>
          )}

          {data.roleCode === "MANAGER" && (
            <div class="box box-down blue">
              <h2>View Requested Tickets</h2>
              <p>Manager can view their tickets rasied to admin</p>
              <img
                src="https://assets.codepen.io/2301174/icon-calculator.svg"
                alt=""
              />
              <BootStrap.Button href="/adminresponse">
                View Tickets
              </BootStrap.Button>
            </div>
          )}

          {data.roleCode === "USER" && (
            <div class="box box-down blue">
              <h2>Profile</h2>
              <p>Employee InfoStore</p>
              <img
                src="https://assets.codepen.io/2301174/icon-calculator.svg"
                alt=""
              />
              <BootStrap.Button href="/profile">View</BootStrap.Button>
            </div>
          )}
        </div>
        {data.roleCode === "ADMIN" && (
          <div class="row2-container">
            <div class="box orange">
              <h2>View Employees</h2>
              <p>View Employee List And Edit Their Information</p>
              <img
                src="https://assets.codepen.io/2301174/icon-karma.svg"
                alt=""
              />
              <BootStrap.Button variant="warning" href="/viewEmployees">
                View Employees
              </BootStrap.Button>
            </div>
          </div>
        )}

        {data.roleCode === "MANAGER" && (
          <div class="row2-container">
            <div class="box orange">
              <h2>Profile</h2>
              <p>Manager can view his profile</p>
              <img
                src="https://assets.codepen.io/2301174/icon-karma.svg"
                alt=""
              />
              <BootStrap.Button variant="warning" href="/profile">
                Profile
              </BootStrap.Button>
            </div>
          </div>
        )}

        {data.roleCode === "USER" && (
          <div class="row2-container">
            <div class="box orange">
              <h2>Calender</h2>
              <p>Employee Can Refer Calender For Planning</p>
              <img
                src="https://assets.codepen.io/2301174/icon-karma.svg"
                alt=""
              />
              <BootStrap.Button variant="warning" href="/calendar">
                Calender
              </BootStrap.Button>
            </div>
          </div>
        )}

        <footer>
          <p class="attribution">
            <h6>
              {" "}
              The leave management system (LMS) of an organization is a software
              application that enables employees to request, track, and manage
              their leaves. The LMS can also help managers approve or deny leave
              requests, and keep track of employee absences as it is important
              to communicate the policy and procedures for leave management to
              all employees. This will ensure that everyone understands their
              rights and responsibilities with regards to leaves of absence.
            </h6>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Fullstack Mentor
            </a>
            . Coded by <a href="#">Tulasi</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;
