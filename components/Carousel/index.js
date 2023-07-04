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



const NavbarCarousel = () => {
  var router = useRouter();
  const [slideNumber, setSlideNumber] = useState(12);
  const { width, height } = useWindowDimensions();
  const [isFirstSlide, setIsFirstSlide] = useState(true)
  const [isThirdSlide, setThirdSlide] = useState(false)


  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      isFirstSlide && <div className={`arrow_btn next`} style={{}} onClick={onClick}>
        <Next />
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
    !isFirstSlide && <div className={`arrow_btn prev`} style={{}} onClick={onClick}>
        <Prev />
      </div>
    );
  };

  useEffect(() => {
    if (width < 730 && width >= 500) {
      setSlideNumber(8);
    } else if (width < 500) {
      setSlideNumber(5);
    } else {
      setSlideNumber(12);
    }
  }, [width]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slideNumber,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (oldIndex, newIndex) => {
      switch (newIndex) {
          case 0: 
          setIsFirstSlide(true)
          setThirdSlide(false)
              break
          case 1:
          setIsFirstSlide(false)
          setThirdSlide(false)
                break
          case 2:
            setIsFirstSlide(false)
            setThirdSlide(true)
            break
          default: 
          setIsFirstSlide(false)
          setThirdSlide(false)
      }
  }
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
                    router.asPath === item.routepath ? "active_route" : ""
                  }`}
                >
                  <NavItems tab={item.name} />
                  <span className="nav_item_name">{item.name}</span>
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
