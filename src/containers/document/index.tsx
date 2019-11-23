import React from 'react';
import Banner from "../../components/banner";

export default class Document extends React.PureComponent {

  render() {
    return (
      <div className="document">
        <Banner title="Documents"/>
      </div>
    );
  }
}
