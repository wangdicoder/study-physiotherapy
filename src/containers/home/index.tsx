import React from 'react';
import { Button } from 'antd';
import HeroSlide from "./components/hero-slide";
import Footer from "../../components/footer";

const Contact = () => (
  <div>
    <Button>Contact</Button>
  </div>
);

export default class Home extends React.PureComponent {

  render() {
    return (
      <div className="home">
        <HeroSlide/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}
