import React from 'react';
import Banner from "../../components/banner";
import './communication.scss';
import PageHeader from "../../components/page-header";
import Layout from "../../components/layout";
import Footer from "../../components/footer";
import StrategyRow from "./components/strategy-row";

const Barriers = () => (
  <Layout>
    <PageHeader title="What barriers do they have?"/>
    <p>
      Communication has a fundamental role in physiotherapy. Therapist relies heavily on verbal communication not
      only to obtain relevant information, such as consent, medical history, social history, goals, but also to
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
  </Layout>
);

const Strategies = () => (
  <Layout className="gray">
    <PageHeader title="Strategies"/>
    <StrategyRow
      icon={require('../../assets/icon/ic_group.svg')}
      title="Form a small group">
      <ul>
        <li>To role-play and practice relevant skills.</li>
        <li>This has been suggested to be very helpful among 4th year international students.</li>
        <li>Practice helps you become more fluent, feel more confident and get experience actually using all the
          words
          and grammar you have learned.
        </li>
      </ul>
    </StrategyRow>
    <StrategyRow
      icon={require('../../assets/icon/ic_ask.svg')}
      iconStyle={{width: 40, height: 40}}
      title="Ask for help">
      <ul>
        <li>Socialise with local students and ask for advice regarding your pronunciations or areas that you can
          improve on your communication.
        </li>
        <li>Actively seek help from peers, tutors and supervisors. Get advice from different people.</li>
      </ul>
    </StrategyRow>
    <StrategyRow
      icon={require('../../assets/icon/ic_accent.svg')}
      title="Get familiar with different English accents">
      <ul>
        <li>In the placements or real-life, you will be talking to patients and clients from different backgrounds.
          Some of them are using English as their second language as well. Therefore, get yourself familiar with
          different English accents can be helpful. YouTube is a good platform to have an idea of how people from
          different countries may speak English differ from each other.
        </li>
      </ul>
    </StrategyRow>
    <StrategyRow
      icon={require('../../assets/icon/ic_news.svg')}
      title="Keep up-to-date">
      <ul>
        <li>
          It is always a good idea to have some chitchat with your patients in the treatment session. This will help
          to build rapport between therapist and patients. Hence, keep an eye of recent news will help with the topics
          for conversations. Elderly generations usually to share ideas of what happened recently around the world.
          Young generations may be more interested in sports, especially if you’re working in a sport physiotherapy
          clinic.
        </li>
      </ul>
    </StrategyRow>
    <StrategyRow
      icon={require('../../assets/icon/ic_thumb.svg')}
      title="Be confident">
      <ul>
        <li>We are bilingual. Either Vietnamese, Cantonese, Korean or Mandarin, we can speak two languages, which can
          be a great advantage. You’re gonna have patients coming from different backgrounds and someday you’ll have
          someone come to you speaking your own language, and in that case, you can treat them even better because
          there is no communication barriers.
        </li>
        <li>Don’t pay too much attention on your accent. Everyone has an accent. There are British accent, American
          accent, Kiwi accent, Aussie accent, Indian accent, etc. Thus, there is no shame to have an accent. As long
          as people can understand you. Language ultimately is a communication tool to connect people.
        </li>
        <li>Speak louder! Sometimes it’s not that your English is poor or your pronunciation is terrible. It may just
          because you’re speaking too softly. Especially for older generations, a soft volume does not help. Try to
          speak louder and more confidently.
        </li>
      </ul>
    </StrategyRow>
  </Layout>
);

export default class Communication extends React.PureComponent {

  render() {
    return (
      <div className="communication">
        <Banner
          title="Communication"
          backgroundImage={require('../../assets/banner/banner_communication.jpg')}
        />
        <Barriers/>
        <Strategies/>
        <Footer/>
      </div>
    );
  }
}
