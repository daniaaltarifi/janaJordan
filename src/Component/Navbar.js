import React from "react";
import "../Style/main.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="container_fluid">
        <div className="row test">
          <div className="col-lg-2 col-md-1 col-sm-5">
            <img src={require("../Image/logo.png")} alt="" className="logo" />
          </div>
          <div className="col-lg-8 col-md-10 col-sm-6 cont_nav ">
            <label for="drop" className="toggle menu_mob">
              <i
                class="fa-solid fa-bars fa-lg"
                style={{ color: "#ffffff" }}
              ></i>{" "}
            </label>
            <input type="checkbox" id="drop" />
            {/* mobile icon */}
            {/* <img src={require('../Image/logo.png')} alt="" className='logo'/> */}
            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#">Mission</a>
              </li>
              <li>
                <label for="drop-2" className="toggle ">
                  Services{" "}
                  <i
                    class="fa-solid fa-caret-down"
                    style={{ color: "#000000" }}
                  ></i>
                </label>
                <a href="#">
                  Services{" "}
                  <i
                    class="fa-solid fa-caret-down"
                    style={{ color: "#000000" }}
                  ></i>
                </a>
                <input type="checkbox" id="drop-2" />
                <ul>
                  <li>
                    <a href="#" className="nested_href">
                      IT Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nested_href">
                      {" "}
                      Marketing
                    </a>
                  </li>
                  <li>
                    <label for="drop-3" className="toggle">
                      IT Consultancy+
                    </label>
                    <a href="#" className="nested_href">
                      IT Consultancy
                    </a>
                    <input type="checkbox" id="drop-3" />
                    <ul>
                      <li>
                        <a href="#" className="nested_href">
                          DataAnalytics
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nested_href">
                          jQuery
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nested_href">
                          Python
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>{" "}
              <li>
                <a href="#">LifeCycle</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-1 col-sm-1"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
