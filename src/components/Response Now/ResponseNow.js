import React from "react";
import ResponseNavbar from "./ResponseNavbar";

function ResponseNow() {
  return (
    <div className="main-container">
      <div className="dimensions-container">
        <ResponseNavbar />
      </div>
      <div className="digital-avatar-def goals-container">
        <h3> What is the Response Now Feature ?!</h3>
        <p>
          An interactive window to map out opportunities for programmatic
          intervention and link it to evidence (emerging issues)
        </p>
        <h5> Emerging Issue of the Month</h5>
        <p>
          Putting forward emerging issues incorporating multiple data sources,
          including social media analysis. With quantification for each and AI
          aided brief description.
        </p>
        <h5>Programmatic Simulation</h5>
        <p>
          Programmatic simulation (with intervention mapping) incorporating a
          continuous data feed from the emerging issues mapping. The feature has
          a Chat GPT window. It introduces potential entry points and automated
          stakeholders mapping for each entry-point result.
        </p>
        <h5> User experience</h5>
        <p>
          Monthly captions to be put in circulation with universal push
          notifications.
        </p>
      </div>
    </div>
  );
}

export default ResponseNow;
