import React from 'react';
import './health.scss';
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import PageHeader from "../../components/page-header";
import ALink from "../../components/link";
import Footer from "../../components/footer";
import MoreInfoBanner from "./components/more-info-banner";
import Reference from "../../components/reference";
import RefTag from "../../components/ref-tag";

const Introduction = () => (
  <Layout className="gray">
    <p>Understanding the local healthcare system helps significantly with discharge planning and providing a more
      holistic care to patients.
    </p>
    <p>It is also part of Code of Conduct by the Australian Health Practitioner Regulation Agency
      (AHPRA)<RefTag>1</RefTag> that
      practitioners need to understand the principles of public health and ensure the services are provided
      appropriately to the patients.
    </p>
    <p>However, informal discussions with current physiotherapy students revealed that the Australian healthcare
      system was not addressed in the university. As a result, international students find it hard to do an
      appropriate discharge planning and get involved in the multidisciplinary team. Their performance in the clinical
      placements, therefore, is hugely impacted by this lack of knowledge.
    </p>
    <p>For example, for a public patient with total hip replacement, he may be discharged from acute setting to an
      inpatient rehab setting with ambulating with 2 wheel frame and assist by 1. However, in the private setting, he
      may need to be ambulating with 2 wheel frame independently in order to be accepted by the inpatient rehab
      services. Different healthcare services have different discharge criteria, thus, it is important to get a good
      understanding of the local healthcare system.
      <ul>
        <li>Ask your supervisors for more information.</li>
        <li>Exchange ideas among your peers.</li>
      </ul>
    </p>
  </Layout>
);

const System = () => (
  <Layout className="gray">
    <PageHeader title="Public & Private System"/>
    <h3>Public system</h3>
    <ul>
      <li>The government supports the cost of healthcare under the <ALink
        link="https://www.humanservices.gov.au/individuals/medicare">Medicare system.</ALink>
      </li>
      <li>It also provides extra healthcare benefits to veterans and people with low incomes.</li>
      <li>Relevant information can be found on <ALink
        link="https://www.humanservices.gov.au/individuals/services/medicare/medicare-card">Australian Department of
        Human Services.</ALink>
      </li>
      <li>With Medicare, people are entitled to free treatment as a public patient in a public hospital. It also covers
        part or all of the cost of seeing a GP, a specialist, and some allied health services, such as physiotherapy and
        occupational therapy.
      </li>
      <li>Find the list of public hospitals at here:
        <ALink>https://www2.health.vic.gov.au/hospitals-and-health-services/public-hospitals-victoria</ALink>.
      </li>
    </ul>

    <h3>Private system</h3>
    <ul>
      <li>With a private healthcare system, you will have more choice about your care.</li>
      <li>Waiting time for elective surgery is usually shorter.</li>
      <li>Find the list of private hospitals at here: {' '}
        <ALink>https://www2.health.vic.gov.au/about/publications/policiesandguidelines/private-hospitals-list</ALink>.
      </li>
      <li>Different insurance companies will have different cover schemes, which will impact on your discharge
        planning.
      </li>
      <li>Some popular private health companies:</li>
      <ul>
        <li><ALink link="https://www.medibank.com.au/">Medibank</ALink></li>
        <li><ALink link="https://www.bupa.com.au/">Bupa</ALink></li>
        <li><ALink link="https://www.nib.com.au/">NIB</ALink></li>
        <li><ALink link="https://www.worksafe.vic.gov.au/">Work cover</ALink></li>
        <li><ALink link="https://www.tac.vic.gov.au/">Transport Accident Commission (TAC)</ALink></li>
      </ul>
    </ul>

    <h3>Clinics</h3>
    <p>Apart from hospital and subacute care, there are also clinics and funding schemes to help.</p>
    <h4>Clinic: GP, PT, podiatrist, ortho</h4>
    <ul>
      <li>Can be out of pocket or with private health.</li>
      <li>For example, a physio initial session charges $110, if your private health covers $60, then the out of pocket
        is $50.
      </li>
    </ul>
    <h4>Funding Schemes</h4>
    <ul>
      <li>NDIS</li>
      <ul>
        <li><ALink link="https://www.ndis.gov.au/">National Disability Insurance Scheme (NDIS)</ALink></li>
        <li>For eligible Australians with a permanent or significant disability.</li>
      </ul>
      <li>EPC</li>
      <ul>
        <li>Chronic Disease Management (formerly Enhanced Primary Care or EPC) GP services</li>
        <li>Enable GPs to plan and coordinate the health care of patients with chronic or terminal medical conditions,
          including patients with these conditions who require multidisciplinary, team-based care from a GP and at least
          two other health or care providers.
        </li>
        <li>Eligible patients need to be referred by GP for allied health services, e.g. PT or OT.</li>
        <li>Please find more information on: {' '}
          <ALink>https://www1.health.gov.au/internet/main/publishing.nsf/Content/mbsprimarycare-chronicdiseasemanagement</ALink>
        </li>
      </ul>
      <li>MAC</li>
      <ul>
        <li><ALink link="https://www.myagedcare.gov.au/">My Aged Care (MAC)</ALink></li>
        <li>
          For those aged 65 years or older (50 years or older for Aboriginal or Torres Strait Islander); or 50 years or
          older (45 years or older for Aboriginal or Torres Strait Islander) and on a low income, homeless, or at risk
          of being homeless
        </li>
        <li>A government-funded aged care services, which provides:
          <ul>
            <li>Information on the different types of aged care services available</li>
            <li>An assessment of needs to identify eligibility and the right type of care</li>
            <li>Referrals and support to find service providers that can meet people’s needs</li>
            <li>Information on what people might need to pay towards the cost of care</li>
          </ul>
        </li>
        <li>Please find more information on: <ALink>https://www.myagedcare.gov.au/about-us</ALink></li>
      </ul>
      <li>With different funding schemes, patients get access to GP, PT, EP, OT, SW etc</li>
      <ul>
        <li>If GP with bulk bill, then it might be $0 (medicare covers fee).</li>
        <li>If GP cost $110, MAC/NDIS/EPC covers $52, then out of pocket $58.</li>
        <li>Depending on what the PT charges at the clinic, will decide if the patient has to pay out of pocket.</li>
      </ul>
    </ul>
    <p><b>Depends on what level of cover or how much you pay your insure will determine your cost for extra cover or
      hospital cover. For example:</b></p>
    <h4>Extra cover</h4>
    <ul>
      <li>Level A Cover = Physio $60 (The private insurance will cover for $60 of your physio session)</li>
      <li>Level B Cover = Physio $40 (The private insurance will cover for $40 of your physio session)</li>
      <li>Level C Cover = Physio $0 (The private insurance will NOT cover for your physio session)</li>
      <li>Apparently, Level A Cover cost more than Level B or C.</li>
    </ul>
    <h4>Hospital cover</h4>
    <ul>
      <li>To be used at hospital e.g. acute or subacute</li>
      <li>Level A Cover = acute & rehab</li>
      <li>Level B Cover = acute & rehab, but not surgery</li>
      <li>Level C cover = acute but not rehab or surgery</li>
      <li>Apparently, Level A Cover cost more than Level B or C.</li>
    </ul>
  </Layout>
);

const Architecture = () => (
  <Layout>
    <PageHeader title="An Illustration of Healthcare System in Australia"/>
    <img src={require('../../assets/bg/group.svg')} alt="group" className="health__group"/>
  </Layout>
);

const MoreInfo = () => (
  <div className="health__more-info">
    <div className="section">
      <MoreInfoBanner/>
    </div>
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
        <Architecture/>
        <System/>
        <MoreInfo/>
        <Reference>
          <ol>
            <li>Australian Health Practitioner Regulation Agency (AHPRA). (2017, April 06). Code of conduct.
              Retrieved from Physiotherapy Board of Australia :
              https://www.physiotherapyboard.gov.au/Codes-Guidelines/Code-of-conduct.aspx
            </li>
          </ol>
        </Reference>
        <Footer/>
      </div>
    );
  }
}
