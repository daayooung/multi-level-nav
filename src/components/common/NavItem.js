import React from 'react';
import { NavLink } from 'react-router-dom';
import NavSub from './NavSub';
import './NavItem.css';

const NavItem = ({ navInfo }) => {
  const title = navInfo.pagename;
  const navDepth1 = navInfo.path;
  const navDepth2 = navInfo.depth2;

  return (
    <li className="depth1">
      <NavLink activeClassName="active" to={navDepth1} exact>
        <span>{title}</span>
      </NavLink>
      {navDepth2.length > 0 && (
        <NavSub depth1={navDepth1} navInfo={navDepth2} />
      )}
    </li>
  );
};

export default React.memo(NavItem);
