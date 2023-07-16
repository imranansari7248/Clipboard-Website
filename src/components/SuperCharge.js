import React from "react";
import iconBlacklist from "../assets/images/icon-blacklist.svg";
import iconText from "../assets/images/icon-text.svg";
import iconPreview from "../assets/images/icon-preview.svg";

const SuperCharge = () => {
  return (
    <section id="supercharge">
      <div className="section-container my-20">
        <h3>Supercharge your workflow</h3>
        <p className="mb-16">We've got the tools to boost your productivity.</p>

        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-32 md:space-y-0">
          {/* items */}
          <div className="flex flex-col items-center space-y-5">
            <img src={iconBlacklist} alt="" />
            <h5>Create Blacklists</h5>
            <p className="max-w-md text-grayishBlue">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src={iconText} alt="" />
            <h5>Plain Text Snippets</h5>
            <p className="max-w-md text-grayishBlue md:mb-8">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <img src={iconPreview} alt="" />
            <h5>Sneak Preview</h5>
            <p className="max-w-md text-grayishBlue md:mb-8">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperCharge;
