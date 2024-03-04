import React from "react";
import "../Style/timeProject.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function TimeProject() {
    useEffect(()=>{
        AOS.init();

    },[])
  return (
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="row">
            <div class="col">
              <p className="title_proj" data-aos="fade-right" data-aos-duration="2000">Timely Project Execution</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <img
                src={require("../Image/features.png")}
                alt="timely project"
                className="img_proj"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 cont_proj">
          <div class="row"  data-aos="fade-right" data-aos-duration="2000">
            <div class="col-lg-2 col-md-2 col-sm-12">
              <p className="number">01.</p>{" "}
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12 pt-3">
              <p className="desc_proj">Organizing the plan and main plans
to start work</p>{" "}
            </div>
          </div>
          <div class="row"  data-aos="fade-right" data-aos-duration="2000">
            <div class="col-lg-2 col-md-2 col-sm-12">
              <p className="number">02.</p>{" "}
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12 pt-3">
              <p className="desc_proj">Comprehensive cost annotation research to reduce
costs to clients
</p>{" "}
            </div>
          </div>
          <div class="row"  data-aos="fade-right" data-aos-duration="2000">
            <div class="col-lg-2 col-md-2 col-sm-12">
              <p className="number">03.</p>{" "}
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12 pt-3">
              <p className="desc_proj">Employing experienced
engineers for the project
within well-thought-out plans
from consultants</p>{" "}
            </div>
          </div>
          <div class="row"  data-aos="fade-right" data-aos-duration="2000">
            <div class="col-lg-2 col-md-2 col-sm-12">
              <p className="number">04.</p>{" "}
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12 pt-3">
              <p className="desc_proj">Providing technical ideas and
solutions to implement
distinctive projects that
benefit customers
</p>{" "}
            </div>
          </div>
          <div class="row" >
            <div class="col-lg-2 col-md-2 col-sm-12" >
              <p className="number">05.</p>{" "}
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12 pt-3" >
              <p className="desc_proj">Application to achieve the
goals set by customers</p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeProject;
