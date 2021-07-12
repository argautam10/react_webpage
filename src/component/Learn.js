import pic_2 from "../image/pic_2.jpg";
import "../style/learn.css";
const Learn = () => {
  return (
    <>
      <div className="learnContainer">
        <div className="learnImg">
          <img src={pic_2} />
        </div>

        <div className="learnPara">
          <p>HICODER</p>
          <h1>We help students learn <span>Full Stack Development.</span></h1>
          <p>
            HiCoder does everything that helps students become successful in the
            software industry. From product thinking to product designing,
            system designing, choosing the right frameworks, breaking projects
            in stages to building teams, and working collaboratively to making
            the application comply with the latest Google SEO needs and
            knowledge about integrated analytics, we do everything in between.
          </p>
        </div>
      </div>
    </>
  );
};
export default Learn;
