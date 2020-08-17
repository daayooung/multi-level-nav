import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavSub.css';

const NavSub = ({ depth1, navInfo }) => {
  const navDepth1 = depth1;

  return (
    <ul className="nav_depth2">
      {navInfo.map((depth2) => {
        const navDepth2 = depth2.path;

        return (
          <li key={depth2.path}>
            <NavLink activeClassName="active" to={navDepth1 + navDepth2} exact>
              {depth2.pagename}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(NavSub);
