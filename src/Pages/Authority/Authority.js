import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../Navbar/Headers";
import AuthService from "./Service/AuthService";
import * as BootStrap from "react-bootstrap";

function Authority() {
  const [user, setUser] = useState([]);
  const usenavigate = useNavigate();

  useEffect(() => {
    gettingAll();
  }, []);

  const gettingAll = () => {
    AuthService.getAllUsers().then((response) => {
      setUser(response.data);
    });
  };

  function viewleave(id) {
    usenavigate("/permission/" + id);
  }

  return (
    <div>
      <Headers />
<br></br>
<br></br>
      <br />
      <br />

      <div>
        <BootStrap.Row xs={1} md={4}>
          {user.map((user) => (
            <BootStrap.Col>
              <div>
                <BootStrap.CardGroup>
                  <BootStrap.Card>
                    <BootStrap.Card.Body>
                      <BootStrap.Card.Text>
                        Username : {user.email}
                      </BootStrap.Card.Text>
                      <BootStrap.Card.Text>
                        Email : {user.email}
                      </BootStrap.Card.Text>
                      <BootStrap.Card.Text>
                        Designation : {user.designation}
                      </BootStrap.Card.Text>
                      <BootStrap.Card.Text>
                        Supervisor : {user.supervisor}
                      </BootStrap.Card.Text>
                    </BootStrap.Card.Body>
                    <BootStrap.Button onClick={() => viewleave(user.id)}>
                      Check
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-bag-check"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </BootStrap.Button>
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

export default Authority;
