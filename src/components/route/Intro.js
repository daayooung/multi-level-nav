import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import Section from './Section';

const Intro = ({ sitemap }) => {
  return (
    <>
      {sitemap.map((sitemap) => (
        <div key={sitemap.pagename}>
          <p key={sitemap.description}>{sitemap.description}</p>
          <Route
            key={sitemap.path}
            path="/intro/:pagepath"
            render={({ match }) => <Section sitemap={sitemap} match={match} />}
          />
        </div>
      ))}
    </>
  );
};

export default memo(Intro);
