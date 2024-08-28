import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function ServiceNavbar() {
  return (
    <React.Fragment>
      <nav className="side-nav-res">
        <ul>
          <CustomLink to="/service-offer"> Home</CustomLink>
          <CustomLink to="/service-offer/events"> Events</CustomLink>
          <CustomLink to="/service-offer/attendants"> Attendants</CustomLink>
          <CustomLink to="/service-offer/institutions">Institutions</CustomLink>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default ServiceNavbar;
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
