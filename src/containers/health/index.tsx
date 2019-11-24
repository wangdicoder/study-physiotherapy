import React from 'react';
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import PageHeader from "../../components/page-header";
import ALink from "../../components/link";
import Footer from "../../components/footer";

const Introduction = () => (
  <Layout>
    <p>
      Understand healthcare system helps with discharge planning and a more holistic care to the patients. For
      example, for a public patient with total hip replacement, he may be discharged from acute setting to an inpatient
      rehab setting with ambulating with 2 wheel frame and assist by 1. However, in the private setting, he may need to
      be ambulating with 2 wheel frame independently in order to be accepted by the inpatient rehab services. Different
      healthcare services have different discharge criteria, thus, it is important to get a good understanding of the
      local healthcare system.
    </p>
  </Layout>
);

const System = () => (
  <Layout>
    <PageHeader title="Public & private system"/>
    <h3>Public system</h3>
    <ul>
      <li>The government supports the cost of healthcare under the Medicare system.</li>
      <li>It also provides extra healthcare benefits to veterans and people with low incomes.</li>
      <li>Relevant information can be found on <ALink link="https://www.humanservices.gov.au/individuals/services/medicare/medicare-card">Australian Department of Human Services</ALink> website.</li>
      <li>With Medicare, people are entitled to free treatment as a public patient in a public hospital. It also covers part or all of the cost of seeing a GP, a specialist, and some allied health services, such as physiotherapy and occupational therapy.</li>
    </ul>
    <h3>Private system</h3>
    <ul>
      <li>With a private healthcare system, you will have more choice about your care.</li>
      <li>Waiting time for elective surgery is usually shorter.</li>
    </ul>
  </Layout>
);

const MoreInfo = () => (
  <div>
    Find relevant information from : <ALink>https://international.commonwealthfund.org/countries/australia/</ALink>
  </div>
);

export default class Health extends React.PureComponent {

  render() {
    return (
      <div className="health">
        <Banner
          title="Healthcare System"
          backgroundImage={require('../../assets/banner/banner_healthcare.jpg')}
        />
        <Introduction/>
        <System/>
        <MoreInfo/>
        <Footer/>
      </div>
    );
  }
}
