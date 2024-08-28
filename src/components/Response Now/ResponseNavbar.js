import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./responseNow.scss";

function ResponseNavbar() {
  return (
    <React.Fragment>
      <nav className="side-nav-res">
        <ul>
          {/* <h4> :: Contents ::</h4> */}
          <CustomLink to="/response-now/"> Home</CustomLink>
          <CustomLink to="/response-now/emerging-issues">
            {" "}
            Emerging Issues
          </CustomLink>
          <CustomLink to="/response-now/intervention-mapping">
            {" "}
            Intervention Mapping
          </CustomLink>
          <CustomLink to="/response-now/programmatic-simulation">
            Programmatic Simulation
          </CustomLink>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default ResponseNavbar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
