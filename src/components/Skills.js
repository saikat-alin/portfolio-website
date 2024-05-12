import React from "react";
import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import javascript from "../assets/img/js.svg";
import react from "../assets/img/react.svg";
import next from "../assets/img/nextjs-icon.svg";
import node from "../assets/img/node.png";
import MongoDB from "../assets/img/mongodb.png";
import Redux from "../assets/img/redux.png";
import sass from "../assets/img/sass.svg";
import reactBootsrap from "../assets/img/reactBootstrap.svg";
import bootstrap from "../assets/img/bootstrap.png";
import git from "../assets/img/git.svg";
import gitHub from "../assets/img/gitHub.png";
import mui from "../assets/img/mui.png";
import bitBucket from "../assets/img/bitbucket.svg";
import typeScript from "../assets/img/typescript.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Experienced React developer proficient in crafting dynamic and 
                responsive user interfaces. <br/>Skilled in leveraging React's
                component-based architecture and state management to <br/> create
                seamless and efficient web applications. Adept at integrating
                APIs and ensuring <br/>optimal performance for enhanced user
                experiences.
              </p>

              <div className="row">
                <div className="col-md-3">
                  <div className="item">
                    <img src={html} alt="Image" />
                    <h6>HTML5</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={css} alt="Image" />
                    <h6>CSS3</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={javascript} alt="Image" />
                    <h6>JavaScript</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={typeScript} alt="Image" />
                    <h6>TypeScript</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={react} alt="Image" />
                    <h6>React Js</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={next} alt="Image" />
                    <h6>Next Js</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={node} alt="Image" />
                    <h6>Node Js</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={MongoDB} alt="Image" />
                    <h6>MongoDB</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={mui} alt="Image" />
                    <h6>Material UI</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={Redux} alt="Image" />
                    <h6>Redux Toolkit</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={sass} alt="Image" />
                    <h6>Sass</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={reactBootsrap} alt="Image" />
                    <h6>React Bootstrap</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={bootstrap} alt="Image" />
                    <h6>Bootstrap</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={git} alt="Image" />
                    <h6>Git</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img src={gitHub} alt="Image" />
                    <h6>GitHub</h6>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="item">
                    <img
                      src={bitBucket}
                      alt="Image"
                      style={{ width: "150px", height: "60px" }}
                    />
                    <h6>BitBucket</h6>
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
