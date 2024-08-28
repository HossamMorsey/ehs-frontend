import React from "react";
import DimensionsNavbar from "../DimensionsNavbar";
import { unGoals } from "../../../assets/demoData";
import { Button } from "antd";
import {
  goal1,
  goal2,
  goal3,
  goal4,
  goal5,
  goal6,
  goal7,
  goal8,
  goal9,
  goal10,
  goal11,
  goal12,
  goal13,
  goal14,
  goal15,
  goal16,
  goal17,
  un17Circle,
} from "../../../utils";

function SDGs() {
  return (
    <>
      <div className="main-container">
        <div className="dimensions-container">
          <DimensionsNavbar />
        </div>{" "}
        <div className="digital-avatar-def ">
          <div className="goals-imgs">
            <img className="un-goal-img" src={un17Circle} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal1} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal2} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal3} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal4} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal5} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal6} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal7} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal8} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal9} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal10} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal11} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal12} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal13} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal14} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal15} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal16} alt="UN 17 circle" />
            <img className="un-goal-img" src={goal17} alt="UN 17 circle" />
          </div>
          <div className="sources-container">
            Sources:{" "}
            <Button
              className="btn"
              onClick={() => {
                console.log(".. SDGs ..");
              }}
            >
              SDGs Index
            </Button>
          </div>
          <div className="digital-avatar-def goals-container">
            {unGoals.map((goal, i) => {
              return (
                <div id={i} className="">
                  <strong> {goal.name}: </strong> {goal.des}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div>
        <p> ::Sources:: </p>
        {unGoals.map((goal, index) => {
          return (
            <div>
              <img src={goal} alt={goal.name} />
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default SDGs;
