import React from 'react';
import Banner from "../../components/banner";
import './communication.scss';
import PageHeader from "../../components/page-header";
import Layout from "../../components/layout";
import Footer from "../../components/footer";
import StrategyRow from "./components/strategy-row";
import RefTag from "../../components/ref-tag";
import Reference from "../../components/reference";

const Barriers = () => (
  <Layout>
    <PageHeader title="What barriers do they have?"/>
    <p>
      Communication has a fundamental role in physiotherapy. Therapist relies heavily on verbal communication not
      only to obtain relevant information, such as consent, medical history, social history, goals, but also to
      explain conditions and instructions to patients<RefTag>1</RefTag>.
    </p>
    <p>
      It also helps build a rapport with patients and thus achieve patient-centered care<RefTag>2</RefTag>.
    </p>
    <p>
      More importantly, language has a direct influence on students’ learning experience. “Feeling stressed” or “Not
      confident” are the common feelings reported by international students throughout their period of studying.
      Things like group discussions, approaching to teaching staff and patients, can be hugely impacted by their lack
      of confidence in communication.
    </p>
    <p>
      Understanding and comprehension are compromised by complex medical terminology, hospital slang, strong accent,
      fast speed of speaking<RefTag>3</RefTag>.
    </p>
    <p>
      Clinical educators also found it difficult to relate to international students due to language and cultural
      diversity<RefTag>4</RefTag>.
    </p>
  </Layout>
);

const Strategies = () => (
  <Layout className="gray">
    <PageHeader title="Strategies"/>
    <StrategyRow
      icon={require('../../assets/icon/ic_message.svg')}
      title="Practice by having conversations with yourself">
      <ul>
        <li>
          For example, when you are driving a car, pick a topic and talk
          to yourself. Get some simulations in the head. Let’s say, what a knee OA is. Explain it out and speak it to
          yourself. Practice makes perfect. Make sure your explanation is thorough and clear.
        </li>
      </ul>
    </StrategyRow>
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
      icon={require('../../assets/icon/ic_assistant.svg')}
      title="Look for customer service jobs and get familiar with different accents">
      <ul>
        <li>For example, part-time job at a bakery or café, AHA or local gyms.</li>
        <li>Expose yourself to talk with different people.</li>
        <li>In the placements or real-life, you will be talking to patients and clients from different backgrounds. Some
          of them are using English as their second language as well. Therefore, get yourself familiar with different
          English accents can be helpful. YouTube is a good platform to have an idea of how people from different
          countries may speak English differ from each other.
        </li>
      </ul>
    </StrategyRow>
    <StrategyRow
      icon={require('../../assets/icon/ic_news.svg')}
      title="Get involved with local culture">
      <ul>
        <li>Engage in Australian culture. Get a good understanding of Australian culture which can help with your
          communication. For example, what people do for interest, why they like it, what the national sport is.
        </li>
        <li>It is always a good idea to have some chitchat with your patients in the treatment session. This will help
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
          be a great advantage. You’re going to have patients coming from different backgrounds and someday you’ll have
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
        <li>
          Don’t stress! Locals have much more life experience in Australia. And communication is a skill that every
          individual want to improve on. Doesn’t matter what language your mother tongue is. As a therapist, it requires
          us to practice our communication skill throughout our career and to adapt different communication strategies
          while talking to different people. It comes with practices.
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
        <Reference>
          <ol>
            <li>Lee, T. S., Lansbury, G., & Sullivan, G. (2005). Health care interpreters: A physiotherapy perspective.
              Australian Journal of Physiotherapy, 161-165.
            </li>
            <li>Josephson, I., Woodward-Kron, R., Delany, C., & Hiller, A. (2015). Evaluative language in physiotherapy
              practice: How does it contribute to the therapeutic relationship? Social Science & Medicine, 128e136.
            </li>
            <li>Pitkajarvi, M., Eriksson, E., & Pitkala, K. (2012). The Diversity Issue Revisited: International
              Students in Clinical Environment. International Scholarly Research Network Nursing, 1-6.
            </li>
            <li>
              Mikkonen, K., Elo, S., Kuivila, H.-M., Tuomikoski, A.-M., & Kaariainen, M. (2016). Culturally and
              linguistically diverse healthcare students’ experiences of learning in a clinical environment: A
              systematic review of qualitative studies. International Journal of Nursing Studies, 173–187.
            </li>
          </ol>
        </Reference>
        <Footer/>
      </div>
    );
  }
}
