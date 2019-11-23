import React from 'react';
import HeroSlide from "./components/hero-slide";
import Footer from "../../components/footer";

export default class Home extends React.PureComponent {

  render() {
    return (
      <div className="home">
        <HeroSlide />
        <Footer/>
      </div>
    );
  }
}
