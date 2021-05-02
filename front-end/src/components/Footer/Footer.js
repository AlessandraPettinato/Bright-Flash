import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterQuote from "./FooterQuote";
import "./Footer.css";

export default function Footer({ info }) {
  const [allInfo, setAllInfo] = useState({});

  const randomInfo = () => {
    if (info !== undefined && info.length > 0) {
      const foundInfo = info[Math.floor(Math.random() * info.length)];
      setAllInfo(foundInfo);
    } else {
      setAllInfo({});
    }
  };

  useEffect(randomInfo, []);

  let location = useLocation();
  return (
    location.pathname !== "/" && (
      <div className="footerpage-container">
        <footer className="main-footer">
          <div class="quote">
            <FooterQuote quote={allInfo.quote} name={allInfo.name} />
          </div>
          <div className="container">
            <a target="_blank" href="https://www.instagram.com/brightflash.bf/">
              <img
                className="icon"
                src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531048/Bright%20flash/instagram-logo_eqmuft.png"
              />
            </a>
            <Link to="/contact">
              <img
                className="icon"
                src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531084/Bright%20flash/email-logo_q0ectn.png"
              />
            </Link>
            <div className="nav_about">
              <Link to="/about">
                <h2>ABOUT US</h2>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    )
  );
}
