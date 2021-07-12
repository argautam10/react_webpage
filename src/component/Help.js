import "../style/help.css";
import pic_5 from "../image/pic_5.jpg";

const Help = () => {
  return (
    <>
      <div className="helpContainer">
        <div className="helpDiv_1">
          <img src={pic_5} />
        </div>
        <div className="helpDiv_2">
          <h1>How does HiCoder help?</h1>
        <p>
          HiCoder resembeles software development and marketing altogether to
          develop applications that can be used by real user than keeping on
          Github.
        </p>
        <p>
          HiCoder understands the struggle, peer pressure an engineering student
          goes into throughout curriculum. We believe, Most engineering students
          who can be part of the core software industry end up having a tech
          support or customer care job just because college never taught
          trending technology, project Management or encouraged students to
          their own projects.
        </p>
        <button>KNOW MORE</button>
        </div>
      </div>
    </>
  );
};

export default Help;
