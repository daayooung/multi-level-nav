import React from 'react';
import { withRouter } from 'react-router-dom';
import NavItem from './NavItem';
import Sitemap from '../../api/Sitemap';
import './Nav.css';

const Nav = () => {
  const sitemap = Sitemap;

  return (
    <nav className="nav">
      <ul className="nav-depth1">
        {sitemap.map((sitemap) => {
          return <NavItem key={sitemap.path} navInfo={sitemap} />;
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Nav);
