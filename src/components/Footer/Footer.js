import React from "react";
// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "./footer.scss";

import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div id="footerWrap">
      <footer className="footer">
        <div className="top-footer">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-logo">
                <a href="/" title="Mercury">
                  <img
                    src="https://i.imgur.com/bAnFKDw.png"
                    width="72"
                    alt="Mercury-Logo"
                    className="img-fluid"
                  />
                  Smartlight.
                </a>
                <p className="tagline">A product of Smartlight.</p>
              </div>
            </div>
            <div className="col-md-2">
              <h4>Lien</h4>
              <ul className="footer-link">
                <li>
                  <a href="#" title="Home">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h4>À Propos</h4>
              <ul className="footer-link">
                <li>
                  <a href="#" title="Faq">
                    Faq
                  </a>
                </li>
                <li>
                  <a href="#" title="Blog">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Nous Contacter</h4>
              <ul className="footer-link">
                <li>
                  <a href="mail-to:smartlight.eip@gmail.com" title="Contact">
                    smartlight.eip@gmail.com
                  </a>
                </li>
                <li>
                  <div className="icons">
                    <SocialIcon
                      href="#"
                      title="Facebook"
                      network="facebook"
                      bgColor="#fff"
                    />
                    <SocialIcon
                      href="#"
                      title="Link"
                      network=""
                      bgColor="#fff"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="row">
            <div className="col-md-5">
              <p className="copyright pt-3">
                Copyright &copy; {year}{" "}
                <a href="#" className="text-white">
                  Smartlight
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
