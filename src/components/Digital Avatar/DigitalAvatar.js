import React from "react";
import DimensionsNavbar from "./DimensionsNavbar";
import { egyptMap } from "../../utils";

function DigitalAvatar() {
  return (
    <div className="main-container">
      <div className="dimensions-container">
        <DimensionsNavbar />
      </div>
      <div className="digital-avatar-def goals-container">
        <h3> What is the Digital Avatar Feature?!</h3>
        <p>
          The Digital Avatar is a real-time monitoring dashboard that displays a
          country's key performance indicators by integrating data from multiple
          sources.
        </p>
        <p>
          A set of dimensions, Pillars and associated indicators corresponding
          to UNDP Country program and CO narrative and communications' strategy
          and persona, Based on Sustainable Development Strategy (SDS).
        </p>
        <p>
          SDS has followed the sustainable development principle as a general
          framework for improving the quality of lives and welfare, taking into
          consideration the rights of new generations in a prosperous life;
          thus, dealing with three main dimensions; economic, social, and
          environmental dimensions.
        </p>
        <p>
          In addition, SDS is based upon the principles of “inclusive
          sustainable development” and “balanced regional development”;
          emphasizing the full participation in development, and ensuring its
          yields to all parties. The strategy, as well, considers equal
          opportunities for all, closing development gaps, and efficient use of
          resources to ensure the rights of future generations.
        </p>
        <div className="map-container">
          <img className="map" src={egyptMap} alt="Egypt Map" />
          <h2> Egypt Digital Avatar </h2>
        </div>
      </div>
    </div>
  );
}

export default DigitalAvatar;
