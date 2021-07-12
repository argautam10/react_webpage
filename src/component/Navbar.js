import React, { useState } from "react";
import "../style/navStyle.css";
import companyLogo from "../../src/image/main.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeOpen,
  faPhoneAlt,
  faStreetView,
  faClock,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [navShow, setnavShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
 
  return (
    <>
      <nav>
        <div className="nav container">
          {/* Hicoder logo */}
          <div className="logo">
            <a href="#">
              <img src={companyLogo} />
            </a>
          </div>

          <div className="navigation">
            <button onClick={() => setnavShow(!navShow)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            {navShow ? (
              <div className="navDiv">
                <ul className="navLink">
                 
                      <li className="opt_1" onClick={()=>setShow1(!show1)}>
                    HICODER
                    {
                        show1?
                        <ul className="navLink_1 firstLink">
                      <li>About</li>
                      <li>Contact</li>
                      <li>Blog</li>
                    </ul>:null
                    }
                  </li>
                    
                  <li className="opt_1" onClick={()=>setShow2(!show2)}>
                    COURSE
                    {
                     show2?
                    <ul className="navLink_2 firstLink">
                      <li>What You Learn?</li>
                      <li>How To Apply?</li>
                      <li>Fee Structureq</li>
                      <li>Apply</li>
                    </ul>:null
                    }
                  </li>
                  <li className="opt_1" onClick={()=>setShow3(!show3)}>Hire 
                  {
                      show3?
                      <ul className="navLink_3 firstLink">
                          <li>Hire</li>
                      </ul>:null
                  }
                  </li>
                </ul>
              </div>
            ) : null}
          </div>

          {/* navigation for big screen */}
          <div className="navItem">
            <div className="link_1 linked">
              <p>
                HICODER <span></span>
              </p>
              <ul className="list_1">
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="link_2 linked">
              <p>
                COURSE <span></span>
              </p>
              <ul className="list_1">
                <li>What You Learn?</li>
                <li>How To Apply?</li>
                <li>Fee Structure</li>
                <li>Apply</li>
              </ul>
            </div>
            <div className="link_3 linked">
              <p>
                HIRE <span></span>
              </p>
              <ul className="list_1">
                <li>Hire</li>
              </ul>
            </div>
            <div className="link_4">
              <button>APPLY NOW</button>
            </div>
            <div className="link_5">
              <button className="h2" onClick={() => setShow(!show)}>
                <FontAwesomeIcon icon={faWindows} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {show == true ? (
        <div className="hamburger">
          <div className="hamLogo">
            <button className="h2" onClick={() => setShow(!show)}>
              <FontAwesomeIcon icon={faWindows} />
            </button>
          </div>
          <div className="hamMainLogo same">
            <img src={companyLogo} />
          </div>
          <div className="hamInfo same">
            <p>
              HiCoder enables students in being capable to develop production
              grade application by availing full stack development, Soft skills,
              Analytics and project management skills to get a core software job
              in the Industry.
            </p>
          </div>
          <div className="hamLoc same">
            <h2>
              <span>
                <FontAwesomeIcon icon={faStreetView} />
              </span>
              264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana,
              India, PIN: 500033
            </h2>
            <h2>
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              (+91) 9206 980 980
            </h2>
            <h2>
              <span>
                <FontAwesomeIcon icon={faEnvelopeOpen} />
              </span>
              admission@hicoder.in
            </h2>
            <h2>
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              10:00AM - 06:00PM
            </h2>
          </div>
          <div className="hamIcon same">
            <span>
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span>
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            <span>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
