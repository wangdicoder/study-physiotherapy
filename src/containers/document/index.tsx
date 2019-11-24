import React from 'react';
import './document.scss';
import Banner from "../../components/banner";
import DescRow from "./components/desc-row";
import PageHeader from "../../components/page-header";
import Layout from "../../components/layout";
import Footer from "../../components/footer";

const StrategyList = [{
  icon: require('../../assets/icon/ic_paper.svg'),
  title: 'English result',
  desc: 'English result required for course application (IELTS Academic score of 7.0 with no individual band score < 7.0; only IELTS, TOEFL and PTE Academic results equal to IELTS 7/7 will be accepted)'
}, {
  icon: require('../../assets/icon/ic_certificate.svg'),
  title: 'Student visa',
  desc: 'Student visa'
}, {
  icon: require('../../assets/icon/ic_form.svg'),
  title: 'Placement',
  desc: (
    <div>
      <p>Documents required for placement (all these documents will be sent to your student email by placement
        coordinators)</p>
      <ul>
        <li>Working with Children Check</li>
        <li>Police Check</li>
        <li>International Police Check</li>
        <li>Schedule 3-Student Undertake</li>
        <li>Immunisation & Health Record Form</li>
      </ul>
    </div>
  ),
}, {
  icon: require('../../assets/icon/ic_formcheck.svg'),
  title: 'AHPRA registration',
  desc: (
    <div>
      <p>Documents required for AHPRA registration</p>
      <ul>
        <li>Working with Children Check</li>
        <li>Police Check</li>
        <li>English results (same as above)</li>
        <li>Certified prove of visa status</li>
        <li>Certified copy of passport</li>
        <li>Other proof of identity e.g. driver’s licence</li>
      </ul>
    </div>
  )
}];

const Description = () => (
  <Layout>
    <PageHeader title="Documents that you may need"/>
    <div>
      {StrategyList.map((item) => (
        <DescRow key={item.title} icon={item.icon} title={item.title}>{item.desc}</DescRow>
      ))}
    </div>
  </Layout>
);

export default class Document extends React.PureComponent {

  render() {
    return (
      <div className="document">
        <Banner
          title="Documents"
          titleStyle={{color: '#000'}}
          backgroundImage={require('../../assets/banner/banner_docs.jpeg')}
        />
        <Description/>
        <Footer/>
      </div>
    );
  }
}
