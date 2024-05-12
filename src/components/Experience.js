import React from "react";
import colorSharp from "../assets/img/color-sharp.png";
import { ArrowRight } from "react-bootstrap-icons";
import techEureka from "../assets/img/tech-eureka.jpeg";
import ATI from "../assets/img//ati.png";
import reformx from "../assets/img/reformx.jpg";

export const Experience = () => {
  return (
    <section className="experience" id="experiences">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="experience-bx wow zoomIn">
              <h2 className="mb-5">Experience</h2>

              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="experience-item wow fadeIn">
                    <div>
                      <img
                        src={techEureka}
                        alt="Logo"
                        style={{
                          borderRadius: "10px",
                          height: "100px",
                          width: "100px",
                          marginBottom: "15px",
                        }}
                      />
                      <h3 className="company">Tech Eureka</h3>
                    </div>
                    <h4 className="job-title">Software Engineer</h4>
                    <h6 className="duration">July 2023 - Present</h6>
                    <h7 className="duration">Dhaka, Bangladesh</h7>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="experience-item wow fadeIn">
                    <img
                      src={ATI}
                      alt="Logo"
                      style={{
                        borderRadius: "10px",
                        height: "100px",
                        width: "130px",
                        marginBottom: "15px",
                      }}
                    />
                    <h3 className="company">ATI Limited</h3>
                    <h4 className="job-title">Jr.Frontend Developer</h4>
                    <h6 className="duration">March 2022 - June 2023</h6>
                    <h7 className="duration">Dhaka, Bangladesh</h7>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="experience-item wow fadeIn">
                    <img
                      src={reformx}
                      alt="Logo"
                      style={{
                        borderRadius: "10px",
                        height: "100px",
                        width: "100px",
                        marginBottom: "15px",
                      }}
                    />
                    <h3 className="company">Reformx Technologies</h3>
                    <h4 className="job-title">Trainee Frontend Developer</h4>
                    <h6 className="duration">August 2021 - January 2022</h6>
                    <h7 className="duration">Bangalore, India</h7>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
