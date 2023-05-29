import { Col, Row } from "react-bootstrap";
import LiveTitle from "../components/LiveTitle";
import image from "../resources/bea.png";
import "./About.css";
import "../components/Layout.css";
import skill1 from "../resources/Id.png";
import skill2 from "../resources/Ai.png";
import skill3 from "../resources/XD.png";
import skill4 from "../resources/Ae.png";
import skill5 from "../resources/Ps.png";

import SkillCarousel from "../components/SkillCarousel";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

function About() {
  const images = [skill1, skill2, skill3, skill4, skill5];
  const captions = [
    "Adobe InDesign",
    "Adobe Illustrator",
    "Adobe XD",
    "Adobe After Effects",
    "Adobe Photoshop",
  ];
  return (
    <>
      <Row>
        <Col className="inline-image">
          <img id="profile-image" src={image} alt="" />
        </Col>
      </Row>
      <Row>
        <Col>
          <LiveTitle text="Hi, my name is Beatrice and I am a graphic designer and illustrator."></LiveTitle>
        </Col>
      </Row>
      <Row className="mt-5 pt-5 text-light fs-5 text-center">
        <Col>
          <p>
            Whether you're looking for a one-of-a-kind piece of art or seeking
            to elevate your brand's image, I am committed to bringing your
            vision to life.
          </p>
        </Col>
      </Row>
      <div className="shadow margin-top bg-dark text-light p-5 fs-6">
        <Row className="text-align-equal">
          <Col>
            <p>
              I've always been passionate about drawing and the work that I do
              allows me to pursue that passion while sharing my talents with
              others. I create unique and personalized designs that accomodate
              to the specific needs and desires of my clients. From custom
              illustrations to branding and logo design, I approach each project
              with a keen eye for detail and a dedication to delivering
              high-quality work. <br /> The values that guide me are: honesty,
              creativity, communication, flexibility and humility.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="3">
            <p className="fw-bold pt-3"> &emsp;Skills:</p>
            <ul className="ul-no-bullets">
              <li>illustrations</li>
              <li>corporate design</li>
              <li>editorial</li>
              <li>printing</li>
              <li>typography</li>
              <li>photography</li>
            </ul>
          </Col>
          <Col className="p-0">
            <section className="skill-bx skill-carousel" id="skills">
              <div className="fw-bold text-black">Software Skills</div>
              <SkillCarousel images={images} captions={captions} />
            </section>
          </Col>
        </Row>
        <Row>
          <Col md="12" className="text-center p-1">
            <p className="fw-bold pt-2"> Education:</p>
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="success" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className="timeline-content">
                    <SchoolIcon></SchoolIcon>
                    <b> Die Graphische Wien </b> 2020 - 2022 <br /> - graphic
                    and communicational design skills illustration corporate
                    design editorial printing typography photography
                  </Paper>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className="timeline-content">
                    <SchoolIcon></SchoolIcon>
                    <b>Theresianum Eisenstadt </b> 2013 - 2018 <br /> - higher
                    secondary school for economic professions
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default About;
