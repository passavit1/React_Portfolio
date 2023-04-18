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
        <Timeline.Item label="Oct 2017 - Aug 2022">
          Responsible for overall sales performance. Tracking, recording, and
          monitoring sales teams within a region.
        </Timeline.Item>
        <Timeline.Item label="Jan 2017 - Apr 2018">
          Monitor and analyze financial reports under the guidance of senior
          auditors as an audit assistant.
        </Timeline.Item>
        <Timeline.Item label="Sep 2022 - Present">
          Cloud Representative at SiS Distribution, responsible for helping
          customers understand the value of cloud technologies and how it can
          help them better serve their customers.
        </Timeline.Item>
      </StyledTimeLine>
    </>
  );
};

export default CareerPath;
