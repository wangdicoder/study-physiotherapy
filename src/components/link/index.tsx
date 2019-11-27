import React from 'react';

export type ALink = {
  link?: string;
  className?: string;
  children: string;
};

const ALink = ({link, className, children}: ALink) => (
  <a href={link ? link : children} target="_blank" rel="noopener noreferrer" className={className} style={{fontWeight: 600, wordWrap: 'break-word'}}>{children}</a>
);

export default ALink;
