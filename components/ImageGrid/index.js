import styles from "../../styles/Home.module.scss";
import Card from "../Card";
import { cardData } from "../../data";
import Ratings from "../CustomIcons/Ratings";

const ImageGrid = () => {
  return (
    <div className={styles.cardGrid}>
      {cardData.map((card, index) => {
        return (
          <div key={index} className={styles.card}>
            <Card imageArray={card.images} />
            <div className={styles.details}>
              <div className={styles.location}>
                <div>{card.location}</div>
                <div>
                  <Ratings />
                  <span className={styles.rating}>{card.rating}</span>
                </div>
              </div>
              <div className={styles.owner}>{card.host}</div>
              <div className={styles.date}>{card.available}</div>
              <div className={styles.price}>
                <span>${card.price}</span> night
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
