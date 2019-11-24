import React from 'react';
import './banner.scss';

export type BannerProps = {
  title: string;
  titleStyle?: React.CSSProperties;
  backgroundImage?: string;
};

const Banner = ({title, titleStyle, backgroundImage}: BannerProps) => {
  return (
    <div className="banner" style={{backgroundImage: backgroundImage ? `url(${backgroundImage})` : ''}}>
      <h1 className="banner__title" style={titleStyle}>{title}</h1>
    </div>
  );
};

export default Banner;
