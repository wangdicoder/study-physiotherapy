import React from 'react';
import HeroSlide from "./components/hero-slide";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import PageHeader from "../../components/page-header";
import ContactForm from "./components/contact-form";

const Contact = () => (
  <Layout>
    <PageHeader
      title="Leave us your info"
      subtitle="and we will get back to you"
    />
    <ContactForm/>
  </Layout>
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
