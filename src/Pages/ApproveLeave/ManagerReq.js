import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUserData } from "../../Api/AuthenticationService";

function ManagerReq() {
  const { id } = useParams();
  const [data, setData] = useState("");
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

  const sendEmail = (e) => {
    e.preventDefault();

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
    e.target.reset();
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail}>
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
