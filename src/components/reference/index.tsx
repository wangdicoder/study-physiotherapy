import React from 'react';
import './reference.scss';

export type ReferenceProps = {
  children?: React.ReactNode;
};

const Reference = ({children}: ReferenceProps) => {
  return (
    <div className="reference">
      <div className="section">
        <h3 className="reference__title">Reference</h3>
        {children}
      </div>
    </div>
  );
};

export default Reference;
