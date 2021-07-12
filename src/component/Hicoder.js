import pic_4 from "../image/pic_4.jpg";
import sticker_5 from "../image/sticker_5.png";
import sticker_6 from "../image/sticker_6.png";
import "../style/hicoder.css";



const Hicoder = () => {
  return (
    <>
      <div className="hicoderContainer">
        <div className="Div_1">
          <div className="mindiv_1">
            <h1>Why HiCoder?</h1>
            <p>
              HiCoder enables students to think about real-world problems,
              design, and develop the right solution.
              <span>
                <a href="#"> know more</a>
              </span>
            </p>
          </div>
          <div className="mindiv_2">
            <div>
              <img src={sticker_5} />
            </div>
            <div>
              <h2>Personalized Training</h2>
              <p>
                We understand the weakness of students coming from poor
                educational backgrounds. HiCoder avails resources and extra
                after-class support to match the criteria and keep up with tech.
              </p>
            </div>
          </div>
          <div className="mindiv_3">
            <div>
              <img src={sticker_6} />
            </div>
            <div>
              <h3>Production Projects</h3>
              <p>
                Every student ends up making around 3 projects that are
                wholesome, cloud-hosted and can be used for a commercial
                purpose.
              </p>
            </div>
          </div>
        </div>
        <div className="Div_2">
          <img src={pic_4} />
        </div>
      </div>
    </>
  );
};
export default Hicoder;
