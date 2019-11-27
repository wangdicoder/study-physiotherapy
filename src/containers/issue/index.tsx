import React from 'react';
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import PageHeader from "../../components/page-header";
import Bubble from "./components/bubble";
import Footer from "../../components/footer";

const Colors = ['2ec7c9', 'b6a2de', '5ab1ef', 'ffb980', 'e5cf0d', '97b552', 'd87a80', '9a7fd1'];

const BubbleList = [{
  contents: [
    'Difficulty in getting help when overseas. For example, need to talk to someone over the phone for urgent issues but incurring high phone bills',
    'Difficult to find accommodation with an affordable rental rate and good locations.',
    'Public transportation is not idea sometimes, especially when you’re in placement. Sometimes requires you to have a car.',
    'Worries about fitting in with the Australian culture; not knowing the culture therefore finding it difficult to have common topics with other students.'
  ],
}, {
  contents: [
    'English is my 2nd language, I have to put in double the effort in learning to give appropriate instructions to patients.',
    'I also have to learn to adapt to the local’s communication style which is a lot different compared to where I come from.',
    'The healthcare system is very different in Australia. Whilst most locals are well versed with the public and private system, I had to study extra resources to enhance my understanding. Wish they have provided us with some information in uni. '
  ],
}, {
  contents: [
    'Overseas students generally get more stressed in studying and in placement. I have expectations to do well from family members who are paying for my tuition fees. I can’t afford to fail because it will mean I have to fork out another $5,000. Homesick is another problem. And I have to be able to take care of myself while ensuring I am on track with studies. '
  ]
}, {
  contents: [
    'There is also a lack of resources for post-graduate work formalities. I have to sort out the visa I can apply for, how to apply for physio registration as an international etc. Because not much info in provided for me.  '
  ]
}, {
  contents: [
    'Not understanding the healthcare system in Australia and the lack of address of this issue from uni staff. This can have an impact on discharge planning during placement and knowing the options available. '
  ]
}, {
  contents: [
    'Not knowing how to communicate with patients, e.g. small talks or building rapport due to lack of knowledge of slangs or local culture. '
  ]
}, {
  contents: [
    'Lack of discipline-specific staff/support for international students. For example, faculty staff knows nothing about international student issues and international office only gives general advice regarding visa issues. '
  ]
}, {
  contents: [
    'Overall lack of awareness from faculty of the presence of international students in the cohort and the unique needs/difficulties we have. For example, failing a subject and needing to repeat and how this impacts on our enrolment and visa status. '
  ]
}];

const BubbleMessage = () => (
  <Layout>
    <PageHeader title="Hear what they’re saying"/>
    {BubbleList.map((item, idx) => (
      <Bubble key={idx} contents={item.contents} left={idx % 2 === 0} bgColor={Colors[idx]}/>
    ))}
  </Layout>
);

export default class Issue extends React.PureComponent {

  render() {
    return (
      <div>
        <Banner
          title="Common Issues"
          backgroundImage={require('../../assets/banner/banner_issue.jpg')}
        />
        <BubbleMessage/>
        <Footer/>
      </div>
    );
  }
}
