import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/tms-1.png";
import projImg2 from "../assets/img/tms-2.png";
import projImg3 from "../assets/img/tms-3.png";
import projImg4 from "../assets/img/tms-4.png";
import projImg5 from "../assets/img/tms-5.png";
import projImg6 from "../assets/img/tms-6.png";
import projImg7 from "../assets/img/tms-7.png";
import projImg8 from "../assets/img/tms-8.png";
import projImg9 from "../assets/img/tms-9.png";
import accProjImg1 from "../assets/img/acc-1.png";
import accProjImg2 from "../assets/img/acc-2.png";
import accProjImg3 from "../assets/img/acc-3.png";
import accProjImg4 from "../assets/img/acc-4.png";
import accProjImg5 from "../assets/img/acc-5.png";
import accProjImg6 from "../assets/img/acc-6.png";
import accProjImg7 from "../assets/img/acc-7.png";
import accProjImg8 from "../assets/img/acc-8.png";
import accProjImg9 from "../assets/img/acc-9.png";
import misProjImg1 from "../assets/img/mis-1.png";
import misProjImg2 from "../assets/img/mis-2.png";
import misProjImg3 from "../assets/img/mis-3.png";
import misProjImg4 from "../assets/img/mis-4.png";
import misProjImg5 from "../assets/img/mis-5.png";
import misProjImg6 from "../assets/img/mis-6.png";
import misProjImg7 from "../assets/img/mis-7.png";
import misProjImg8 from "../assets/img/mis-8.png";
import misProjImg9 from "../assets/img/mis-9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const training = [
    {
      title: "Training Management System",
      description: "Login",
      imgUrl: projImg1,
    },
    {
      title: "Training Management System",
      description: "Register",
      imgUrl: projImg2,
    },
    {
      title: "Training Management System",
      description: "Dashboard",
      imgUrl: projImg3,
    },
    {
      title: "Training Management System",
      description: "Course",
      imgUrl: projImg4,
    },
    {
      title: "Training Management System",
      description: "Survey",
      imgUrl: projImg5,
    },
    {
      title: "Training Management System",
      description: "Results",
      imgUrl: projImg6,
    },
    {
      title: "Training Management System",
      description: "Certificate List",
      imgUrl: projImg7,
    },
    {
      title: "Training Management System",
      description: "Certificate",
      imgUrl: projImg8,
    },
    {
      title: "Training Management System",
      description: "Setting",
      imgUrl: projImg9,
    },
  ];

  const accounts = [
    {
      title: "Financial Accounts System",
      description: "Login",
      imgUrl: accProjImg1,
    },
    {
      title: "Financial Accounts System",
      description: "Voucher Entry",
      imgUrl: accProjImg2,
    },
    {
      title: "Financial Accounts System",
      description: "Voucher Information",
      imgUrl: accProjImg3,
    },
    {
      title: "Financial Accounts System",
      description: "Verify Voucher",
      imgUrl: accProjImg4,
    },
    {
      title: "Financial Accounts System",
      description: "General Ledger",
      imgUrl: accProjImg5,
    },
    {
      title: "Financial Accounts System",
      description: "Cash flow Report",
      imgUrl: accProjImg6,
    },
    {
      title: "Financial Accounts System",
      description: "Chart of Account",
      imgUrl: accProjImg7,
    },
    {
      title: "Financial Accounts System",
      description: "Voucher Type",
      imgUrl: accProjImg8,
    },
    {
      title: "Financial Accounts System",
      description: "Fiscal Year",
      imgUrl: accProjImg9,
    },
  ];

  const tender = [
    {
      title: "Management Information System",
      description: "Login",
      imgUrl: misProjImg1,
    },
    {
      title: "Management Information System",
      description: "Dashboard",
      imgUrl: misProjImg2,
    },
    {
      title: "Management Information System",
      description: "Add Tender",
      imgUrl: misProjImg3,
    },
    {
      title: "Management Information System",
      description: "All Tender",
      imgUrl: misProjImg4,
    },
    {
      title: "Management Information System",
      description: "Accepted Tender",
      imgUrl: misProjImg5,
    },
    {
      title: "Management Information System",
      description: "Tender Status",
      imgUrl: misProjImg6,
    },
    {
      title: "Management Information System",
      description: "Clint List",
      imgUrl: misProjImg7,
    },
    {
      title: "Management Information System",
      description: "Team List",
      imgUrl: misProjImg8,
    },
    {
      title: "Management Information System",
      description: "Verify User",
      imgUrl: misProjImg9,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Developed impactful React projects showcasing expertise in
                    building modular and scalable components. Implemented state
                    management for seamless user interactions and integrated
                    RESTful APIs for dynamic content. Utilized responsive design
                    principles, ensuring optimal user experiences across
                    devices. Collaborated with cross-functional teams to deliver
                    high-quality, innovative solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Training Management System
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Financial Accounts System
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Management Info System
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {training.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {accounts.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {tender.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
