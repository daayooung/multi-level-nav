import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import Section from '../common/Section';

const Home = ({ sitemap }) => {
  return (
    <div>
      <h1>Harry</h1>
      {sitemap.map((sitemap) => (
        <Route
          key={sitemap.path}
          path="/:pagepath"
          render={({ match }) => <Section sitemap={sitemap} match={match} />}
        />
      ))}
    </div>
  );
};

export default memo(Home);
