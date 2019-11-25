import React from 'react';
import './page-header.scss';

export type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

const PageHeader = ({title, subtitle}: PageHeaderProps) => (
  <div className="page-header">
    <h2 className="page-header__title">{title}</h2>
    {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
  </div>
);

export default PageHeader;
