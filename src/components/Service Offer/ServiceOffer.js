import React from "react";
import ServiceNavbar from "./ServiceNavbar";

function ServiceOffer() {
  return (
    <div className="response-body-container">
      <div className="response-navbar-container">
        <ServiceNavbar />
      </div>
      <div className="digital-avatar-def goals-container">
        <h3> What is the Service Offer Feature ?!</h3>
        <p>
          A centralized platform showcasing UNDP's past and current merits,
          experiences, and potential service offers for donor and partner
          meetings. It facilitates quick and strategic engagement by curating
          relevant information and tasks for users.
        </p>
        <h5> Service Offers generation</h5>
        <p>
          An auto-generated document based on predefined templates approved by
          SMT. The auto-generation is dependent on user inputs and triggers from
          Service Offer algorithm.
        </p>
        <h5>User experience</h5>
        <p>
          Multi-level control. Wizard feature for staff (live excel sheet and/or
          drop) and auto-generation for SMT and portfolio leads.
        </p>
      </div>
    </div>
  );
}

export default ServiceOffer;
