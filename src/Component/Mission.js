import React from "react";
import "../Style/mission.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import icon1 from "../Image/icon-1.svg";
import icon2 from "../Image/icon-2.svg";
import icon3 from "../Image/icon-3.svg";
import icon4 from "../Image/icon-4.svg";
import icon5 from "../Image/icon-5.svg";
import icon6 from "../Image/icon-6.svg";
function Mission() {
    useEffect(()=>{
        AOS.init();

    },[])
  return (
    <div className="container text-center">
      <p className="mission_title">Our Mission</p>
      <div className="row">
        <div className="col-lg-4">
          <div className="row">
            <div className="col">
              <div className="row mt-4">
                <div className="col-lg-10 col-md-6 col-sm-12 col_text_icon_left">
                  <p className="sub_title_left" data-aos="fade-right" data-aos-duration="2000">
                    System design and implementation
                  </p>
                  <p className="desc_mission_left" data-aos="fade-right" data-aos-duration="2000">
                    Designing and implementing customized technology solutions,
                    including hardware, software, and network infrastructure, to
                    meet the client's specific needs.
                  </p>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 ">
                  <img src={icon6} className="icon_mission" alt=""  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-10 col-md-6 col-sm-12 col_text_icon_left">
              <p className="sub_title_left" data-aos="fade-right" data-aos-duration="2000">IT project management</p>
              <p className="desc_mission_left"data-aos="fade-right" data-aos-duration="2000" >
                Overseeing the planning, execution, and monitoring of IT
                projects to ensure they are completed on time, within scope, and
                within budget.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12  ">
              <img src={icon2} className="icon_mission" alt="" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-10 col-md-6 col-sm-12 col_text_icon_left">
              <p className="sub_title_left" data-aos="fade-right" data-aos-duration="2000">
                Information security and risk management
              </p>
              <p className="desc_mission_left" data-aos="fade-right" data-aos-duration="2000">
                Assessing and mitigating potential risks and vulnerabilities in
                the client's information systems through security audits,
                policies, and procedures.
              </p>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12  ">
              <img src={icon3} className="icon_mission" alt="" />
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-4 cont_img_mission">
            <img src={require("../Image/features.jpg")} alt="" className="img_break"/>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col">
              <div className="row mt-4">
                <div className="col-lg-2 col-md-6 col-sm-12 ">
                  <img src={icon4} className="icon_mission" alt="" />
                </div>
                <div className="col-lg-10 col-md-6 col-sm-12 col_text_icon_right">
                  <p className="sub_title_right" data-aos="fade-right" data-aos-duration="2000">
                    Business process improvement
                  </p>
                  <p className="desc_mission_right" data-aos="fade-right" data-aos-duration="2000">
                    Identifying opportunities for streamlining processes and
                    improving efficiency through the implementation of
                    technology.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-2 col-md-6 col-sm-12  ">
                  <img src={icon5} className="icon_mission" alt="" />
                </div>
                <div className="col-10 col_text_icon_right">
                  <p className="sub_title_right" data-aos="fade-right" data-aos-duration="2000">Maintenace </p>
                  <p className="desc_mission_right" data-aos="fade-right" data-aos-duration="2000">
                    Providing technical support in a safe and fast manner, while
                    providing a direct electronic archive that connects all the
                    company’s departments. Please visit the Money Makers website
                    for more details.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-2 col-md-6 col-sm-12 ">
                  <img src={icon1} className="icon_mission " alt="" />
                </div>
                <div className="col-lg-10 col-md-6 col-sm-12 col_text_icon_right ">
                  <p className="sub_title_right" data-aos="fade-right" data-aos-duration="2000">programming </p>
                  <p className="desc_mission_right" data-aos="fade-right" data-aos-duration="2000">
                    Design and programming Websites mobile applications Online
                    stores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
