import Link from "next/link";
import SearchIcon from "../CustomIcons/SearchIcon";
import Web from "../CustomIcons/Web";
import HamBurger from "../CustomIcons/HamBurger";
import UserAvatar from "../CustomIcons/UserAvatar";
import Carousel from "../Carousel";
import Filters from "../CustomIcons/Filter";
import Logo from "../CustomIcons/Logo";

const Navbar = () => {
  return (
    <>
      <div className={`topNav`}>
        <Link href="/">
          <a className="logo">
            <Logo />
          </a>
        </Link>
        <div className={`topNav_center`}>
          <div className="search_div">
            <div className="search_params">Anywhere</div>
            <div className="week_flter">Any week</div>
            <div className="add_guest">Add guests</div>
            <div className="searchIcon">
              <SearchIcon />
            </div>
          </div>
        </div>

        <div className={`topNav_center`}>
          <div className="host_wrapper">
            <div className="host_tittle">Become a Host</div>
            <div className="host_tittle">
              <Web />
            </div>
            <div className="hamburger_div">
              <HamBurger /> <UserAvatar />
            </div>
          </div>
        </div>
      </div>
      <div className="bottomNav">
        <div className="menu_wrapper">
          <Carousel />
        </div>
        <div className="filter_div">
          <Filters /> <span>Filters</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
