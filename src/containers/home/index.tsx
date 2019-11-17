import React from 'react';
import HeroSlide from "./components/hero-slide";

export default class Home extends React.PureComponent {

  render() {
    return (
      <div className="home">
        <HeroSlide />
      </div>
    );
  }
}
