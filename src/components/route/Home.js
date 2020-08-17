import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import Section from './Section';

const Home = ({ match, sitemap }) => {
  const navInfo = sitemap.find((page) => page.path === match.path);

  return (
    <div className="main">
      <h1>Harry</h1>
      <Route
        path="/:pagepath"
        render={({ match }) => <Section sitemap={navInfo} match={match} />}
      />
    </div>
  );
};

export default memo(Home);
