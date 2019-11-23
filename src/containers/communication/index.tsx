import React from 'react';
import Banner from "../../components/banner";
import './communication.scss';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const Barriers = () => (
  <div className="communication__barriers">
    <div className="section">
      <h2 className="communication__title">What barriers do they have?</h2>
      <p>
        Communication has a fundamental role in physiotherapy. Therapist relies heavily on verbal communication not
        only to obtain relevant information, such as consent, medical hisotry, social history, goals, but also to
        explain
        conditions and instructions to patients.
      </p>
      <p>
        It also helps build a rapport with patients and thus achieve patient-centered care.
      </p>
      <p>
        More importantly, language has a direct influence on students’ learning experience. “Feeling stressed” or “Not
        confident” are the common feelings reported by international students throughout their period of studying.
        Things like group discussions, approaching to teaching staff and patients, can be hugely impacted by their lack
        of confidence in communication.
      </p>
    </div>
  </div>
);

const Strategies = () => (
  <div>
    <div className="section">
      <h2 className="communication__title">Strategies</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Form a small group" key="1">
          <ol>
            <li>To role-play and practice relevant skills.</li>
            <li>This has been suggested to be very helpful among 4th year international students.</li>
            <li>Practice helps you become more fluent, feel more confident and get experience actually using all the words and grammar you have learned.</li>
          </ol>
        </TabPane>
        <TabPane tab="Ask for help" key="2">
          <ol>
            <li>Socialise with local students and ask for advice regarding your pronunciations or areas that you can improve on your communication.</li>
            <li>Actively seek help from peers, tutors and supervisors. Get advice from different people. </li>
          </ol>
        </TabPane>
        <TabPane tab="Get familiar with different English accents" key="3">
          <ol>
            <li>In the placements or real-life, you will be talking to patients and clients from different backgrounds. Some of them are using English as their second language as well. Therefore, get yourself familiar with different English accents can be helpful. YouTube is a good platform to have an idea of how people from different countries may speak English differ from each other. </li>
          </ol>
        </TabPane>
        <TabPane tab="Read local news, such as sports" key="4">

        </TabPane>
        <TabPane tab="Be confident" key="5">

        </TabPane>
      </Tabs>
    </div>
  </div>
);

export default class Communication extends React.PureComponent {

  render() {
    return (
      <div className="layout communication">
        <Banner title="Communication"/>
        <Barriers/>
        <Strategies/>
      </div>
    );
  }
}
