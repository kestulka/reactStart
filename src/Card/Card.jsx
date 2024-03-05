import profilePic from "../assets/profile-pic.jpg";
import styles from "./Card.module.css";

function Card() {
  const { card, cardImage, cardTitle, cardText } = styles;
  return (
    <div className={card}>
      <img className={cardImage} src={profilePic} alt="profile pic" />
      <h2 className={cardTitle}> kestulka</h2>
      <p className={cardText}> as esu sigma vyras</p>
    </div>
  );
}
export default Card;
