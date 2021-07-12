import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic_3 from "../image/pic_3.jpg";
import sticker_1 from "../image/sticker_1.png";
import sticker_2 from "../image/sticker_2.png";
import sticker_3 from "../image/sticker_3.png";
import sticker_4 from "../image/sticker_4.png";
import "../style/train.css";
// import Card from "react-bootstrap/Card";

const Train = () => {
  return (
    <>
      <div className="mainTrain">
        <div className="trainContainer">
          <div className="div_1">
            <h1>Trained on the most in-demand Technology Skills</h1>
            <p>
              At the end of the course, every student becomes capable to develop
              their own create a web application, host on their own domain,
              enable advanced technologies and observe people's actions on their
              website and represent themselves as a HiCoder that matters.
            </p>
            <h4>
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              End to End Project Analysis, Design & Development
            </h4>
            <h4>
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              Authentication, Geo Tracking, Payment Gateway
            </h4>
            <h4>
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              Analytics, SEO, Data Representation, Industry Standards
            </h4>
            <h4>
              <span>
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              Max Pro Resume, Soft Skills, Client Expectation Management
            </h4>

            <button>APPLY NOW</button>
          </div>
          <div className="div_2">
            <img src={pic_3} />
          </div>
        </div>

        {/* train footer */}
        <div className="trainFooter ">
          <div>
            <img src={sticker_1} />
            <h1>34 +</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <div>
          <img src={sticker_2} />
            <h1>47 +</h1>
            <p>INDUSTRY EXPERTS</p>
          </div>
          <div>
          <img src={sticker_3} />
            <h1>30 +</h1>
            <p>QUALITY DEVELOPERS</p>
          </div>
          <div>
          <img src={sticker_4} />
            <h1>40,000,00 +</h1>
            <p>APPLICATION USERS</p>
          </div>
        </div>
        </div>
    
    </>
  );
};
export default Train;
