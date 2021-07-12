import "../style/review.css";
import Carousel from "react-bootstrap/Carousel";
// import { useState } from "react";
import pic_6 from "../image/pic_6.jpg";
import face_1 from "../image/face_1.jpg";
import face_2 from "../image/face_2.jpg";
import face_3 from "../image/face_3.jpg";
import face_4 from "../image/face_4.jpg";

const Review = () => {
  return (
    <>
      <div className="revContainer">
        <p>THOUGHTS ON HICODER SYLLABUS</p>
        <h1>Reviews by Industry Experts</h1>

        <div className="revDiv">
          <div className="revDiv_1">
            <img src={pic_6} />
          </div>
          <div className="revDiv_2">
            <Carousel className="revCarousel">
              <Carousel.Item Interval={500} className="revItem">
                <p>
                  This is a great opportunity for students coming from tier 2
                  tier 3 engineering colleges. HiCoder's syllabus looks
                  wholesome as student will have opportunity to do both frontend
                  as well as backend. Happy to see that IT Industry will have a
                  wave of qualilty engineers.
                </p>
                <img
                  className="d-block  revImg_1"
                  src={face_1}
                  alt="First slide"
                />
                <Carousel.Caption className="revText">
                  <h3>Minakshi Rai</h3>
                  <h4>Software Engineer, Bosch</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item Interval={500} className="revItem">
                <p>
                  HiCoder is encouraging students to learn engineering. Having
                  production grade development experience on project will reduce
                  onboarding burden on candidates as well as project leads.
                </p>
                <img
                  className="d-block revImg_1"
                  src={face_2}
                  alt="Second slide"
                />

                <Carousel.Caption className="revText">
                  <h3>Ashish Adhikari</h3>
                  <h4>UI/UX, Micro Focus</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item Interval={500} className="revItem">
                <p>
                  HiCoder is doing a good job by offering production grade
                  learning. This will enable students to code whole application
                  where students will end up on tech lead position in a few
                  years.
                </p>
                <img
                  className="d-block revImg_1"
                  src={face_3}
                  alt="Third slide"
                />

                <Carousel.Caption className="revText"> 
                  <h3>Sandeep Maheshwari</h3>
                  <h4>Business Analytic</h4>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item Interval={500} className="revItem">
                <p>
                  HiCoder didn't exist 15 years ago when I was preparing for
                  software engineering career. In 2002, I had to pay hefty to
                  get basic technical training. 
                </p>
                <img
                  className="d-block revImg_1"
                  src={face_4}
                  alt="Third slide"
                />

                <Carousel.Caption className="revText">
                  <h3>Harman Vigilante</h3>
                  <h4>Team Lead, Schlumberger</h4>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
export default Review;
