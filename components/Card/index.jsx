import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import { useState } from "react";
import Like from "../CustomIcons/Like";

const Card = ({ imageArray }) => {
    const [isLiked, setIsLiked] = useState(false)
    const setLike = () => {
      setIsLiked(!isLiked)
    }
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay={false}
        showStatus={false}
        infiniteLoop={true}
        showThumbs={false}
      >
        {imageArray.map((item, index) => {
          return (
              <div key={index} className={styles.image_container} style={{width: '100%', height: '100%', position: 'relative'}}>
                <Image
                  src={item}
                  layout="fill"
                  objectFit="contain"
                  // width={279.3}
                  // height={265.23}
                  alt=""
                  className={styles.image}
                />
                 <button onClick={() => setLike()} className={`${styles.like} ${isLiked ? "liked" : ""}`}><Like /></button> 
              </div>
                     )
        })}
      </Carousel>
    </div>
  );
};

export default Card;
