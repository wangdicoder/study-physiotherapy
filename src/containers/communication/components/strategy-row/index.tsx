import React from 'react';
import './strategy-row.scss';

export type StrategyRowProps = {
  icon?: string;
  iconStyle?: React.CSSProperties;
  title?: string;
  children?: React.ReactNode;
};

const StrategyRow = ({icon, iconStyle, title, children}: StrategyRowProps) => (
  <div className="strategy-row">
    <div className="strategy-row__title-container">
      <img src={icon} alt="icon" className="strategy-row__icon" style={iconStyle}/>
      <h3 className="strategy-row__title">{title}</h3>
    </div>
    {children}
  </div>
);

export default StrategyRow;
