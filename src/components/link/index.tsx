import React from 'react';

export type ALink = {
  link?: string;
  children: string;
};

const ALink = ({link, children}: ALink) => (
  <a href={link ? link : children} target="_blank" rel="noopener noreferrer">{children}</a>
);

export default ALink;
