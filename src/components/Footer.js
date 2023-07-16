import React from "react";
import logo from "../assets/images/logo.svg";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";


const Footer = () => {
  return (
    <div className="bg-gray-50">
      <div className="section-containerr">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* image */}
          <img src={logo} alt="" className="scale-50" />
          <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue">
            <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-10">
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className=" hover:text-strongCyan">
                    FAQs
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className=" hover:text-strongCyan">
                    Privacy Policy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">
                    Press Kit
                  </a>
                </div>
              </div>
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className=" hover:text-strongCyan">
                    Install Guide
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* social Icons */}
          <div className="flex justify-between w-32 mb-10 py-1 md:mr-10 md:mb-0 ">
            <a href="#">
                <img src={iconFacebook} alt="" className=" duration-200 ficon" />
            </a>
            <a href="#">
                <img src={iconTwitter} alt="" className=" duration-200 ficon" />
            </a>
            <a href="#">
                <img src={iconInstagram} alt="" className=" duration-200 ficon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
