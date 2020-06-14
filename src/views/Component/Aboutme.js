import React, { useState , useRef , useEffect } from "react";

import {
  Button,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import { useSpring, animated } from 'react-spring';
import ReactParticles from 'react-particles-js';
import particlesConfig from '../../assets/js/particles-config';

import './styles.scss';

import Typist from 'react-typist';



function Aboutme() {

    const [workYear , setWorkYear] = useState();
   
    useEffect(() => {
      document.body.classList.add("profile-page");
      // calculateYear();
      return function cleanup() {
        document.body.classList.remove("profile-page");
      };
    });

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

    // const calculateYear = () => {
    // const date = new Date();
    // const nowYear = date.getFullYear();
    // setWorkYear(nowYear-2017);

    // }

    const CardTest = ({ children }) => {
      // We add this ref to card element and use in onMouseMove event ...
      // ... to get element's offset and dimensions.
      const ref = useRef();
    
      // Keep track of whether card is hovered so we can increment ...
      // ... zIndex to ensure it shows up above other cards when animation causes overlap.
      const [isHovered, setHovered] = useState(false);
    
      const [animatedProps, setAnimatedProps] = useSpring(() => {
        return {
          // Array containing [rotateX, rotateY, and scale] values.
          // We store under a single key (xys) instead of separate keys ...
          // ... so that we can use animatedProps.xys.interpolate() to ...
          // ... easily generate the css transform value below.
          xys: [0, 0, 1],
          // Setup physics
          config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
        };
      });
    
      return (
        <animated.div
          ref={ref}
          className="card"
          onMouseEnter={() => setHovered(true)}
          onMouseMove={({ clientX, clientY }) => {
            // Get mouse x position within card
            const x =
              clientX -
              (ref.current.offsetLeft -
                (window.scrollX || window.pageXOffset || document.body.scrollLeft));
    
            // Get mouse y position within card
            const y =
              clientY -
              (ref.current.offsetTop -
                (window.scrollY || window.pageYOffset || document.body.scrollTop));
    
            // Set animated values based on mouse position and card dimensions
            const dampen = 50; // Lower the number the less rotation
            const xys = [
              -(y - ref.current.clientHeight / 2) / dampen, // rotateX
              (x - ref.current.clientWidth / 2) / dampen, // rotateY
              1.07 // Scale
            ];
    
            // Update values to animate to
            setAnimatedProps({ xys: xys });
          }}
          onMouseLeave={() => {
            setHovered(false);
            // Set xys back to original
            setAnimatedProps({ xys: [0, 0, 1] });
          }}
          style={{
            // If hovered we want it to overlap other cards when it scales up
            zIndex: isHovered ? 2 : 1,
            // Interpolate function to handle css changes
            transform: animatedProps.xys.interpolate(
              (x, y, s) =>
                `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
            )
          }}
        >
          {children}
        </animated.div>
      );
    }
    
    const Particles = ({ children })  => {
      return (
        <div style={{ position: 'relative' }}>
          <ReactParticles
            params={particlesConfig}
            style={{
              position: 'absolute',
              zIndex: 1,
              left: 0,
              right: 0,
              bottom: 0,
              top: 0
            }}
          />
          {children && <div style={{ position: 'relative' }}>{children}</div>}
        </div>
      );
    }
    
    const Hero = ({ children }) => {
      return (
        <div className="hero">
          <div className="hero-body">{children}</div>
        </div>
      );
    }
    
    const cards = [
      {
        title: 'Contact 📇',
        description:
          'Email : threerapon.rat@cpc.ac.th Phone : (66) 83-994-3436',
        image: '',
        imageRatio: 784 / 1016
      },
      {
        title: 'Address 🏠',
        description:
          ' 92/92 -1 (1508) VV home , Prachasongkroh 23 , Din Dang , Bangkok , 10400',
        image: '',
        imageRatio: 839 / 1133
      },
      {
        title: 'Hobby 🚀',
        description:
          "Football , Dota 2 ,Fps Game , Manga",
        image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
        imageRatio: 730 / 1030
      },
      {
        title: 'Skills 🤹🏿',
        description:
          "Javascript , Html5 , Css3 , Bootstrap Framwork , React Native , React , Next.js",
        image: 'https://6jlvz1j5q3.csb.app/undraw_static_assets.svg',
        imageRatio: 730 / 1030
      }
    ];

 
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
  <Typist>
  <h3 className="title">About me</h3>
  <h5 className="description">
   Hi.My name is Theerapon Rattapantanon.I have been working for 3 years now. 
   I am currently working as a frontend developer at Thairath.My work about Web Application and Mobile Application
  </h5>
  </Typist>
</Container>
</div>
        {/* ========== Contact & Address & Skill ========== */}
        <div className="main">
      <Particles>
        <Hero>
          <div className="container">
            <div className="row">
              {cards.map((card, i) => (
                <div className="column">
                  <CardTest>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">{card.description}</div>
                  </CardTest>
                </div>
              ))}
            </div>
          </div>
        </Hero>
      </Particles>
    </div>
        {/* ========== Experience ========== */}
        <div className="section">
        <Container>
        <h3 className="title">Work Experience</h3>
  <h5 className="description">
  <h5>RS PUBLIC CO., LTD.<br/> October 2017 - September 2018</h5>
      <p>• IBM Lotusnote Application.</p>
      <p>• Maintenance intranet website in company.</p>
      <p>• Make ingredient in website (Quota Spot , Spot Chart).</p>
  </h5>
 
     
      
  <h5 className="description">
      <h5>ICONEXT CO., LTD.<br/> October 2018 - December 2018</h5>
      <p>• Meeting Client and making Mockup. </p>
      <p>• Make All Screen In Project.</p>
  </h5>
  <h5 className="description">
      <h5>J.S TECHNICAL SERVICES CO. LTD (ITONE CONSULTANT)<br/> December 2018 - August 2019</h5>
      <p>• Make screen from client requirement.</p>
      <p>• Connect API from ABAP Backend with JSON API. </p>
      <p>• Make create, update, delete function prepare for send data to Backend (SAP).</p>
  </h5>
  <h5 className="description">
      <h5>Trend Vg3 CO., LTD <br/> September 2019 - Present</h5>
      <p>• Event Web Application.</p>
      <p>• My Thairath Application.</p>
  </h5>
</Container>
        </div>
        {/* ========== Test Section ========== */}
      </>
    );
}


export default Aboutme;
