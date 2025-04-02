import { Link } from "react-router-dom";
import "./card.scss";
import pinIcon from "../../assets/pin.png";
import bedIcon from "../../assets/bed.png";
import bathIcon from "../../assets/bath.png";
import saveIcon from "../../assets/save.png";
import chatIcon from "../../assets/chat.png";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src={pinIcon} alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src={bedIcon} alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src={bathIcon} alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src={saveIcon} alt="" />
            </div>
            <div className="icon">
              <img src={chatIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;