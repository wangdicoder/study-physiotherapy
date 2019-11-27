import React from 'react';
import './more-info.scss';
import ALink from "../../../../components/link";

const MoreInfoBanner = () => (
  <div className="more-info-banner">
    <h3 className="more-info-banner__title">Find relevant information from</h3>
    <ALink className="more-info-banner__link">https://international.commonwealthfund.org/countries/australia</ALink>
  </div>
);

export default MoreInfoBanner;
