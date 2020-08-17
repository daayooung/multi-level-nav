import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import Section from './Section';

const Intro = ({ match, sitemap }) => {
  const navInfo = sitemap.find((page) => page.path === match.path);
  const description = navInfo.description;
  return (
    <div>
      <p>{description}</p>
      <Route
        path="/intro/:pagepath"
        render={({ match }) => <Section sitemap={navInfo} match={match} />}
      />
    </div>
  );
};

export default memo(Intro);
