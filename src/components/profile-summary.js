import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const ProfileSummary = ({ match }) => {
  var organizationId = match.params.organizationId;
  const [organizationInformation, setOrganizationInformation] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchClimateRisks = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/organizations/${organizationId}`);
      const responseData = await response.json();
      setOrganizationInformation(responseData);
    } catch (error) {
      setOrganizationInformation(error.message);
    }
  };

  useEffect(() => { if (organizationId) { fetchClimateRisks() } }, [organizationId]);

  if (!organizationInformation) {
    return 'loading'
  }
  var data = organizationInformation[0];

  console.log(data)

  return (
    <div className="my-5">
      <h3 className="profile-title">{organizationId}</h3>

      {/* Subtitle */}
      <Row className='py-2'>
        <Col className="col-md-6 col-sm-12">
          <Row>
            {/* <Col className="col-xs-4">Source: {data.url} </Col> */}
          </Row>
        </Col>
      </Row>

      <div className="profile-snippet">
        <p className="my-1"><strong>Featured Snippet</strong></p>
        <p className="">{data.risks}</p>
      </div>
    </div>
  );
};

export default ProfileSummary;