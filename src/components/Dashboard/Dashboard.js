import React from "react";
import "./dashboard.scss";
import { tourism, vinDiagram } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../Layout";

function Dashboard() {
  return (
    <Layout>
      <h1> Welcome Back, Acc Lab Egypt !!</h1>
      <h3 className="recent"> Your recent activities:</h3>
      <div className="recent-avatar-container">
        <h4 className="recent"> Digital Avatar:</h4>
        <p className="recent-avatar">
          Your recent activity here where related to “Tourism”, and here are
          some info you were looking for:
        </p>
        <div className="recent-avatar-details">
          <ul className="recent-list">
            <span className="recent-title"> Egypt Tourism Facts:</span>
            <li> Attract 20 million international arrivals.</li>
            <li>Raise the average tourist expenditure per night by 50%.</li>
            <li> Increase Egypt’s share of world tourism to 1.5%.</li>
            <li> Raise tourism revenues to USD 20 billion.</li>
            <li> Double Egypt’s share of Arab tourism. </li>
            <li>
              {" "}
              Attract USD 10 billion of new foreign direct investment in
              tourism.
            </li>
          </ul>
          <img alt="Logo" src={tourism} className="example-img" />
        </div>
      </div>

      <div className="recent-response-container">
        <h4 className="recent"> Response Now:</h4>
        <p className="recent-response">
          Aspect 1. Emerging Issues of the Month:
        </p>
        <div className="issues-container">
          <div className="issue-container">
            <span> Availability of Medicine: </span>
            <span className="issue-bar">
              <span> 30% </span>
              <button>
                <FontAwesomeIcon icon={faInfoCircle} />
              </button>
            </span>
           
          </div>

          <div className="issue-container">
            <span> Power Shortage: </span>
            <span className="issue-bar">
              <span> 35% </span>
              <button>
                <FontAwesomeIcon icon={faInfoCircle} />
              </button>
            </span>
          </div>
          <div className="issue-container">
            <span> Security (Robberies): </span>
            <span className="issue-bar">
              <span> 39% </span>
              <button>
                <FontAwesomeIcon icon={faInfoCircle} />
              </button>
            </span>
          </div>
        </div>

        <div className="response-now-container">
          <p className="recent-response">Aspect 2.2.3 Response Now:</p>
          <img className="vin-diagram" alt="Vin-Diagram" src={vinDiagram} />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
