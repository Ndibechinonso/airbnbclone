import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Next from "../CustomIcons/Next";
import Prev from "../CustomIcons/Prev";
import { menuItems } from "../Navbar/navItems";
import Link from "next/link";
import NavItems from "../Navbar/NavIcons";
import useWindowDimensions from "../hooks/useWindowDimension";

const SampleNextArrow = (props) =>{
  const { className, style, onClick } = props;
  return (
    <div className={`arrow_btn next`} style={{}} onClick={onClick}>
      <Next />
    </div>
  );
}

const SamplePrevArrow = (props) =>{
  const { className, style, onClick } = props;
  return (
    <div className={`arrow_btn prev`} style={{}} onClick={onClick}>    
      <Prev />
    </div>
  );
}

const NavbarCarousel = () => {
  var router = useRouter();
  const [slideNumber, setSlideNumber] = useState(12);
  const { width, height } = useWindowDimensions();

  useEffect(()=>{
    if (width < 730 && width >= 500) {
      setSlideNumber(8);
    } else if (width < 500) {
      setSlideNumber(5);
    } else {
      setSlideNumber(12);
    }
  }, [width])

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slideNumber,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="">
      <Slider {...settings}>
        {menuItems.map((item, index) => {
          return (
            <Link key={item.routepath} href={item.routepath}>
              <div>
                <a
                  className={`menu ${
                    router.pathname === item.routepath ? "active_route" : ""
                  }`}
                >
                  <NavItems tab={item.name} />
                  <span>{item.name}</span>
                </a>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default NavbarCarousel;
