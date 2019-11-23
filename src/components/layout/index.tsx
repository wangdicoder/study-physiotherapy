import React from 'react';
import './layout.scss';

export type LayoutProps = {
  className?: string;
  children?: React.ReactNode;
};

const Layout = ({children, className}: LayoutProps) => (
  <div className={`layout ${className}`}>
    <div className="section">
      {children}
    </div>
  </div>
);

export default Layout;
