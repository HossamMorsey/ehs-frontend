import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./digitalAvatar.scss";

function DimensionsNavbar() {

  return (
    <>
      <nav className="side-nav">
        <ul>
          <h4> :: Dimensions ::</h4>
          <CustomLink to="/digital-avatar"> Home</CustomLink>
          <CustomLink to="/digital-avatar/SDGs"> SDGs</CustomLink>
          <span> - Gross written premium (GWP) - </span>
          <CustomLink to="/digital-avatar/economic-development">
            {" "}
            Economic Development
          </CustomLink>
          <CustomLink to="/digital-avatar/energy"> Energy</CustomLink>
          <CustomLink to="/digital-avatar/KISR">
            {" "}
            Knowledge, Innovation, and Scientific Research
          </CustomLink>
          <CustomLink to="/digital-avatar/TEGI">
            Transparency and efficient government institutions{" "}
          </CustomLink>
          <span> - Social - </span>
          <CustomLink to="/digital-avatar/social-justice">
            {" "}
            Social Justice
          </CustomLink>
          <CustomLink to="/digital-avatar/health"> Health </CustomLink>
          <CustomLink to="/digital-avatar/education-and-training">
            {" "}
            Education and Training
          </CustomLink>
          <CustomLink to="/digital-avatar/culture"> Culture </CustomLink>
          <span> - Environment - </span>
          <CustomLink to="/digital-avatar/environment">
            {" "}
            Environment{" "}
          </CustomLink>
          <CustomLink to="/digital-avatar/urban-development">
            {" "}
            Urban Development{" "}
          </CustomLink>
        </ul>
      </nav>
    </>
  );
}

export default DimensionsNavbar;

function CustomLink({ to, children,...props }) {
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
