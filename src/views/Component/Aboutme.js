import React, { useState } from "react";

import {
  Button,
  Container,
  UncontrolledTooltip,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

function Aboutme() {

    const [workYear , setWorkYear] = useState();
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");

    const redirectToResume = () => {
      window.location.href = "https://drive.google.com/file/d/1wxdJjzDQCeyzWBFmeXrahmrwoMy3E7bL/view?usp=sharing"
    }

    const redirectToCV = () => {
      window.location.href = "https://drive.google.com/file/d/1aPgi6lnPmWSbPfnJubBga2RoqrMB82z8/view?usp=sharing"
    }

    const redirectToFacebook = () => {
        window.location.href = "https://www.facebook.com/blinkzrpn"
      }
      
      const redirectToLinkedin = () => {
        window.location.href = "https://www.linkedin.com/in/theerapon-rattapantanon-595a86167/"
      }
    
      const redirectToGithub = () => {
        window.location.href = "https://github.com/blinkz333"
      }

  const calculateYear = () => {
    const date = new Date();
    const nowYear = date.getFullYear();
    setWorkYear(nowYear-2017);

  }

  React.useEffect(() => {
    document.body.classList.add("profile-page");
    calculateYear();
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });


    return (
        <>
        {/* ========== Follow btn & About Me ========== */}
        <div className="section">
<Container>
  <div className="button-container">
    <Button className="btn-round" color="info" size="lg"  onClick={() => redirectToResume()}>
      Download Resume
    </Button>
    <Button className="btn-round" color="info" size="lg"  onClick={() => redirectToCV()}>
      Download CV
    </Button>
    <Button
      className="btn-round btn-icon"
      color="default"
      id="tooltip515203354"
      size="lg"
      onClick={() => redirectToLinkedin()}
    >
      <i className="fab fa-linkedin"></i>
    </Button>
    <UncontrolledTooltip delay={0} target="tooltip515203352">
      Follow me on Linkedin
    </UncontrolledTooltip>
    <Button
      className="btn-round btn-icon"
      color="default"
      id="tooltip515203352"
      size="lg"
      onClick={() => redirectToFacebook()}
    >
      <i className="fab fa-facebook"></i>
    </Button>
    <UncontrolledTooltip delay={0} target="tooltip515203352">
      Follow me on Facebook
    </UncontrolledTooltip>
    <Button
      className="btn-round btn-icon"
      color="default"
      id="tooltip515203353"
      size="lg"
      onClick={() => redirectToGithub()}
    >
      <i className="fab fa-github"></i>
    </Button>
    <UncontrolledTooltip delay={0} target="tooltip515203353">
    Follow me on Github
    </UncontrolledTooltip>
  </div>
  <h3 className="title">About me</h3>
  <h5 className="description">
   Hi.My name is Theerapon Rattapantanon.I have been working for {workYear} years now. 
   I am currently working as a frontend developer at Thairath.My work about Web Application and Mobile Application
  </h5>
</Container>
</div>
        {/* ========== Contact & Address ========== */}
        <div className="section section-tabs">
        <Container>
          <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className="active"
                      >
                        Contact
                      </NavLink>
                    </NavItem>
                   </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab="contact"
                  >
                    <TabPane tabId="contact">
                      <p>
                      Email : threerapon.rat@cpc.ac.th <br/>
                      Phone : (66) 83-994-3436
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink className="active">
                        Address
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab="address"
                  >
                    <TabPane tabId="address">
                      <p>
                      92/92 -1 (1508) VV home , Prachasongkroh 23 , Din Dang , Bangkok , 10400
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink className="active">
                        Skill
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab="skill"
                  >
                    <TabPane tabId="skill">
                      <p>
                      Javascript , Html5 , Css3 , Bootstrap Framwork , React Native , React , Next.js
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink className="active">
                        Hobby
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab="hobby"
                  >
                    <TabPane tabId="hobby">
                      <p>
                      Football , Dota 2 <br/>
                      Fps Game , Manga
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* ========== Experience ========== */}
        <div className="section">
<Container>
  <h3 className="title">Work Experience</h3>
  <h5 className="description">
      <h4>RS PUBLIC COMPANY LIMITED,PROGRAMMER<br/> October 2017 - September 2018</h4>
      <p>• IBM Lotusnote Application.</p>
      <p>• Maintenance intranet website in company.</p>
      <p>• Make ingredient in website (Qouta Spot , Spot Chart).</p>
  </h5>
  <h5 className="description">
      <h4>ICONEXT CO., LTD.<br/> October 2018 - December 2018</h4>
      <p>• Meeting Client and making Mockup. </p>
      <p>• Make All Screen In Project.</p>
  </h5>
  <h5 className="description">
      <h4>J.S TECHNICAL SERVICES CO. LTD (ITONE CONSULTANT)<br/> December 2018 - August 2019</h4>
      <p>• Make screen from client requirement.</p>
      <p>• Connect API from ABAP Backend with JSON API. </p>
      <p>• Make create, update, delete function prepare for send data to Backend (SAP).</p>
  </h5>
  <h5 className="description">
      <h4>Trend Vg3 Co., Ltd <br/> September 2019 - Present</h4>
      <p>• Event Web Application.</p>
      <p>• My Thairath Application.</p>
  </h5>
</Container>
</div>
      </div>
        </>
    );
}

export default Aboutme;
