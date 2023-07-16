import React from "react";
import logo from "../assets/images/logo.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className=" section-container mb-40 pt-16">
        <img src={logo} alt="" className="mx-auto my-16" />
        <h3>
          A history of everything you copy
        </h3>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        {/* button container */}
        <div className="button-container ">
            <a href="" className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80">
                Download for iOS
            </a>
            <a href="" className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80">
                Download for MacOS
            </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
