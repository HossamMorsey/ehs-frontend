import React from "react";
import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import DigitalAvatar from "./components/Digital Avatar/DigitalAvatar";
import ResponseNow from "./components/Response Now/ResponseNow";
import UserProfile from "./components/User Profile/UserProfile";
import { Route, Routes } from "react-router-dom";
import Culture from "./components/Digital Avatar/Pages/Pillars/Culture";
import SDGs from "./components/Digital Avatar/Pages/SDGs";
import EconomicDevelopment from "./components/Digital Avatar/Pages/Pillars/EconomicDevelopment";
import LogIn from "./components/LogIn/LogIn";
import EmergingIssues from "./components/Response Now/Pages/EmergingIssues";
import ProgrammaticSimulation from "./components/Response Now/Pages/ProgrammaticSimulation";
import InterventionMapping from "./components/Response Now/Pages/InterventionMapping";
import Energy from "./components/Digital Avatar/Pages/Pillars/Energy";
import Environment from "./components/Digital Avatar/Pages/Pillars/Environment";
import UrbanDevelopment from "./components/Digital Avatar/Pages/Pillars/UrbanDevelopment";
import Layout from "./Layout";
import ServiceOffer from "./components/Service Offer/ServiceOffer";
import Events from "./components/Service Offer/Pages/Events";
import Attendants from "./components/Service Offer/Pages/Attendants";
import Institutions from "./components/Service Offer/Pages/Institutions";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/home" element={<Dashboard />} />
          <Route
            path="/digital-avatar"
            element={
              <Layout>
                <DigitalAvatar />
              </Layout>
            }
          />
          <Route
            path="/response-now/"
            element={
              <Layout>
                {" "}
                <ResponseNow />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                {" "}
                <UserProfile />
              </Layout>
            }
          />
          {/* Digital Avatar sidenav links */}
          <Route
            path="/digital-avatar/SDGs"
            element={
              <Layout>
                {" "}
                <SDGs />
              </Layout>
            }
          />
          <Route
            path="/digital-avatar/economic-development"
            element={
              <Layout>
                {" "}
                <EconomicDevelopment />
              </Layout>
            }
          />
          <Route
            path="/digital-avatar/energy"
            element={
              <Layout>
                {" "}
                <Energy />
              </Layout>
            }
          />
          <Route
            path="/digital-avatar/environment"
            element={
              <Layout>
                {" "}
                <Environment />
              </Layout>
            }
          />
          <Route
            path="/digital-avatar/KISR"
            element={
              <Layout>
                {" "}
                <EconomicDevelopment />
              </Layout>
            }
          />
          <Route
            path="/digital-avatar/TEGI"
            element={
              <Layout>
                {" "}
                <Energy />{" "}
              </Layout>
            }
          />
          <Route
            path="/digital-avatar/social-justice"
            element={
              <Layout>
                {" "}
                <EconomicDevelopment />
              </Layout>
            }
          />
          <Route
            path="/digital-avatar/health"
            element={
              <Layout>
                {" "}
                <Energy />
              </Layout>
            }
          />
          <Route
            path="/digital-avatar/education-and-training"
            element={
              <Layout>
                {" "}
                <EconomicDevelopment />
              </Layout>
            }
          />

          <Route
            path="/digital-avatar/culture"
            element={
              <Layout>
                {" "}
                <Culture />
              </Layout>
            }
          />
          <Route
            path="/digital-avatar/urban-development"
            element={
              <Layout>
                {" "}
                <UrbanDevelopment />
              </Layout>
            }
          />
          {/* Response Now Side Navbar Links */}
          <Route
            path="/response-now/emerging-issues"
            element={
              <Layout>
                <EmergingIssues />
              </Layout>
            }
          />
          <Route
            path="/response-now/intervention-mapping"
            element={
              <Layout>
                <InterventionMapping />
              </Layout>
            }
          />
          <Route
            path="/response-now/programmatic-simulation"
            element={
              <Layout>
                <ProgrammaticSimulation />
              </Layout>
            }
          />
          {/* Service offer navigation */}
          <Route
            path="/service-offer"
            element={
              <Layout>
                <ServiceOffer />
              </Layout>
            }
          />
          <Route
            path="/service-offer/events"
            element={
              <Layout>
                <Events />
              </Layout>
            }
          />
          <Route
            path="/service-offer/attendants"
            element={
              <Layout>
                <Attendants />
              </Layout>
            }
          />
          <Route
            path="/service-offer/institutions"
            element={
              <Layout>
                <Institutions />
              </Layout>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
