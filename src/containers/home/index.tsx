import React from 'react';
import './home.scss';
import { Row, Col } from 'antd';
import HeroSlide from "./components/hero-slide";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import PageHeader from "../../components/page-header";
import ContactForm from "./components/contact-form";
import Reference from "../../components/reference";
import RefTag from "../../components/ref-tag";
import PieChart from "./components/pie-chart";

const Issue = () => (
  <Layout>
    <PageHeader title="Facts..."/>
    <p>
      According to 2017 full-year data as submitted to Government on La Trobe official website, there were about{' '}
      <b>9,160</b> international students in 2017, which accounted for <b>23.7%</b> of total students in that
      year.<RefTag>1</RefTag>
    </p>
    <Row className="home__row" type="flex" align="middle" justify="center">
      <Col className="home__column home__column_label" span={10}>
        <p>The international students account for approximately 8% of the total students in each cohort of
          physiotherapy course. </p>
      </Col>
      <Col className="home__column home__column_chart" span={10}>
        <PieChart
          title="Physiotherapy Student"
          data={[
            { name: 'Local Student', value: 92 },
            { name: 'International Student', value: 8 },
          ]}
        />
      </Col>
    </Row>
    <Row  className="home__row" type="flex" align="middle">
      <Col className="home__column home__column_chart" span={10}>
        <PieChart
          title="Placement failure rate"
          data={[
            { name: 'Passed', value: 50 },
            { name: 'Failed', value: 50 },
          ]}
          theme="roma"
        />
      </Col>
      <Col className="home__column  home__column_label" span={10}>
        <p>It is estimated that there were about 50% of the current 4th year international physio students have
          failured at least 1 placement (not official status). </p>
      </Col>
    </Row>
    <p>It is well acknowledged that international students are facing different challenges while their studying in
      Australia, especially for those non-English speaking backgrounds who are studying in clinical
      settings<RefTag>2</RefTag>.</p>
    <p>Issues, such as language difficulties, cultural diversities, complicated paper work, and different healthcare
      system, are main barriers for these overseas students<RefTag>3</RefTag>.</p>
  </Layout>
);

const Contact = () => (
  <Layout className="gray">
    <PageHeader
      title="Any questions? Leave us your info"
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
        <Issue/>
        <Contact/>
        <Reference>
          <ol>
            <li>La Trobe University. (2019). Facts and figures. Retrieved from La Trobe University:
              https://www.latrobe.edu.au/about/at-a-glance/facts-figures.
            </li>
            <li>Abu-Arab, A., & Parry, A. (2015). Supervising culturally and linguistically diverse (CALD) nursing
              students: A challenge for clinical educators. Nurse Education in Practice, e1-e9.
            </li>
            <li>Edgecombe, K., Jennings, M., & Bowden, M. (2013). International nursing students and what impacts their
              clinical learning: Literature review. Nurse Education Today, 138-142.
            </li>
          </ol>
        </Reference>
        <Footer/>
      </div>
    );
  }
}
