import "../style/about.css";
import headImage from "../image/pic_1.jpg";
// import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";
const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <img src={headImage} />
        <div className="para">
          <p>YOUR TIME, OUT EFFORTS</p>
          <h1>Pay After Job Full Stack Development Course</h1>
          <button variant="primary">KNOW MORE</button>
        </div>
        <div className="aboutFooter">
          <h2>
            NEXT BATCH: 27 July | <span>Apply Now</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default About;
