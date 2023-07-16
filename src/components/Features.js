import React from "react";
import computerImage from "../assets/images/image-computer.png";
import imageDevices from "../assets/images/image-devices.png";

const Features = () => {
  return (
    <section id="features">
      <div className="section-container my-20">
        <div className=" relative flex flex-col md:flex-row md:space-x-32">
          {/* images */}
          <div className="md:w-1/2">
            <img
              src={computerImage}
              alt=""
              className="md:absolute top-0 right-[50%]"
            />
          </div>

          {/* items */}

          <div className="flex flex-col mt-16 mb-24 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-12">
            <div>
              <h5>
                Quick Search
              </h5>
              <p className="max-w-md text-grayishBlue md:mb-8">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div>
              <h5 >
                iCloud Sync
              </h5>
              <p className="max-w-md text-grayishBlue md:mb-8">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div>
              <h5>
                Completely History
              </h5>
              <p className="max-w-md text-grayishBlue md:mb-8">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* assecc */}
      <div className="section-container my-20">
        <h3>Access Clipboard Anywhere</h3>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <img src={imageDevices} alt="" className="mx-auto" />
      </div>
    </section>
  );
};

export default Features;
