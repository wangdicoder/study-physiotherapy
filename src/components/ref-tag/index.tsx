import React from 'react';

export type RefTagProps = {
  children?: string;
};

const RefTag = ({children}: RefTagProps) => (
  <sup style={{color: '#000'}}>[{children}]</sup>
);

export default RefTag;
