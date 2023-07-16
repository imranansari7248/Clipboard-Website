import React from "react";
import google from "../assets/images/logo-google.png";
import ibm from "../assets/images/logo-ibm.png";
import microsoft from "../assets/images/logo-microsoft.png";
import hp from "../assets/images/logo-hp.png";
import vector from "../assets/images/logo-vector-graphics.png";

const References = () => {
  return (
    <React.Fragment>
      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src={google} alt="" />
          <img src={ibm} alt="" />
          <img src={microsoft} alt="" />
          <img src={hp} alt="" />
          <img src={vector} alt="" />
        </div>
      </section>
      <section id="downlaod">
        <div className="section-container mb-10">
          <h3>Clipboard for iOS and MacOS</h3>
          <p>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>
          <div className="button-container ">
            <a
              href=""
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href=""
              className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
            >
              Download for MacOS
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default References;
