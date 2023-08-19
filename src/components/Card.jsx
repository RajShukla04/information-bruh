import "./card.css";
import posterImage from "../assets/lightyagami.jpg";
import About from "./About";
import TechIKnow from "./TechIKnow";
import Socialconnection from "./Socialconnection";
const Card = () => {
  return (
    <div className="Card-parent">
      <div className="start-card">
        <div className="image-poster">
          <img src={posterImage} alt="" />
          <h1 className="text">| WEB DEVELOPER |</h1>
        </div>
        <div className="about-card">
          <About />
        </div>
        <div className="tech-i-know">
          <TechIKnow />
        </div>
        {/* <div className="social-sonnection">
          <Socialconnection />
        </div> */}
      </div>
    </div>
  );
};

export default Card;
