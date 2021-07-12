import "./App.css";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Learn from "./component/Learn";
import Train from "./component/Train";
import Hicoder from "./component/Hicoder";
import Technology from "./component/Technology";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Help from "./component/Help";
import Review from "./component/Review";
import News from "./component/News";
import Contact from "./component/Contact";
import Scrollup from "./component/Scrollup";

import {
  faChevronDown,
  faChevronUp,
  faClock,
  faEnvelopeOpen,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import brand_1 from "./image/brand_1.png";
import brand_2 from "./image/brand_2.jpg";
import brand_3 from "./image/brand_3.jpg";
import brand_4 from "./image/brand_4.png";
function App() {
  return (
    <div className="App">
      {/* contact section */}

      <div className="first">
        <div className="info">
          <span>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </span>
          &nbsp;
          <span>admission@hicoder.in</span>
        </div>
        <div className="info">
          <span>
            <FontAwesomeIcon icon={faPhoneVolume} />
          </span>
          &nbsp;
          <span>(+91) 8956 859 652</span>
        </div>
        <div className="info">
          <span>
            <FontAwesomeIcon icon={faClock} />
          </span>
          &nbsp;
          <span>Mon - Fri 10:00am - 06:00pm</span>
        </div>
        <div className="info">
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
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </div>
      </div>

      {/* Navbar */}

      <Navbar />

      {/* About */}
      <About />
      {/* Learn  */}
      <Learn />
      {/* Training */}
      <Train />
      {/* Hicoder */}
      <Hicoder />
      {/* Help */}
      <Help />
      {/* technology */}

      <Technology />
      {/* Review  */}
      <Review />

      <div className="partners">
        <h1>Partners & Associates</h1>
        <div className="partDiv">
          <img src={brand_1} />
          <img src={brand_2} />
          <img src={brand_3} />
          <img src={brand_4} />
        </div>
      </div>

      {/* News */}
      <News />

      {/* Contact */}
      <Contact />

      {/* Scroll up icon */}
      
        <Scrollup />
       
    </div>
  );
}

export default App;
