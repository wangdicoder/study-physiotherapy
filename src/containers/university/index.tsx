import React from 'react';
import Banner from "../../components/banner";
import PageHeader from "../../components/page-header";
import Layout from "../../components/layout";
import ALink from "../../components/link";
import Footer from "../../components/footer";

const Introduction = () => (
  <Layout>
    <PageHeader title="What is ISS?"/>
    <p>
      La Trobe International Student Services (ISS) provides additional supports for international students. You can
      visit La Trobe website to look for relevant information. (
      <ALink>https://www.latrobe.edu.au/students/international</ALink>)
    </p>
    <p>
      They can help you with academic, social, financial, cultural and pretty much any issues you encounter.
    </p>
    <p>One-on-one help (appointment needed)</p>
    <ul>
      <li>Academic, financial, accommodation, cultural and personal issues</li>
      <li>Visa issues</li>
      <li>Help on campus</li>
      <li>Community activities and volunteer work opportunities</li>
      <li>Critical incidents</li>
      <li>University policies and procedures</li>
    </ul>
    <p>
      To make appointment, call (03) 9479 1199 or Ask a Question online（
      <ALink>http://latrobe-current.custhelp.com/app/ask/session/</ALink>)
    </p>
    <br/>
    <p>24-hour student support hotline</p>
    <p>If you need help after-hours, call 1800 758 360</p>
  </Layout>
);

const CareerSupport = () => (
  <Layout>
    <PageHeader title="Career Support"/>
    <p>
      La Trobe University provides support for career development and helping with employment opportunities for all
      students.
    </p>
    <p>
      The <ALink link="https://www.latrobe.edu.au/students/opportunities/careers/contacts">Career Ready
      team</ALink> offers
      services:
    </p>
    <ul>
      <li>One-to-one career counselling</li>
      <li>
        Resume checking
        <ul>
          <li>https://latrobe.careerhub.com.au/students/workflows/detail/5</li>
          <li>Online 24/7 automated feedback or personalised feedback from a careers advisor</li>
        </ul>
      </li>
      <li>
        Interview practice
        <ul>
          <li><ALink link="https://latrobe.biginterview.com/">Big Interview</ALink> —- online tool for tips on answering
            interview
            questions, and practice for interviews
          </li>
          <li>Use your La Trobe email address to register for a free account and get started.</li>
        </ul>
      </li>
      <li>
        <ALink link="https://mentoring.latrobe.edu.au/about">One-to-one career ready mentoring</ALink>
        <ul>
          <li>Industry Mentoring is an opportunity for students to connect with an industry professional in a 1 to 1
            mentoring relationship.
          </li>
          <li>Aiming to provide opportunities for students to grow professional networks and professional development
            experiences and skills to gain the edge when applying to graduate employers
          </li>
        </ul>
      </li>
      <li>
        Lunch-time seminars and workshops on resume writing, interview skills, job seeking, internships, graduate
        recruitment and assessment centres.
        <ul>
          <li>Relevant information can be found
            at: <ALink>https://www.latrobe.edu.au/students/opportunities/careers/events</ALink>
          </li>
        </ul>
      </li>
    </ul>
  </Layout>
);

const Counselling = () => (
  <Layout>
    <PageHeader title="Counselling & mental health"/>
    <p>Caring and effective psychological, social, and emotional support to enhance students’ academic and personal
      success. Services offered?</p>
    <ul>
      <li>
        <ALink link="https://www.latrobe.edu.au/students/support/wellbeing/counselling/individual-counselling">Individual
          counselling</ALink>
        <ul>
          <li>Study-related issues (e.g. procrastination, exam anxiety)</li>
          <li>Coping with placements</li>
          <li>Relationship or family problems</li>
          <li>Stress, anxiety and depression</li>
          <li>Adjusting to university life and homesickness</li>
          <li>Loneliness and social isolation</li>
          <li>Low self-esteem and lack of confidence</li>
          <li>Sexuality and gender identity</li>
          <li>Loss and grief</li>
          <li>Coping with physical or mental illness</li>
          <li>Eating problems and body image issues</li>
          <li>Substance abuse and additions</li>
        </ul>
      </li>
      <li>
        <ALink link="https://www.latrobe.edu.au/students/support/wellbeing/counselling/group-programs-and-workshops">Group
          programs and workshops</ALink>
        <ul>
          <li>Free groups and workshops around study-related skills, health and wellbeing</li>
          <li>Topics can be found
            at <ALink>https://www.latrobe.edu.au/students/support/wellbeing/counselling/group-programs-and-workshops/sessions</ALink>
          </li>
        </ul>
      </li>
      <li>
        <ALink link="https://www.latrobe.edu.au/students/support/wellbeing/counselling/self-help-resources">Self-help
          resources</ALink>
        <ul>
          <li>Procrastination</li>
          <li>Managing stress</li>
          <li>Staying on track and looking after your mental health</li>
          <li>Performance anxiety</li>
          <li>Handling exam stress</li>
          <li>Mindfulness resources</li>
          <li>And a lot more…</li>
        </ul>
      </li>
    </ul>
  </Layout>
);

export default class University extends React.PureComponent {

  render() {
    return (
      <div className="university">
        <Banner title="La Trobe International Student Services"/>
        <Introduction/>
        <CareerSupport/>
        <Counselling/>
        <Footer/>
      </div>
    );
  }
}
