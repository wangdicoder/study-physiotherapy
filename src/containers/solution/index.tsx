import React from 'react';
import { Timeline } from 'antd';
import Banner from "../../components/banner";
import Layout from "../../components/layout";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";
import Bubble from "../issue/components/bubble";

const Colors = ['2ec7c9', 'b6a2de', '5ab1ef', 'ffb980', 'e5cf0d', '97b552', 'd87a80', '9a7fd1'];
const {Item} = Timeline;

const BubbleList = [{
  contents: [
    '- Positive self-talks and self-believe',
    '- Celebrate achievements more actively',
    '- Study hard. Avoid procrastination and last-minute work',
    '- Show commitment to learning—tutors and clinical supervisors are more willing to teach you if they know you’re interested and committed.',
    '- Share concerns with peers, seniors, tutors and family',
    '- Seek help when necessary—always ask for help if in doubt! Everyone is friendly and unless you less, you never know how much help they can offer you!',
    '- Source out activities to de-stress e.g. sports, music, etc.',
  ]
}, {
  contents: [
    '- Show initiative, complete problem lists on time, discuss Evidence-based-practice with supervisors to get feedback on their opinions.',
    '- Enjoy your learning journey! Take in as much as you can from the physios and your supervisor! It will be a rewarding experience indeed!',]
}, {
  contents: [
    '- Schedule your time. Maintain social contact with friends/classmates. Find part-time job to enhance language and communication capacity.',
    '- Not too stressed about passing, focus on learning.',
    '- Find out the preferences/teaching styles of your supervisor before placement (ask students who had been with that supervisor)',
  ]
}, {
  contents: [
    'Stay active and positive. Be open to meet new friends from different backgrounds. Join relevant clubs or subscribe to newsletter. Talk to people you can trust about your difficulties/struggles. Most importantly, DON’T hide in your own cave! Go and get a life!'
  ]
}, {
  contents: [
    '- Try volunteering to help understand the community better and how things work. This also helps to build confidence in talking to strangers in English, which is an essential skill in placements. ',
    '- Form study groups to share information and practice together! Find out more about an upcoming placement from peers who have done it.',
    '- Be proactive and ask lots of questions while on placement!'
  ]
}];

const Strategies = () => (
  <Layout>
    <PageHeader title="What are their coping strategies"/>
    {BubbleList.map((item, idx) => (
      <Bubble key={idx} contents={item.contents} left={idx % 2 === 0} bgColor={Colors[idx]}/>
    ))}
  </Layout>
);

const Feedback = () => (
  <Layout className="gray">
    <PageHeader title="Feedback for university and clinical educators"/>
    <Timeline mode="alternate">
      <Item>Workshops to orientate us with local customs (e.g. slang) and the healthcare system, how to communicate with
        patients</Item>
      <Item>Educate teaching staff on the unique needs and difficulties of international students.</Item>
      <Item>Have regular follow-up meetings for international students throughout the semester.</Item>
      <Item>Acknowledge that English is not our primary language and be understanding of the challenges we face when
        communicating with patients during placement. </Item>
    </Timeline>
  </Layout>
);

export default class Solution extends React.PureComponent {

  render() {
    return (
      <div>
        <Banner
          title="Brainstorm & Feedback"
          backgroundImage={require('../../assets/banner/banner_feedback.jpg')}
        />
        <Strategies/>
        <Feedback/>
        <Footer/>
      </div>
    );
  }
}
