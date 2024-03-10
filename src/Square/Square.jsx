import styles from "./Square.module.css";
import getRandomInt from "../Functions/randomInt.js";
import getRandomColor from "../Functions/randomColor.js";

function Square() {
  const color = getRandomColor();
  const randomNum = getRandomInt(10, 20);
  return (
    <div className={styles.square} style={{ backgroundColor: color }}>
      {randomNum}
    </div> // vienas stilius yra is modulio, kitas inline
  );
}

export default Square;
