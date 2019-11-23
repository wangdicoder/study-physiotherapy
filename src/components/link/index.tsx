import React from 'react';

export type ALink = {
  children: string;
};

const ALink = ({children}: ALink) => (
  <a href={children} target="_blank">{children}</a>
);

export default ALink;
