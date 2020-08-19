import React, { memo } from 'react';

const Section = ({ sitemap, match }) => {
  const navInfo = sitemap.find(
    (page) =>
      page.path === match.params.pagepath ||
      page.path === '/' + match.params.pagepath
  );
  const title = navInfo.pagename;
  const description = navInfo.description;
  const list = navInfo.list;

  return (
    <div>
      <h2>{title}</h2>
      {list && (
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      <p>{description}</p>
    </div>
  );
};

export default memo(Section);
