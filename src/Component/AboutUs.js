import React, { useEffect } from "react";
import "../Style/about.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
function AboutUs() {
    useEffect(()=>{
        AOS.init();

    },[])
  return (
    <div className="container-fluid " id="about">
      <div className="row big_cont d-flex justify-content-center align-items-center">
        <div className="col">
          <div className="row">
            <div className="col" data-aos="fade-right" data-aos-duration="2000">
              <div className="whoare_container" >
                <img
                  src={require("../Image/section-title.png")}
                  alt=""
                  className=""
                />
                <span className="who_are">WHO WE ARE</span>
              </div>
            </div>
          </div>
          <div className="row cont_title">
            <div data-aos="fade-right" data-aos-duration="2000" className="col">
              <p className="title_about" >
                Ensuring Your Success Through Reliable IT Solutions
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col " data-aos="fade-right" data-aos-duration="2000">
              <p className="details_about">
                Our company works to support and harness its services in the
                field of information technology to serve its clients from the
                private and government sectors and to contribute to business
                development and development to keep pace with the latest
                innovative technical outputs.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col" data-aos="fade-right" data-aos-duration="2000">
              <ul className="list_about">
                <li className="internal_list">
                  <span class="check_icon">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span className="para_list">Technology Consultancy</span>
                </li>
                <li className="internal_list">
                  <span class="check_icon">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span className="para_list">Maintenance And Support</span>
                </li>
                <li className="internal_list">
                  <span class="check_icon">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span className="para_list">We Provide best services</span>
                </li>
                <li className="internal_list">
                  <span class="check_icon">
                    <i class="fa-solid fa-check"></i>
                  </span>
                  <span className="para_list">Requirements Gathering</span>
                </li>
              </ul>
              {/*             
            <span class="check_icon">
            <i class="fa-solid fa-check"></i></span>
            <span>Technology Consultancy</span> */}
            </div>
          </div>
        </div>
        <div className="col hide_img_about">
          <img
            src={require("../Image/about jana.png")}
            alt=""
            className="img_about"
          />
        </div>
      
      </div>
      
    </div>
  );
}

export default AboutUs;
