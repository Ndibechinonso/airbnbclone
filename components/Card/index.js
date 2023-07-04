import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import { useState } from "react";
import Like from "../CustomIcons/Like";
import LeftIcon from "../CustomIcons/LeftIcon";
import RightIcon from "../CustomIcons/RightIcon";

const Card = ({ imageArray }) => {
  const [isLiked, setIsLiked] = useState(false);
  const setLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay={false}
        axis="horizontal"
        className={`${styles.carousel}`}
        showStatus={false}
        showThumbs={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`left_0 ${hasPrev ? "absolute" : "hidden"} ${
                styles.carousel_slide_btn
              }`}
              onClick={clickHandler}
            >
              <LeftIcon className="w-9 h-9 text-white" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`right_0 ${hasNext ? "absolute" : "hidden"} ${
                styles.carousel_slide_btn
              }`}
              onClick={clickHandler}
            >
              <RightIcon className="w-9 h-9 text-white" />
            </div>
          );
        }}
      >
        {imageArray.map((item, index) => {
          return (
            <div key={index} className={styles.image_container}>
              <Image
                layout="responsive"
                className="absolute"
                src={item}
                width={279.3}
                height={265.23}
                alt=""
              />
              <button
                onClick={() => setLike()}
                className={`${styles.like} ${isLiked ? "liked" : ""}`}
              >
                <Like />
              </button>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Card;
