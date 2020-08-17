import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import Section from './Section';

const Profiles = ({ match, sitemap }) => {
  const navInfo = sitemap.find((depth2) => depth2.path === match.path);

  return (
    <div>
      <Route
        path="/profiles/:pagepath"
        render={({ match }) => (
          <Section sitemap={navInfo.depth2} match={match} />
        )}
      />
    </div>
  );
};

export default memo(Profiles);
