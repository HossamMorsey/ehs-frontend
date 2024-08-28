import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { mainLogo, profilePic } from "./utils";
import "./styles.scss";

function Navbar() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <Link>
          <img alt="Logo" src={mainLogo} className="img-logo" />
        </Link>
        <Link to="/home" className="site-title">
          Egypt Horizon Scanner
        </Link>
      </div>

      <ul>
        <CustomLink to="/home"> Dashboard</CustomLink>
        <CustomLink to="/digital-avatar"> Digital Avatar</CustomLink>
        <CustomLink to="/response-now"> Response Now</CustomLink>
        <CustomLink to="/service-offer"> Service Offer</CustomLink>
        <CustomLink to="/profile">
          <img alt="Logo" src={profilePic} className="profile-img" />
        </CustomLink>
      </ul>
    </nav>
  );
}

export default Navbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: false });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
