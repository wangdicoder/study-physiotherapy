import React from 'react';
import './page-header.scss';

export type PageHeaderProps = {
  title: string;
};

const PageHeader = ({title}: PageHeaderProps) => (
  <div className="page-header">
    <h2 className="page-header__title">{title}</h2>
  </div>
);

export default PageHeader;
