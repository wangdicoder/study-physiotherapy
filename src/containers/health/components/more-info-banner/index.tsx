import React from 'react';
import './more-info.scss';
import ALink from "../../../../components/link";

const MoreInfoBanner = () => (
  <div className="more-info-banner">
    <h3 className="more-info-banner__title">Find relevant information from</h3>
    <ALink className="more-info-banner__link">https://international.commonwealthfund.org/countries/australia</ALink><br/>
    <ALink className="more-info-banner__link">https://www2.health.vic.gov.au/hospitals-and-health-services</ALink>
  </div>
);

export default MoreInfoBanner;
