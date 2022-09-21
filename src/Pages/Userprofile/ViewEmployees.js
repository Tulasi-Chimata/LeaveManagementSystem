import React, { useEffect, useState } from "react";
import { fetchUserData } from "../../Api/AuthenticationService";
import Headers from "../Navbar/Headers";
import * as BootStrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Service from "../Userprofile/Service";
import "./style.css";
import $ from "jquery";
function ViewEmployees() {
  const [data, setData] = useState({});
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState("");
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

  $(document).ready(function () {
    var itemsMainDiv = ".MultiCarousel";
    var itemsDiv = ".MultiCarousel-inner";
    var itemWidth = "";

    $(".leftLsts, .rightLsts").click(function () {
      var condition = $(this).hasClass("leftLsts");
      if (condition) click(0, this);
      else click(1, this);
    });

    ResCarouselSize();

    $(window).resize(function () {
      ResCarouselSize();
    });

    function ResCarouselSize() {
      var incno = 0;
      var dataItems = "data-items";
      var itemClass = ".item";
      var id = 0;
      var btnParentSb = "";
      var itemsSplit = "";
      var sampwidth = $(itemsMainDiv).width();
      var bodyWidth = $("body").width();
      $(itemsDiv).each(function () {
        id = id + 1;
        var itemNumbers = $(this).find(itemClass).length;
        btnParentSb = $(this).parent().attr(dataItems);
        itemsSplit = btnParentSb.split(",");
        $(this)
          .parent()
          .attr("id", "MultiCarousel" + id);

        if (bodyWidth >= 2000) {
          incno = itemsSplit[3];
          itemWidth = sampwidth / incno;
        } else if (bodyWidth >= 1492) {
          incno = itemsSplit[1];
          itemWidth = sampwidth / incno;
        } else if (bodyWidth >= 668) {
          incno = itemsSplit[1];
          itemWidth = sampwidth / incno;
        } else {
          incno = itemsSplit[5];
          itemWidth = sampwidth / incno;
        }
        $(this).css({
          transform: "translateX(0px)",
          width: itemWidth * itemNumbers,
        });
        $(this)
          .find(itemClass)
          .each(function () {
            $(this).outerWidth(itemWidth);
          });

        $(".leftLsts").addClass("over");
        $(".rightLsts").removeClass("over");
      });
    }

    function ResCarousel(e, el, s) {
      var leftBtn = ".leftLsts";
      var rightBtn = ".rightLsts";
      var translateXval = "";
      var divStyle = $(el + " " + itemsDiv).css("transform");
      var values = divStyle.match(/-?[\d\.]+/g);
      var xds = Math.abs(values[4]);
      if (e == 0) {
        translateXval = parseInt(xds) - parseInt(itemWidth * s);
        $(el + " " + rightBtn).removeClass("over");

        if (translateXval <= itemWidth / 2) {
          translateXval = 0;
          $(el + " " + leftBtn).addClass("over");
        }
      } else if (e == 1) {
        var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
        translateXval = parseInt(xds) + parseInt(itemWidth * s);
        $(el + " " + leftBtn).removeClass("over");

        if (translateXval >= itemsCondition - itemWidth / 2) {
          translateXval = itemsCondition;
          $(el + " " + rightBtn).addClass("over");
        }
      }
      $(el + " " + itemsDiv).css(
        "transform",
        "translateX(" + -translateXval + "px)"
      );
    }

    function click(ell, ee) {
      var Parent = "#" + $(ee).parent().attr("id");
      var slide = $(Parent).attr("data-slide");
      ResCarousel(ell, Parent, slide);
    }
  });

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
    <div style={{overflow:"hidden"}}>
      <Headers />
      <br></br>
      <br />
      <br />
      <div className="container" style={{width:"20%"}}>
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
      <br></br>{" "}
      <div className="container">
        <a href="http://localhost:8888/addnew/generate/export" download>
          Generate List In Excel
        </a>
        <br></br>
        <br></br>
      </div>
      <div class="containeriknjein" >
        <div class="row">
          <div
            class="MultiCarousel"
            data-items="1,3,5,6"
            data-slide="1"
            id="MultiCarousel"
            data-interval="1"
          >
            <div class="MultiCarousel-inner">
              {user
                .filter((user) => {
                  if (query === "") {
                    return user;
                  } else if (
                    user.email.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return user;
                  } else if (user.username.includes(query.toLowerCase())) {
                    return user;
                  } else if (
                    user.designation.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return user;
                  }
                })
                .map((user) => (
                  <div className="item">
                    <BootStrap.Card  style={{ width: "100%"}}>
                      <BootStrap.Card.Body className="card">
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
                        style={{width:"20%",position:"absolute",marginLeft:"10%",marginTop:"80%"}}
                        onClick={() => editEmployees(user.id)}
                        className="btn btn-info"
                      >
                        Edit
                        
                      </BootStrap.Button>

                      <br></br>
                      <BootStrap.Button
                      style={{width:"25%",position:"absolute",marginLeft:"35%",marginTop:"80%"}}
                        onClick={() => viewEmployees(user.id)}
                        className="btn btn-success"
                      >
                        {" "}
                        View
                        
                      </BootStrap.Button>
                      <br></br>
                      <BootStrap.Button
                      style={{width:"30%",position:"absolute",marginLeft:"65%",marginTop:"80%"}}
                        onClick={() => deleteEmployees(user.id)}
                        className="btn btn-danger"
                      >
                        Delete
                       
                      </BootStrap.Button>
                    </BootStrap.Card>
                  </div>
                ))}
            </div>
            <button style={{marginTop:"5%",marginLeft:"130%"}} class="btn btn-primary leftLsts"> ← </button>
            <button style={{marginTop:"-6.8%",marginLeft:"135%"}} class="btn btn-primary rightLsts"> → </button>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default ViewEmployees;
