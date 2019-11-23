import React from 'react';
import './banner.scss';

export type BannerProps = {
  title: string;
};

const Banner = ({title}: BannerProps) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
    </div>
  );
};

export default Banner;
