import React from 'react';
import './hero-slide.scss';

const HeroSlide = () => {

  return (
    <div className="hero-slide">
      <div className="hero-slide__left">
        <h1 className="hero-slide__title">
          Multi-lingual<br/><span className="hero-slide__title_green">Physios</span>
        </h1>
        <p className="hero-slide__desc">
          Far far away, behind the word mountains, far from the countries Vokalia
          and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="hero-slide__right"/>
    </div>
  );
};

export default HeroSlide;
