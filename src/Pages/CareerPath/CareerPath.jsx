import React from "react";
import { Timeline } from "antd";
import styled from "styled-components";

const StyledTimeLine = styled(Timeline)`
  color: red;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .ant-timeline-item {
    margin-bottom: 80px;
  }
`;

const CareerPath = () => {
  return (
    <>
      <StyledTimeLine mode={"left"}>
        <Timeline.Item label="Jan 2017 - Apr 2018">
          <p>Audit assistants at DIA International</p>
          <p>
            Responsible in monitor and analyse financial reports under the
            guidance of senior auditors.
          </p>
        </Timeline.Item>
        <Timeline.Item label="Oct 2018 - Aug 2022">
          <p>Area Sale at POSSEFY GROUP COMPANY LIMITED</p>
          <p>
            Responsible for the overall sales performance. Tracking, recording,
            and monitoring sales teams within a region.
          </p>
        </Timeline.Item>
        <Timeline.Item label="Sep 2022 - May 2023">
          <p>Cloud Representative at SiS Distribution</p>
          <p>
            responsible for helping customers understand the value of cloud
            technologies and how it can help them better serve their customers.
          </p>
        </Timeline.Item>
      </StyledTimeLine>
    </>
  );
};

export default CareerPath;
