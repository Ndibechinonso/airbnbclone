import { useState } from "react";
import CaretUp from "../CustomIcons/CaretUp";
import Web from "../CustomIcons/Web";
import { footerArray } from "../../data";
import Close from "../CustomIcons/Close";

const Footer = () => {
  const [showMap, setShowMap] = useState(true);

  const toggleFooterView = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="footer">
      {showMap ? (
        <div className="footer_content">
          <div className="left_footer">
            <span className="">© 2022 Airbnb, Inc </span> <span className="divider">·</span>
            <span className="center_footer">
            <span className="center_footer_1"><span>Privacy</span> <span>·</span> <span>Terms</span></span>
            <span className="divider">·</span>
            <span className="center_footer_@"> <span>Sitemap</span> <span>·</span> <span>Destinations</span></span>
            </span>
          </div>
          <div className="right_footer">
            <span className="right_footer_span">
              <Web />
              <span>English (US)</span>
            </span>
            <span className="right_footer_span">
              <span>$</span>
              <span>USD</span>
            </span>
            <span className="right_footer_span">
              <span>Support & resources</span>
              <button onClick={toggleFooterView}>
                <CaretUp />{" "}
              </button>
            </span>
          </div>
        </div>
      ) : (
        <div className="footer_links_container">
          <button onClick={toggleFooterView}>
            <Close />
          </button>
          <div className="footer_links_content">
            {footerArray.map((section, index) => {
              return (
                <div key={index} className="section">
                  <h4>{section.tittle}</h4>
                  {section.section.map((item, index) => {
                    return (
                      <a key={item} href={item.link}>
                        {item.tittle}
                      </a>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
