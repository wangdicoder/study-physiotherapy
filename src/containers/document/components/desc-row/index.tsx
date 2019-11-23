import React from 'react';
import './desc-row.scss';

export type DescRowProps = {
  icon: string;
  title: string;
  children?: React.ReactNode;
};

const DescRow = ({icon, title, children}: DescRowProps) => (
  <div className="desc-row">
    <div className="desc-row__left">
      <img src={icon} alt="img"/>
      <h3>{title}</h3>
    </div>
    <div className="desc-row__right">
      {children}
    </div>
  </div>
);

export default DescRow;
