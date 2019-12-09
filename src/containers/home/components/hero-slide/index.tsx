import React from 'react';
import './hero-slide.scss';

const HeroSlide = () => {

  return (
    <div className="hero-slide">
      <div className="section">
        <div className="hero-slide__container">
          <div className="hero-slide__left">
            <h1 className="hero-slide__title">
              Studying Physiotherapy as an <br/><span className="hero-slide__title_color">International Student</span>
            </h1>
            <p className="hero-slide__desc">
              Physiotherapy is a highly demanding career in Australia and thus there are many international students
              choosing this course every year. It is not uncommon that students from overseas find it challenging to
              complete the course. That’s why we build this website to help you go through your journey more smoothly.
            </p>
          </div>
          <div className="hero-slide__right"/>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
