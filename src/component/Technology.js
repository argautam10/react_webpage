import "../style/technology.css";
import Card from "react-bootstrap/Card";
import pic_11 from "../image/11.png";
import pic_22 from "../image/22.png";
import pic_33 from "../image/33.jpg";
import pic_44 from "../image/44.png";
import pic_55 from "../image/55.png";
import pic_66 from "../image/66.png";
import pic_77 from "../image/77.png";
import pic_88 from "../image/88.png";

const Technology = () => {
  const cardDetail = [
    {
      image: pic_11,
      title: "Front End",
      text: "Students learn to design, develope the UI following UX with industry standards.",
    },
    {
      image: pic_22,
      title: "Backend",
      text: "Students learn CS Architecture, CRUD, API, Authentication, Authorization, DB and etc.",
    },
    {
      image: pic_33,
      title: "Project Management",
      text: "Students learn to plan, project, and execute development projects with client expectation.",
    },
    {
      image: pic_44,
      title: "Production Deployment",
      text: "Students learn to create a server, deploy an application following security guidelines.",
    },
    {
      image: pic_55,
      title: "Basic Analytics",
      text: "Students learn about analytics, usability, and integration of analytics in their production application.",
    },
    {
      image: pic_66,
      title: "Soft Skills",
      text: "Soft skills encourages open communication & enhances corporate skills having corporate attitude.",
    },
    {
      image: pic_77,
      title: "Industry Standards",
      text: "Industry Trending technology, tools, and process adaption help students adapt to corporate with almost no effort.",
    },
    {
      image: pic_88,
      title: "Max Pro Resume",
      text: "Students get a unique HiCoder smart ID, Certificate, and an industry expert-guided self developed integrated resume.",
    },
  ];

  const showCards = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} className="techCard" key={index}>
        <Card.Img className="techImg" variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <div className="techContainer">
        <div className="techDiv_1">
          <p>WHAT YOU LEARN</p>
          <h1>at HiCoder is useful</h1>
          <h1>Technology, Management & more</h1>
        </div>
        <div className="techDiv_2">{cardDetail.map(showCards)}</div>
      </div>
    </>
  );
};

export default Technology;
