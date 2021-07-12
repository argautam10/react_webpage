import "../style/news.css";
import pic_7 from "../image/pic_7.jpg";
import pic_8 from "../image/pic_8.jpg";
import pic_9 from "../image/pic_9.jpg";
import pic_10 from "../image/pic_10.jpg";
import brandLogo from "../image/main.png";

import HorizontalScroll from "react-scroll-horizontal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const News = () => {
  const newsCard = [
    {
      img: pic_7,
      para: "Students having real time experience are less likey to have career gap.",
      logo: brandLogo,
      date: "June 20, 2021",
    },
    {
      img: pic_8,
      para: "College education isn’t enough to be relevant for the tech Industry.",
      logo: brandLogo,
      date: "June 20, 2021",
    },
    {
      img: pic_9,
      para: "IT project demand increases by 127% as offline businesses shut down",
      logo: brandLogo,
      date: "June 20, 2021 ",
    },
  ];

  const showCard = (card, index) => {
    return (
      <div className="newsMain bg" key={index}>
        <img src={card.img} />
        <div className="newsMainDiv">
          <h2>{card.para}</h2>

          <div className="newsDetail">
            <img src={card.logo} />
            <p>
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              {card.date}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="newsContainer">
        <div className="newsDiv_1">
          <p>NEWS</p>
          <h1>#COVID19 Demands more full stack developers.</h1>
          <h1>& Industry Updates</h1>
        </div>

        <div className="newsDiv_2">{newsCard.map(showCard)}</div>
      </div>
    </>
  );
};

export default News;
