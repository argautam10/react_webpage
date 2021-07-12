import "../style/contact.css";
import brandLogo from "../image/main.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhoneAlt,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="contactDiv"></div>

      <div className="conContainer">
        <div className="conDiv_1">
          <div className="conOne">
            <img src={brandLogo} />
            <p>
              HiCoder enables students in being capable to develop production
              grade application by availing full stack development, Soft skills,
              Analytics and project management skills to get a core software job
              in the Industry.
            </p>
            <button>APPLY NOW</button>
          </div>
          <div className="conTwo">
            <h2>Info</h2>
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="conThree">
            <h2>Contact</h2>
            <p>
              <span>
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </span>
              264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana,
              India, PIN: 500033
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              (+91) 9206 980 980
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              admission@hicoder.in
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faUserClock} />
              </span>
              10:00AM - 06:00PM
            </p>
          </div>
        </div>
        <div className="conDiv_2">
          <div className="conFour">
            <p>© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved.</p>
            <p>
              <span>
                <a href="#">Privacy Policy</a> &nbsp;|&nbsp;
                <a href="#">Terms of Service</a> &nbsp;|&nbsp;
              </span>
              * Registration Charges Applied
            </p>
          </div>
          <div className="conFive">
            <span>
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </span>
            <span>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
